$(document).ready(function() {
  // $("p").click(function() {
  //   $("body").removeId();
  //   $("body").addId("#javascriptDefinition");
  // });

   // $("." + this.className).toggle();

  $(".flashcard").click(function() {
    $(this).children().toggle();

    // $(".card2").toggle();
    // $(".card").toggle();
   
  });
});

