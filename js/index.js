var ItemsWidth = 100;
perPage = 48;


// function to get needed data from Dribbble
$.ajax ({
  type:'GET',
  url: 'https://api.dribbble.com/v1/shots/?access_token=6c702277ce2fe998664aaf09b8359e2022b4ce809429a73f2bfe17b34205ca52',
  data: {per_page: perPage},
  success: function (shots) {
    //get shot urls for image population
    $.each(shots, function(index, shot) {
        var shotViewsNumber = shot.views_count;
        console.log(shotViewsNumber);
        shotUrl = shot.html_url;
    //  console.log(shot.images.html_url);
        shotView = shot.images.hidpi;
        if (shotView == null) {
        shotView = shot.images.normal;
      };

//     This line gets a dribbble shot, creates a div for it, and then wraps it inside a clickable link
        $('#ItemArea').append('<div class ="Items"> <a href ="' + shotUrl + '"> <img width= "' + ItemsWidth +'%" height = auto src="' + shotView + '" /> </a> </div>')
    });

  },

/*
  error:function (){

  }
*/

});

$.ajax ({
  type:'GET',
  url: 'https://api.dribbble.com/v1/shots/?access_token=6c702277ce2fe998664aaf09b8359e2022b4ce809429a73f2bfe17b34205ca52',
  data: {per_page: perPage},
  success: function (shots) {

$( "#MostViews" ).click(function(event){

  console.log("ayylmao");
// sort by views
  shots.sort(function(a, b) {
    return a.views_count - b.views_count;
  });

});

}

});
