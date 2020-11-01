$(document).ready(function() {
  // Inserting New Video URL

// if twitch video

// if udemy video

// if skillshare video

  $('input').on('click', function() {
    console.log("Clicked Input Area");
    $('input').keypress(function(event) {
      if (event.which == 13) {



        //if youtube video
        let youtubeVideoId = "";
        let url = $('input').val();
        youtubeVideoId = url.split('v=')[1];
        let ampersandPosition = youtubeVideoId.indexOf('&');
        if (ampersandPosition != -1) {
          youtubeVideoId = youtubeVideoId.substring(0, ampersandPosition);
        }
        event.preventDefault();
        console.log("keypress 13");
        let insertHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +youtubeVideoId+ '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $('#displayArea').html(insertHtml);
        return
        //console.log(video_id);









      }
    });
  });

  $('html').on('mouseenter', function(){
    //$('#draggableArea').fadeIn();
    //$('input').fadeIn();
  });

  $('html').on('mouseexit', function(){
    //$('#draggableArea').fadeOut();
    //$('input').fadeOut();
  });
  $('body').on('mouseexit', function(){
    //$('#draggableArea').fadeOut();
    //$('input').fadeOut();
  });

  $('body').on('focusout', function(){
    //$('#draggableArea').fadeOut();
    //$('input').fadeOut();
  });
});
