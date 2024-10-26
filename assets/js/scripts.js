$(document).ready(function () {

    AOS.init({
        offset: 200,
        duration: 1000
    });
    // animation on scroll

    // Floating tab
    $('.floating-button').click(function () {
        $(this).toggleClass('floatbtnHover');
        $('.float-element:first-child').toggleClass('first-hover');
        $('.float-element:nth-child(2)').toggleClass('second-hover');
        $('.floating-container .tab-pane').removeClass('active');
        $('.float-element').removeClass('active');
    })

    $('.btn-dismiss').click(function () {
        $(this).parents('.tab-pane').removeClass('show active');
    })

    $('.form-select').click(function () {
        $(this).addClass('active');
    })

    // Service Form Validation
    $('#name').on('keyup', function () {
        if ($(this).val().length > 0 && $('#phone').val().length >= 10 && $('#phone').val().length < 16 && $('#email').hasClass('email-active') && $('#description').val().length > 0 && $('#service-form .form-select').hasClass('active')) {
            $('#service-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#service-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })
    $('#phone').on('keyup', function () {
        if ($('#name').val().length > 0 && $(this).val().length >= 10 && $(this).val().length < 16 && $('#email').hasClass('email-active') && $('#description').val().length > 0 && $('#service-form .form-select').hasClass('active')) {
            $('#service-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#service-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
        if ($(this).val().length >= 10 && $(this).val().length < 16) {
            $('.phone-error').addClass('d-none');
        }
        else {
            $('.phone-error').removeClass('d-none');
            $('#service-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })
    $('#description').on('keyup', function () {
        if ($('#name').val().length > 0 && $('#phone').val().length >= 10 && $('#phone').val().length < 16 && $('#email').hasClass('email-active') && $(this).val().length > 0 && $('#service-form .form-select').hasClass('active')) {
            $('#service-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#service-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })
    $('#email').on('keyup', function () {
        var email = $(this).val();
        validateEmail(email);
        if ($('#name').val().length > 0 && $('#phone').val().length >= 10 && $('#phone').val().length < 16 && $(this).hasClass('email-active') && $('#description').val().length > 0 && $('#service-form .form-select').hasClass('active')) {
            $('#service-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#service-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })

    // Consultant Form Validation
    $('#person-name').on('keyup', function () {
        if ($(this).val().length > 0 && $('#person-phone').val().length >= 10 && $('#person-phone').val().length < 16 && $('#person-email').hasClass('email-active') && $('#person-description').val().length > 0 && $('#consultant-form .form-select.select-one').hasClass('active') && $('#consultant-form .form-select.select-two').hasClass('active')) {
            $('#consultant-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#consultant-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })
    $('#person-phone').on('keyup', function () {
        if ($('#person-name').val().length > 0 && $(this).val().length >= 10 && $(this).val().length < 16 && $('#person-email').hasClass('email-active') && $('#person-description').val().length > 0 && $('#consultant-form .form-select.select-one').hasClass('active') && $('#consultant-form .form-select.select-two').hasClass('active')) {
            $('#consultant-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#consultant-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }

        if ($(this).val().length >= 10 && $(this).val().length < 16) {
            $('.person_phone-error').addClass('d-none');
        }
        else {
            $('.person_phone-error').removeClass('d-none');
            $('#consultant-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })
    $('#person-description').on('keyup', function () {
        if ($('#person-name').val().length > 0 && $('#person-phone').val().length >= 10 && $('#person-phone').val().length < 16 && $('#person-email').hasClass('email-active') && $(this).val().length > 0 && $('#consultant-form .form-select.select-one').hasClass('active') && $('#consultant-form .form-select.select-two').hasClass('active')) {
            $('#consultant-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#consultant-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })
    $('#person-email').on('keyup', function () {
        var email = $(this).val();
        person_validateEmail(email);
        if ($('#person-name').val().length > 0 && $('#person-phone').val().length >= 10 && $('#person-phone').val().length < 16 && $(this).hasClass('email-active') && $('#person-description').val().length > 0 && $('#consultant-form .form-select.select-one').hasClass('active') && $('#consultant-form .form-select.select-two').hasClass('active')) {
            $('#consultant-form').find('.btn').removeClass('btn-disabled').addClass('btn-yellow');
        }
        else {
            $('#consultant-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        }
    })

    // Validate Email
    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(email) || $('#email').val().length == 0) {
            $('.email-error').removeClass('d-none');
            $('#email').removeClass('email-active');
            $('#service-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        } else {
            $('.email-error').addClass('d-none');
            $('#email').addClass('email-active');
        }
    }

    function person_validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(email) || $('#person-email').val().length == 0) {
            $('.person_email-error').removeClass('d-none');
            $('#person-email').removeClass('email-active');
            $('#consultant-form').find('.btn').addClass('btn-disabled').removeClass('btn-yellow');
        } else {
            $('.person_email-error').addClass('d-none');
            $('#person-email').addClass('email-active');
        }
    }

    $('.close-form i').click(function () {
        $('.floating-button').click();
    })

    $('#videoModal .btn-close').click(function () {
        $('#videoModal iframe').attr('src', $('#videoModal iframe').attr('src'));
    })

    $('.btn-close').click(function () {
        $('.floating-container').removeClass('z-index9');
    })

    $('body').click(function () {
        $('#videoModal iframe').attr('src', $('#videoModal iframe').attr('src'));
    })

    $('.modal').click(function () {
        $('.floating-container').removeClass('z-index9');
    })

    $('#profileModal .modal-content').click(function () {
        $('.floating-container').css('z-index', '9');
    })

    $('.nav-list__link').click(function () {
        $('.floating-button').removeClass('floatbtnHover');
        $('.float-element:first-child').removeClass('first-hover');
        $('.float-element:nth-child(2)').removeClass('second-hover');
        $('.floating-container .tab-pane').removeClass('active');
        $('.float-element').removeClass('active');
        $('.floating-container').addClass('z-index9');
    })

    // Loader
    var i = 0;
    function move() {
        $('.main-progress').css('z-index', '999');
        $('.main-progress').removeClass('d-none');
        $('.hide-on-load').css('opacity', 0);
        var widths = 1;
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("bar");
            var id = setInterval(frame, 30);
            function frame() {
                if (widths >= 100) {
                    $('.main-progress').css('z-index', '0');
                    $('.main-progress').addClass('d-none');
                    $('body').css('overflow', 'unset');
                    clearInterval(id);
                    $('.hide-on-load').fadeTo(1000, 1);
                    $(".main-progress").fadeTo(1200, 0);
                    var rule = CSSRulePlugin.getRule("span:after");
                    var rule = CSSRulePlugin.getRule(".nav-content:after");
                    // 6 Show Timeline
                    var tl = gsap.timeline({ defaults: { duration: 1 } });
                    tl.from(".nav-content", { y: -150, stagger: .6, opacity: 0 })
                        .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2")
                        .from(".appLink-list__img,.logo__img", { y: 30, opacity: 0 }, "-=.5")

                    TweenMax.to('.house', 2, {
                        delay: .1,
                        opacity: 0.5,
                        width: 350,
                        ease: Power2.easeInOut
                    })
                    TweenMax.to('.house-img__light-road', 3, {
                        delay: 0.5,
                        duration:2,
                        opacity: 1,
                        left:26,
                        width: 266,
                        bottom:-9,
                        ease: Power3.easeInOut
                    })
                    
                    // TweenMax.to('.house-light', 3, {
                    //     delay: .1,
                    //     width:85,
                    //     opacity: 1,
                    //     ease: Power4.easeInOut
                    // })
                } else {
                    $('body').css('overflow', 'hidden');
                    $(".main-progress").css('display', 'block')
                    widths++;
                    $('#myBar').html("%" + widths)
                    // $('.progress-bar').css("width", widths + "%");
                    elem.style.width = widths + "%";
                }
            }
        }
    }

    // move();
    $('.plus__icone').click(function () {
        // $('.plus__icone').removeClass('active');
            $(this).toggleClass('active');
            $('.plus-box-content').removeClass('active');
            $(this).next('.plus-box-content').toggleClass('active');
            $(this).next('.plus-box-content').slideToggle();
            // $('.animations-box').toggleClass('active');
            $('.plus-box-content:not(.active)').slideUp();
            $('.plus-box-content:not(.active)').prev('.plus__icone').removeClass('active');
            if($('.plus__icone').hasClass('active')){
                $('.animations-box').addClass('active');
            }else{
                $('.animations-box').removeClass('active');
            }
            $('.tiger2').css('right','0');
            if($(window).width()<767){
                $('.tiger2').css('right','calc(100vw - 250px)');
            }
           setTimeout(() => {
            $('.tiger2').css('right','510px');
           }, 9000);
    })
    
    $('body').click(function() {
		$('.plus__icone').removeClass("active");
		$('.plus-box-content').slideUp();
        $('.animations-box').removeClass('active');
	});
    $('.plus__icone').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
	$('.plus-box-content').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
    var rule = CSSRulePlugin.getRule("span:after");
    var rule = CSSRulePlugin.getRule(".nav-content:after");
    // 6 Show Timeline
    var tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(".nav-content", { y: -150, stagger: .6, opacity: 0 })
        .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2")
        .from(".appLink-list__img,.logo__img", { y: 30, opacity: 0 }, "-=.5")

    TweenMax.to('.house', 2, {
        delay: .1,
        opacity: 0.5,
        width: 350,
        ease: Power2.easeInOut
    })
    // TweenMax.to('.house-img__light-road', 3, {
    //     delay: 0.5,
    //     duration:2,
    //     opacity: 1,
    //     left:26,
    //     width: 266,
    //     bottom:-9,
    //     ease: Power3.easeInOut
    // })
});