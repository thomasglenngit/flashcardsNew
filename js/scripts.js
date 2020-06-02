$(document).ready(function() {
  // $("p").click(function() {
  //   $("body").removeId();
  //   $("body").addId("#javascriptDefinition");
  // });

  $(".clickable").click(function() {
    // $(".card2").toggle();
    // $(".card").toggle();
    $("." + this.className).toggle();
  });
});

