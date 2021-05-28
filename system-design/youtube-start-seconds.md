# YouTube Iframe API - `startSeconds`

The property **startSeconds** lets you skip the given seconds from the start of video.

## Brief Overview for `startSeconds`

- `startSeconds` accepts values in seconds.
- Its inclusive which means player seeks till the start of startSeconds.
- It only available when the player is loaded.
- It can only be used at the initial load of the video via `onReady` methods provided by **IFrame API**.

## Where to use `startSecond` and how to use it?

`startSeconds` is a config option available in `loadVideoById` method which is available only after player is loaded to the dom.

## how do de know when player is loaded to the dom?

Youtube Iframe API provide us with helpful event like `onReady` which execute after player is successfully loaded to the dom.

Here an example of how the video skip 30 seconds inclusive by `startSeconds` with `loadVideoById` method using `onReady` event.

```html
<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
<div id="player"></div>
<script>
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      playerVars: { playsinline: 1 },
      events: { onReady: onPlayerReady },
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log("player loaded to dom");
    player.loadVideoById({
      videoId: "bHQqvYy5KYo",
      startSeconds: 30,
    });
  }
</script>
```

## How it can help with Sync?

For people that join the group late after video has already started to make them sync to other Users. We can actually use the current timestamp of the host player and use it that as `startSeconds` for the new joiner.

Lets see how can this be achieved.

##### Note: here Host refers client React app that create Room.

So when User join the host Party we will assign host's youtube player current timestamp by method `player.getCurrentTime()` in for eg. `startSeconds = hostPlayer.player.getCurrentTime()`.

The above logic can be achieved via sockets where host client will broadcast `getCurrentTime()` that will be shared to all other clients except host client to maintain video sync.

Lets start with when host create a room and play a video.

First host will create the room and call `POST API /room` to add room details to Database.
Also this will include the video ID that will be added by the host.

Host user will have a Socket listener added to listen to new Joiners

```js
// here player refers to HOST's youtube iframe player
io.on('new_user', (socket) => {
  socket.emit("video_current_times", {
    time: player.getCurrentTime(),
  });
});

// now this broadcast will be captured by newly user that joins by the following code.

socket.on("video_current_times", function (data) {
  // save this data
  if(!this.state.videoLoaded) {
    this.setState(currentTime: data.time);
  }
});

// After youtube video is loaded to dom we will execute player method loadVideoById to use startSeconds

function onPlayerReady(event) {
  console.log("player loaded to dom");
  player.loadVideoById({
    videoId: `videoId Received Via from room Service`,
    startSeconds: this.state.currentTime,
  });
  // set videoloaded to avoid setting currentTime
  this.setState({ videoLoaded: true });
}
```

## What if video takes time to load at dom `currentTime` of host should be updated?
Yes we should keep receiving `currentTimeStamp` until video is loaded and make sure to use the latest one.

## how do new User get the video ID that is passed in `loadVideoById`?

We will get video id from Room Service via `GET /room` which will provide us with video url required by the new joiner to give add it to `loadVideoById`'s config.

This would sync our new User that joins the room with the host currentTimestamp of video.

## What about buffering or slow internet connection will it cause issue with sync?

Yes that will cause issue with the sync since a good internet connection is required to have smooth syncing exerience for video co-viewing. But after few seconds/mins if internet works fine them rest of the syncing can be maintained via `seekTo` API more information about how it can help with further syncing during video is playing can be found at seekTo Doc.

## Reference/Examples:

Below flow chart explain how will sync work for user joining our app late.

![alternative text](images/start-second-sync-flow.png)
