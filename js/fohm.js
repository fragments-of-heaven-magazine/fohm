//TODO: Use a function closure and release global $
$(document).ready(function() {
    $('#name_form').on('submit', function(event) {
     var query = $('#namelabel').val();
     $.get(
         'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cacheBuster=' +  query,
       function(data) {
         var q = data[0];
        $('#primary').html(q.content)
         $('#number').append('Your number was: ' +query)
        $('#aname').html('By: ' +q.title)
        });
    event.preventDefault();
});

});
