
/*IMPORTANT: In the HTML page, insert into the head section:
<head>
      <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script> 
</head>  
    */


/*Step 1: Fetch Dino API using jQuery AJAX method
//Normally you can only fetch data from your own server, not someone else's.
//To override this feature, we will indicate a data type of JSONP instead of plain JSON (JSONP is otherwise known as JSON with parts).*/

var apiData;
apiData = $.ajax({
  url: "https://chinguapi.onrender.com/dinosaurs",
 /* cache: true, /*I want to cache data*/
  /*jsonp: true  /* to allow cross-origin data transfer */
});
//jQuery will parse the jsonp and delivery a JavaScript object so we won't have to parse it ourselves.
apiData.done(function(response){
  alert(response + textStatus)
  });
apiData.fail(function(jqXHR, textStatus ){
  alert("Error in delivery: " + textStatus)
  });