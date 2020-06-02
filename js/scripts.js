$(document).ready(function() {
  // $("p").click(function() {
  //   $("body").removeId();
  //   $("body").addId("#javascriptDefinition");
  // });

  $(".frontside").click(function() {
    $(".backside").toggle();
    // $(".frontside").toggle();
    // $("." + this.className).toggle();
  });
});