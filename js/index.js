var ItemsWidth = 100;

$.ajax ({
  type:'GET',
  url: 'https://api.dribbble.com/v1/shots/?access_token=6c702277ce2fe998664aaf09b8359e2022b4ce809429a73f2bfe17b34205ca52',
  success: function (shots) {
  //get shot urls for image population
  $.each(shots, function(index, shot) {
    console.log(shot.images.hidpi);
    //  console.log(shot.images);
      shotUrl = shot.html_url;
    //  console.log(shot.images.html_url);
      shotView = shot.images.hidpi;
      if (shotView == null) {
        shotView = shot.images.normal;
      };
//      $('#ItemArea').append('<img class="Items" src="' + shotView + '" />')
//     This line gets a dribbble shot, creates a div for it, and then wraps it inside a clickable link
      $('#ItemArea').append('<div class ="Items"> <a href ="' + shotUrl + '"> <img width= "' + ItemsWidth +'%" height = auto src="' + shotView + '" /> </a> </div>')
//      $('.Items').wrapInner('<a href ="' + shotUrl + '"></a>')
    });
  }

});
