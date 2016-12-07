//TODO: Use a function closure and release global $

$(document).ready(function() {

   $('#name_form').on('submit', function(event) {
    var nameinput = $('#namelabel').val();
    $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cacheBuster=' + Math.random(),
      function(data) {
        var q = data[0];
        $('#primary').html(q.content);
        $('#aname').html('By: ' +q.title);
        $('#username').html( 'Hello, ' +nameinput + '! Your inspirational quote is below!');
        });
    event.preventDefault();
});


  $('#quote_form').on('submit', function(event2) {
   var query = $('#quotelabel').val();
   $.get(
    'http://quotes.rest/qod.js?category=' + query,
    function(data) {
      var p = data[0];

      $('#secondary').html(p.quote);
      $('#bname').html('By: ' +p.author);
      $('#qtitle').html(p.title);
      $('#background').html('<img src="' +p.background +'" alt="An inspiring image"/>');
      });

    event2.preventDefault();
});

}); 


