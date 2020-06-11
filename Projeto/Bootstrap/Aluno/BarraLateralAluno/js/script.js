<script> S$(function () {
    $("td").dblclick(function () {
        var conteudoOriginal = $(this).text();
         
        $(this).addClass("celulaEmEdicao");
        $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
        $(this).children().first().focus();
 
        $(this).children().first().keypress(function (e) {
            if (e.which == 23) {
                var novoConteudo = $(this).val();
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });
         
    $(this).children().first().blur(function(){
        $(this).parent().text(conteudoOriginal);
        $(this).parent().removeClass("celulaEmEdicao");
    });
    });
});


var $input    = document.getElementById('input-file'),
    $fileName = document.getElementById('file-name');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});

 


        function myGeeks() { 
            var x = document.getElementById("GFG"); 
              
            if (x.innerHTML === "Arquivo Selecionado") { 
                x.innerHTML = "A computer science portal for geeks"; 
            } else { 
                x.innerHTML = "Arquivo Selecionado"; 
            } 
        } 
    </script> 