# YouTube Player API Reference

The IFrame player API lets you embed a YouTube video player on your website and control the player using JavaScript.

Using the API's JavaScript functions, you can queue videos for playback; play, pause, or stop those videos; adjust the player volume; or retrieve information about the video being played. You can also add event listeners that will execute in response to certain player events, such as a player state change.

## startSeconds

The property <b>startSeconds</b> lets you skip the given seconds from the start.
events

<b>onReady</b>:- When the player is loaded to the dom.

<b>onStateChange</b>:- Listener for any change done to player.

## Basic working

- <b><b>startSeconds</b></b> load video and skip the given seconds from the start.
- <b>startSeconds</b> only available when the player is loaded.
- <b>startSeconds</b> can be called at the initial load of the video.
- Similar to <b>startSeconds</b> we have <b>endSeconds</b> for deciding when to stop the video.

## Conclusion
 we can use this configuration for people that join the group late after video has already started to make then sync to other Users. 

Reference/Examples:
https://codesandbox.io/s/competent-kepler-s2qbt?file=/index.html
