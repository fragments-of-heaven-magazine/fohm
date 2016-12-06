//TODO: Use a function closure and release global $
$(document).ready(function() {
   $('#name-form').on('submit', function(event) {
   	var query = $('#namelabel').val();
    $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cacheBuster=' + Math.random(),
      function(data) {
        var q = data[0];
        $('#primary').html(q.content)
        $('#aname').html('By: ' +q.title  )
         $('#username').html( 'Hello, ' +query + '! Your inspirational quote is below!')
        });
    event.preventDefault();
});

}); 
