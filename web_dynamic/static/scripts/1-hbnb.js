#!/usr/bin/node

( document ).ready(function input_check() {
    let list_id = [];
    let check = document.querySelector('input[type="checkbox"]');
    let Text = document.querySelector('input[data-id=":amenity_id"]');
    if (check.checked) {
        list_id = push.getElementById(Text);
    } else {
        removeAttr('data_id')
    }
});