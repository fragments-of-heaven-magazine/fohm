// TODO: Use a function closure and release global $
$(document).ready(function() {

$('#quoteS').on('submit', function(event) {
        event.preventDefault();

let name = document.getElementById('nameS').value;

function randomQuote(quote){

      $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            function(data) {
                var q = data[0];

 var list = '<ul id="random-quote">' +
                    '<li class="name-label" id="your-name">Your Name</li>' +
                    '<li class="name">' + name + '</li>' +
                    '<li class="quote-label" id="your-quote">Your Quote</li>' +
                    '<li class="quote">' + q.content + '</li>' +
            '</ul>';

  $('#primary').append(list);
            });
        event.preventDefault();
});


