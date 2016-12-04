//TODO: Use a function closure and release global $
$(document).ready(function() {
//  $('#go').on('submit', function(event) {
    //   event.preventDefault();
   // var query = $('#name-label').val();
    $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      function(data) {
       // data.preventDefault();
        var q = data[0];
        console.log(q.content);
        console.log(q.title);
        $('#primary').append(q.content);

        });
//});

}); 
