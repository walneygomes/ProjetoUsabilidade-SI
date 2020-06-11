 

new WOW().init();

$(document).ready(function() {
   
    $(".conteudo").hide();
 
    $(".retangulo").click(function() {
        $(".conteudo").show();
    });

   
    $(".close").click(function() {
      $(".conteudo").show();
    });
 
    $(".fechar").click(function() {
        $(".conteudo").hide();
    });
});
