   


/*Step 1: Fetch Dino API using jQuery ajax method
Normally you can only fetch data from your own server, not someone else's.*/

var apiData; var object; 
var Data=[]; var newArray=[];


var name_id;   var length_id; var diet_id;  
var taxonomy = document.querySelector("#taxonomy");
var specie = document.querySelector("#specie");


//jQuery get API
var getApi = $.ajax({
method: "GET",
url: "dinolist.txt",
dataType: "text"
});

getApi.fail(function(data, textStatus, jqxhr) {
alert( "Error: " + " " + textStatus + " " + jqxhr );
});

getApi.done(function(data) {
var string= data.trim(); //remove whitespace 
var newstring=string.replace(/},/g, ""); //remove '},'
 apiData = newstring.split("{"); //split data object by object to create a one-dimensional array i.e. a normal array.
var count = apiData.length;
var i;
for (i = 0; i < count; i++) {
    var one = apiData[i].trim(); // remove whitespace.
var oneObject= one.split("\n"); //split each object line by line, this ends up creating a two-dimensional array. 
    newArray.push(oneObject); // insert each array into newArray.
}
});
/*
Note that newArray is a two-dimensional array and the arrangement is:
[0][0] = id;
[0][1] = name;
[0][2] = imagesrc;
[0][3] = typeofdinosaur;
[0][4] = length;
[0][5] = weight;
[0][6] = diet;
[0][7] = whenlived;
[0][8] = foundin;
[0][9] = namedBy;
[0][10] = description;
[0][11] = mapLink;

*/

function sanitiseData(Data){
   // var removeCommas = Data;
   
  var removeQuotes = Data.replace(/"/g, '');  // remove quotations;
  var get1 = removeQuotes.split(":");
  var get2 = get1[1];
  var result = get2.trim();
  return result;
}


//pick dinosaur name 
function getDinoName(){
 // clear other inputs 
document.querySelector("#searchlength").value="";
document.querySelector("#searchdiet").value="";

var nameform = document.querySelector("#searchname");
    name_id = nameform.value; //the values are ID numbers 
  if(name_id.length>0){
    //to extract dino details from array, I have to call jQuery function inside JS function
getApi.done(function(data){
    var getObject = newArray[name_id]; //name_id is a number 
    var getname = getObject[1];
    var getimage = getObject[2];
    var gettype = getObject[3];
    var getlength = getObject[4];
    var getdiet = getObject[6];
    var gettimespan = getObject[7];
    var getplace = getObject[8];
    var getnamedby = getObject[9];
    var getdescription = getObject[10];
    var getmaplink = getObject[11];
    
  var the_name = sanitiseData(getname);
  var the_type = sanitiseData(gettype);
  var the_length = sanitiseData(getlength);
  var the_diet = sanitiseData(getdiet);
  var the_timespan = sanitiseData(gettimespan);
  var the_place = sanitiseData(getplace);
  var the_namedby = sanitiseData(getnamedby);
  var the_description = sanitiseData(getdescription);
  
  //image and map links need to be sanitised differently to preserve their integrity.
  var get_one = getimage.split('"');
var the_image =  get_one[3];
var get_two = getmaplink.split('"');
var the_maplink =  get_two[3];

  //hide the other div container and show the right div container on the HTML page 
var container = document.querySelector(".no-show");
var container2 = document.querySelector(".dino-list-container");
if(container != null){
container.setAttribute( "class", "dino-display-container"); 
} 
if(container2 != null){
    container2.setAttribute( "class", "no-show2"); 
}
//insert values 
document.querySelector("#pname").innerHTML = the_name;
 document.querySelector("#dinos").src = the_image;
 document.querySelector("#dinos").alt = "Dinosaur";
  document.querySelector("#type").innerHTML = the_type;
  document.querySelector("#plength").innerHTML = the_length;
  document.querySelector("#pdiet").innerHTML = the_diet;
  document.querySelector("#timespan").innerHTML = the_timespan;
  document.querySelector("#location").innerHTML = the_place;
  document.querySelector("#naming").innerHTML = the_namedby;
 document.querySelector("#description").innerHTML = the_description; 
 document.querySelector("#map").src = the_maplink; 
 }); 
 }
}


//pick dino length
function getDinoLength(){
var lengthform = document.querySelector("#searchlength");
    searchLength = lengthform.value;
//clear other inputs 
document.querySelector("#searchname").value="";
document.querySelector("#searchdiet").value="";

//hide the other container and show the right div container 
var container = document.querySelector(".dino-display-container");
var container2 = document.querySelector(".no-show2");
if(container != null){
container.setAttribute("class", "no-show"); 
} 
if(container2 != null){
    container2.setAttribute( "class", "dino-list-container"); 
  }
}


//pick dino diet 
function getDinoDiet(){
var dietform = document.querySelector("#searchdiet");
 searchDiet = dietform.value;
//clear other inputs 
document.querySelector("#searchname").value="";
document.querySelector("#searchlength").value="";
//hide the other container and show the right div container 
var container = document.querySelector(".dino-display-container");
var container2 = document.querySelector(".no-show2");
if(container != null){
container.setAttribute("class", "no-show"); 
} 
if(container2 != null){
    container2.setAttribute( "class", "dino-list-container"); 
  }
}

 
