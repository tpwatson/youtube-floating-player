$(document).ready(function() {
  // Inserting New Video URL
  $('input').on('click', function() {
    console.log("Clicked Input Area");
    $('input').keypress(function(event) {
      if (event.which == 13) {
        let url = $('input').val();
        let video_id = url.split('v=')[1];
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
        }
        $('iframe').attr("src", "https://www.youtube.com/embed/"+video_id);
        $('input').val("");
        console.log(video_id);
        event.preventDefault();
      }
    });
  });

  $('html').on('mouseenter', function(){
    $('#draggableArea').fadeIn();
    $('input').fadeIn();
  });

  $('html').on('mouseexit', function(){
    $('#draggableArea').fadeOut();
    $('input').fadeOut();
  });
  $('body').on('mouseexit', function(){
    $('#draggableArea').fadeOut();
    $('input').fadeOut();
  });

  $('body').on('focusout', function(){
    $('#draggableArea').fadeOut();
    $('input').fadeOut();
  });
});
