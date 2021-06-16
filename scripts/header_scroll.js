$(window).on("scroll", function() {
    $(item).toggleClass("item-scrolled", $(this).scrollTop() > $(window).height());
  });