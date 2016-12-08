//TODO: Use a function closure and release global $
$(document).ready(function() {
  $('#quote_form').on('submit', function(event) {
      var query = $('#quotelabel').val();
        var urL = 'http://horoscope-api.herokuapp.com/horoscope/today/' + query;
        $.ajax({
          type: 'GET',
          url: urL,
          dataType: 'jsonp'
          success: function(data) {
            $('#secondary').html(data.horoscope);
            $('#bname').html('Date: ' +data.date);
            $('#qtitle').html('Sunsign: ' +data.sunsign);
          }
        });
event.preventDefault();
});
});




/*
   $('#name_form').on('submit', function(event) {
    var nameinput = $('#namelabel').val();
  $.when(
    $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cacheBuster=' + Math.random(),
    ).then(function(data) {
        var q = data[0];
        $('#primary').html(q.content);
        $('#aname').html('By: ' +q.title);
        $('#username').html( 'Hello, ' +nameinput + '! Your inspirational quote is below!');
        });
    event.preventDefault();
}); */
