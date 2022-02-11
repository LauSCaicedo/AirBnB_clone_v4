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
