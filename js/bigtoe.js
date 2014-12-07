$(window).load(function() {
      alert("window load occurred!");
      
      
      
      
   var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': json/nike.json,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
 })();
      
      
      
      
      
});







// var json = (function () {
//    var json = null;
//    $.ajax({
//        'async': false,
//        'global': false,
//        'url': json/nike.json,
//        'dataType': "json",
//        'success': function (data) {
//            json = data;
//        }
//    });
//    return json;
// })();








// $(function() {   
//    $.getJSON('jsonFile.js',function(data){
//
//        console.log(data.header1[0].title);   
//        console.log(data.header2[0].title);     
//    });   
// }); 