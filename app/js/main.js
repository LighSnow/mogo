$(function () {

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);

  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  };




  $("#accordion").accordion({
    heightStyle: "content"
  });


  $('.reviews__inner').slick();


  $('.burger-menu').click(function () {
    $(".burger-menu, .header__nav").toggleClass('active');
    $("body").toggleClass('lock');
  });



  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;
    console.log(elementOffset);

    $("html, body").animate({
      scrollTop: elementOffset + 10
    }, 1000);
  });



});