$(document).ready(function() {
  // $("p").click(function() {
  //   $("body").removeId();
  //   $("body").addId("#javascriptDefinition");
  // });

   // $("." + this.className).toggle();

  $(".col-md-2").click(function() {
    $(this).children().fadeToggle();

    // $(".card2").toggle();
    // $(".card").toggle();
   
  });
});

