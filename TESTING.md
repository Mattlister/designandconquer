<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
</head>

<body>
  <div class="container-fluid">
    <h1>Display Google maps in Bootstrap Modal</h1>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-lat='21.03' data-lng='105.85'>
      Location 1
    </button>

    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" data-lat='10.85' data-lng='106.62'>
      Location 2
    </button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 modal_body_content">
              <p>Some contents...</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map_canvas"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>Else...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Placed at the end of the document so the pages load faster -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="//maps.googleapis.com/maps/api/js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="script.js"></script>
</body>

</html>





<!--
  <div class="container-fluid">
     <div class="row">
       <div class="col-col-sm-12 col-md-6 col-lg-4">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="/assets/images/biking.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Paris</h2>
               <p>What an amazing city</p> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal1" data-lat='21.03' data-lng='105.85'>
         Location 1
       </button>
       </div>
           </div>
         </div>
       </div>
       
       <div class="col-col-sm-12 col-md-6 col-lg-4">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/climbingsm.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Yosamite Rock Climbing</h2>
               <p>What an amazing city</p> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal2" data-lat='21.03' data-lng='105.85'>
         Location 2
       </button>
             </div>
           </div>
         </div>
       </div>
       
       <div class="col-col-sm-12 col-md-6 col-lg-4">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/everest.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Mount Everest Hiking</h2>
               <p>What an amazing city</p> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal3" data-lat='21.03' data-lng='105.85'>
         Location 3
       </button>
             </div>
           </div>
         </div>
       </div>
       
       <div class="col-col-sm-12 col-md-6 col-lg-4 my-2">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/womansurfing2.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Surfing the Coastline</h2>
               <p>What an amazing city</p> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal4" data-lat='21.03' data-lng='105.85'>
         Location 4
       </button>
             </div>
           </div>
         </div>
       </div>
       
       <div class="col-col-sm-12 col-md-6 col-lg-4 my-2">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/skiingsm.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Skiing The French Alps</h2>
               <p>What an amazing city</p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal5" data-lat='21.03' data-lng='105.85'>
         Location 5
       </button>
             </div>
           </div>
         </div>
       </div>
       <div class="col-col-sm-12 col-md-6 col-lg-4 my-2">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/skydive.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Paris</h2>
               <p>What an amazing city</p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal6" data-lat='21.03' data-lng='105.85'>
         Location 6
       </button>
             </div>
           </div>
         </div>
       </div>
       
       <div class="col-col-sm-12 col-md-6 col-lg-4">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/sharkadventure.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Australian Shark Diving</h2>
               <p>What an amazing city</p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal7" data-lat='21.03' data-lng='105.85'>
         Location 7
       </button>
             </div>
           </div>
         </div>
       </div>
       
       <div class="col-col-sm-12 col-md-6 col-lg-4">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/nileboat.jpg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Sailing The Nile</h2>
               <p>What an amazing city</p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal8" data-lat='21.03' data-lng='105.85'>
         Location 8
       </button>
             </div>
           </div>
         </div>
       </div>
       
       <div class="col-col-sm-12 col-md-6 col-lg-4">
         <div class="flip-box">
           <div class="flip-box-inner">
             <div class="flip-box-front"><img src="assets/images/dubaibuggys.jpeg" alt="Paris" style="width:300px;height:200px"></div>
             <div class="flip-box-back">
               <h2>Dubai Buggying</h2>
               <p>What an amazing city</p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal9" data-lat='21.03' data-lng='105.85'>
         Location 9
       </button>
             </div>
           </div>
         </div>
       </div>
     </div>
    </div> 
   
-->
   
<!--
 <!--modal 1--> 
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 800px; height: 500px;" id="map1"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>1...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   <!--modal 2--> 
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map2"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>2...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   <!--modal 3--> 
<div class="modal fade" id="myModal3" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map3"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>3...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 <!--modal 4--> 
<div class="modal fade" id="myModal4" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map4"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>4...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   <!--modal 5--> 
<div class="modal fade" id="myModal5" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map5"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>5...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 <!--modal 6--> 
<div class="modal fade" id="myModal6" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map6"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>6...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   <!--modal 7--> 
<div class="modal fade" id="myModal7" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map7"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>7...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   <!--modal 8--> 
<div class="modal fade" id="myModal8" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map8"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>8...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   <!--modal 9--> 
<div class="modal fade" id="myModal9" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
    
          <div class="row">
            <div class="col-md-12 modal_body_map">
              <div class="location-map" id="location-map">
                <div style="width: 600px; height: 400px;" id="map9"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 modal_body_end">
              <p>9...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js"></script>
 <script src="script.js"></script>
</body>
  

</html>

fetch("../locations.json")
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
      let loc = getLatLng(data);
      console.log(loc);
  })
  .catch(function(error) {
    console.log(error);
  });
  
  
function getLatLng(jsonElement) {
  let locations = [];
  jsonElement.forEach(element => {
    element.locations.forEach(location => {
      
      locations.json(
          {
              "lat": location.lat,
              "lng": location.lng
              
              
          }
          
          );
    });
  });
  return locations.json;
}

Wc {message: "initMap is not a function", name: "InvalidValueError", 

script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6qFLVRq_t3uKSNe6uvC-as31sIjWD8kY&callback=initMap">
    </script>