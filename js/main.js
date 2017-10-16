$("#nav").scrollspy({ offset: -75 });

$(document).ready(function () {

    $("html,body").animate({ scrollTop: 0 }, 100);

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    $('nav ul li').on('click', function () {
        removeLiClass()
        $(this).addClass("active");
    });

    $('#skip-about').on('click', function () {
        removeLiClass()
        $('nav ul li:nth-child(3)').addClass("active");
    });
    $('#skip-skills').on('click', function () {
        removeLiClass()
        $('nav ul li:nth-child(4)').addClass("active");
    });
    $('#skip-portfolio').on('click', function () {
        removeLiClass()
        $('nav ul li:nth-child(5)').addClass("active");
    });
    $('#skip-contact').on('click', function () {
        removeLiClass()
        $('nav ul li:nth-child(6)').addClass("active");
    });
    $('#skip-home').on('click', function () {
        removeLiClass()
        $('nav ul li:nth-child(1)').addClass("active");
    });

    var $navulli = $('nav ul li');
    var $navullia = $('navullia');
    var $menumobileul = $('.menu-mobile ul');

    function removeLiClass() {
        $navulli.removeClass("active");
        $navullia.removeClass("active");
    }
    $('.menu-mobile').click(function (event) {
        if ($menumobileul.hasClass('active-ul')) {
            event.stopPropagation();
            $menumobileul.addClass('menu-mobile-ul');
            $menumobileul.removeClass('active-ul');
        }
        else {
            event.stopPropagation();
            $menumobileul.removeClass('menu-mobile-ul');
            $menumobileul.addClass('active-ul');
        }
    });

});

// $(function () {
//     var form = $('#ajax-contact');
//     $(form).submit(function (event) {
//         event.preventDefault();
//         var formData = $(form).serialize();
//         $.ajax({
//             type: 'POST',
//             url: $(form).attr('action'),
//             data: formData
//         })
//             .done(function (response) {
//                 alert(response);
//                 $('#tel').val('');
//                 $('#email').val('');
//                 $('#message').val('');
//             })
//             .fail(function (data) {
//                 if (data.responseText !== '') {
//                     alert(data.responseText);
//                 } else {
//                     alert('Oops! An error occured and your message could not be sent.');
//                 }
//             });
//     });
// });