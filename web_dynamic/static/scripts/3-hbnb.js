#!/usr/bin/node

$( document ).ready(function input_check() {
    let list_id = {};
    $( document ).on('checked', 'input[type="checkbox"]', function(e) {
      if (this.checked) {
        $('data-id').val(this.value)
      } else {
          removeAttr('data_id')
      }
  $('.amenities h4').text(list_id)
    });
});

$get('http://0.0.0.0:5001/api/v1/status/', function(data, textStatus) {
  if (textStatus == "OK")
    $('div#api_status').addClass("available")
  else
    $('div#api_status').removeClass("available")
});

$get('http://0.0.0.0:5001/api/v1/status/', function() {
});