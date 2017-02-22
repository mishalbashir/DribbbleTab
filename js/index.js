var ItemsWidth = 100;

$.ajax ({
  type:'GET',
  url: 'https://api.dribbble.com/v1/shots/?access_token=6c702277ce2fe998664aaf09b8359e2022b4ce809429a73f2bfe17b34205ca52',
  success: function (shots) {
  //get shot urls for image population
  $.each(shots, function(index, shot) {
    console.log(shot.images.hidpi);
    //  console.log(shot.images);
      shotView = shot.images.hidpi;
      if (shotView == null) {
        shotView = shot.images.normal;
      };

      $('#ItemArea').append('<img class="Items" height=auto src="' + shotView + '" />')
    });
  }

});
