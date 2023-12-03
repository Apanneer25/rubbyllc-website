var flatsomeVars = {
    "theme": {
        "version": "3.15.7"
    },
    "ajaxurl": "",
    "rtl": "",
    "sticky_height": "100",
    "assets_url": "https:\/\/babcofoods.com\/wp-content\/themes\/flatsome\/assets\/js\/",
    "lightbox": {
        "close_markup": "<button title=\"%title%\" type=\"button\" class=\"mfp-close\"><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"><\/line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"><\/line><\/svg><\/button>",
        "close_btn_inside": false
    },
    "user": {
        "can_edit_pages": false
    },
    "i18n": {
        "mainMenu": "Main Menu",
        "toggleButton": "Toggle"
    },
    "options": {
        "cookie_notice_version": "1",
        "swatches_layout": false,
        "swatches_box_select_event": false,
        "swatches_box_behavior_selected": false,
        "swatches_box_update_urls": "1",
        "swatches_box_reset": false,
        "swatches_box_reset_extent": false,
        "swatches_box_reset_time": 300,
        "search_result_latency": "0"
    },
    "is_mini_cart_reveal": "1"
};

$(document).ready(function(){
    var name = $("#name");
    var email = $("#email");
    var message = $("#message");
    $("#frm_details").on("submit", function(event) {
        debugger
        event.preventDefault();
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=MobileNumber]').val(),
            'message': $('textarea[name=message]').val(),
            'product': $("#my-products").val()
        };

        $.ajax({
            url: "/submit/contact/form",
            type: "post",
            data: formData,
            success: function(d) {
                alert("Mail Sent Successfully "+ d);
            }
        });
   });
});