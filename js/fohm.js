//TODO: Use a function closure and release global $
$(document).ready(function() {
   $('#name-form').on('submit', function(event) {
   	var query = $('#namelabel').val();
    $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cacheBuster=' + Math.random(),
      function(data) {
        var q = data[0];
        console.log(q.content);
        console.log(q.title);
        $('#primary').html(q.content)
         $('#username').html( 'Hello, ' +query + '! Your inspirational quote is below!')
        });
    event.preventDefault();
});

}); 
