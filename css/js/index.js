function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    let ism = document.querySelector('#ismi');
    let telefon = document.querySelector('#telefoni');
    let mavzu = document.querySelector('#mavzusi');
    let messa = document.querySelector('#messa');
    let button = document.querySelector('#button');

    button.onclick = function(){
      ism.value = null;
      telefon.value = null;
      mavzu.value = null;
      messa.value = null;
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