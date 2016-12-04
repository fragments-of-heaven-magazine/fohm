//TODO: Use a function closure and release global $
$(document).ready(function() {
   $('#name-form').on('submit', function(event) {
   	var query = $('#namelabel').val();
    $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      function(data) {
        var q = data[0];
        console.log(q.content);
        console.log(q.title);
        $('#primary').append(q.content)
         $('#username').append(query)
        });
    event.preventDefault();
});

}); 
