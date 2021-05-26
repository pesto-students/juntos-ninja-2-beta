# YouTube Iframe API - startSecond

The property **startSeconds** lets you skip the given seconds from the start of video.

## Brief Overview

- **startSeconds** load video and skip the given seconds from the start.
- **startSeconds** only available when the player is loaded.
- **startSeconds** can be called at the initial load of the video.
- Similar to **startSeconds** we have **endSeconds** for deciding when to stop the video.

## How it can help with Sync

We can use this configuration for people that join the group late after video has already started to make them sync to other Users.
So when User join the host Party we will assign host youtube player current timestamp by method ytplayer.getCurrentTime(); to the start seconds i.e startSeconds = hostPlayer.getCurrentTime().

##### Note: getCurrentTime is not a function needs to be created manually [This is how you can do that](https://stackoverflow.com/questions/58870093/get-current-timestamp-of-embedded-youtube-playlist-videos-from-the-iframe-tag).

## Reference/Examples:
Below flow chart explain how will sync work for user joining our app late.

![alternative text](images/start-second-sync-flow.png)

Here an example of how the video is loaded by startSeconds via loadVideoById method.

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
      endSeconds: 35,
    });
  }
</script>
```
