$(document).ready(function() {
  $('#content').hide().load('./pages/welcome.html').fadeIn(1200);
    $("#tsukki").click(function(){
      $("nav").fadeToggle();
    });

    $("#home").on ("click",(function(){
      $('#content').hide().load('./pages/welcome.html').fadeIn(1200);
  }));

    $("#about").on ("click",(function(){
        $('#content').hide().load('./pages/about.html').fadeIn(1200);
    }));

    $("#byf").on ("click",(function(){
      $('#content').hide().load('./pages/byf.html').fadeIn(1200);
  }));

  $("#faves").on ("click",(function(){
    $('#content').hide().load('./pages/faves.html').fadeIn(1200);
}));

$("#gameIDs").on ("click",(function(){
  $('#content').hide().load('./pages/gameIDs.html').fadeIn(1200);
}));
  });