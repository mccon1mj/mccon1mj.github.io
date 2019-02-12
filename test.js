<!DOCTYPE HTML>
<html>
<head>
<title> Canvas JS charts for latirute vs timestamp</title>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
<script src = "js/jquery.canvasjs.min.js"></script>

<script>
        window.onload = function() {
        
        var dataPoints = [];
        
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Air Temp vs Time"
            },
            axisY: {
                title: "Latitude",
                titleFontSize: 24
            },
            data: [{
                type: "scatter",
                
                dataPoints: dataPoints
            }]
        });
        
        
        
/*

        fetch('http://gsx2json.com/api?id=1vc7wCjNXK39HMEYDkOJRMhQGPJpxMu4MJgTsydyLats' )
            .then(
                function(response) {
                    if(response.status !== 200) {
                        console.log("There seems to be a problem reaching the server  " );
                        return 0;
                    }


                    response.json().then(function(data){
                        for(let i = 0; i < data.length; i++) {
                            console.log(data.rows["timestamp"][i]);
                        }

                        chart.render();
                        console.log(data.rows['timestamp']);
                    });
                }
            )
        

            .catch((err) => {
                console.log('Fetch errors' , err);
            })    
        fetch('http://gsx2json.com/api?id=1vc7wCjNXK39HMEYDkOJRMhQGPJpxMu4MJgTsydyLats')
          .then(
              mode: 'no-cors',
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
              response.json().then(function(data) {
                for (let i = 0; i < data.length; i++) {
               console.log(data.rows["timestamp"][i])
            }
        
            chart.render();
            //console.log(data.columns["timestamp"])
            
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });

          */

          $(function(){
  var points = [];

  $.getJSON("http://gsx2json.com/api?id=1vc7wCjNXK39HMEYDkOJRMhQGPJpxMu4MJgTsydyLats&columns=false", function(d){
    $.each(d.rows, function(i, r){
      if(r.sitename == "Garland Ranch: Vehicle Bridge" && r.temperaturesample1celsius !== 0 && r.groupnumber == 4)
    {
      dataPoints.push({
        x: new Date(r.date),
        y: r.temperaturesample1celsius
      });
    }});
  })
  
  .fail(function(xhr, status, error) {
    console.log("Ajax Error", status, error);
  });

  
  chart.render();
});
        
          /*
        $.getJSON("http://gsx2json.com/api?id=1vc7wCjNXK39HMEYDkOJRMhQGPJpxMu4MJgTsydyLats", function addData(data){
           // console.log(new Date("10/8/2018 14:39:37"))
            
            for (var i = 0; i < data.length; i++) {
                console.log("can i een log something here")
                dataPoints.push({
                    
                    x: new Date(data[i].columns["timestamp"]),
                    y: data[i].columns["airtemperatureincelsius"]
                });
            }
            chart.render();
          // console.log(data.columns["airtemperatureincelsius"])
        });
        
        */
        
        
        }
        </script>
</body>
</html>
