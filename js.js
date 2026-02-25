// 1. Criamos uma variavel 'contador' para controlar
// qual imagem deve aparecer
let contador = 1;

// 2. A função 'setInterval' de 5000 milisegundos (5 segundos)
// Ele vai executar a 'proxIma' repetidamente a cada 5000 milisegundos
// (5 segundos)
 setInterval(function() {
          proxImg();
},5000);

//3. E agora essa e afunçao responsavel por trocar as nossas imagens.
function proxImg() {
          //Toda vez que a função roda, somamos +1 ao contador para ir proxima imagem.
          contador++;
          // Ainda aqui dentro da minha logica de proximagem, vou fazer minha logica de repetição.
          // Como agora estamos usando 4 imagens , reiniciamos para 1 e o carrossel voltará
          //para o inicio (loop)
          if (contador > 4) {
                    contador = 1;
          }

          //MANIPULAÇÃO DO HTLM (DOM):
          //Aqui o JavaScript procura no HTML, o elemento que o id "radio"
          //+ o numero do contador.
          // O '.checked = true' marca aqueles inputs de radio automaticamente
          // quando o radio é marcado, o CSS que configuramos ira mudar a imagem
          //automaticamente:
          document.getElementById("radio + contador") = true;
          
}