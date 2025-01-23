
/*IMPORTANT: In the HTML page, insert into the head section:
<head>
      <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script> 
</head>  
    */


/*Step 1: Fetch Dino API using jQuery AJAX method
//Normally you can only fetch data from your own server, not someone else's.
//To override this feature, we will indicate a data type of JSONP instead of plain JSON (JSONP is otherwise known as JSON with parts).*/

/*var apiData;

apiData = $.ajax({
method: "GET",
  url: "dino.json",
  dataType: "json" 
});
apiData.always(function(textStatus){
  alert(textStatus);
  });

alert("Page is visible,");*/


/*Step 1: Fetch Dino API using JavaScript fetch method
Normally you can only fetch data from your own server, not someone else's.*/

var apiData; var status; 
var dinoObject;

fetch("/dino.json")
 .then((response) => { (response) }) 
 .catch((err) => { alert("Unable to fetch -", err); });
