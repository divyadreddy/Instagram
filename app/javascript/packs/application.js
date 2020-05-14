// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
    // require("jquery_ujs")

//= require jquery3
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
    console.log("inside the function");
    if ($('.pagination').length) {
        console.log("pagination");
        $(window).scroll(function() {
            console.log("scrolling");

            var url = $('.pagination .next_page').attr('href');
            console.log(url)
            console.log($(window).scrollTop() > $(document).height() - $(window).height() - 50);
            if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
                console.log("new page");
                $('.pagination').text("Please Wait...");
                console.log($.getScript(url));
                return $.getScript(url);
            }
        });
        return $(window).scroll();
    }
});

// 2.3 .8
// 5.1 .4

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)