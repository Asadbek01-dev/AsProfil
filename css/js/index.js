function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

   
    $(document).ready(function(){
      $("video").prop('muted', true);
    
      $("video").click( function (){
          $(this).prop('muted', !$(this).prop('muted'));
      });
    
      $(".play-video").click( function (){
          $("video").prop('muted', !$("video").prop('muted'));
      });
    });