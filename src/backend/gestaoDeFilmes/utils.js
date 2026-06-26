let player;
      function onYouTubeIframeAPIReady(iframe) {
        player = new YT.Player('player', {
      
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      
function onPlayerReady(event){

  event.target.playVideo();

}

function onPlayerStateChange(){

}
