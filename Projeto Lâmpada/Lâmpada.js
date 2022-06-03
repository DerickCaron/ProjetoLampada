const Ligar    = document.getElementById ( 'Ligar' ) /*Aqui estou criando uma constante que se chama "Ligar". O objetivo dessa constante é buscar no meu HTML qual tag está com a ID Ligar. */
const Desligar = document.getElementById ( 'Desligar' )
const Lamp     = document.getElementById ( 'Lamp' )

Ligar.addEventListener ( 'click', LampLigar) /*Aqui eu estou dizendo para o sistemas adicionar um evento DENTRO da minha CONSTANTE "Ligar", no caso o evento que eu adicionei é um "click", ou seja, agora o lugar que está com a ID "Ligar" se tornou clicável. Mas para que este clique tenha algum sentido é preciso criar uma FUNÇÃO, no caso o nome da FUNÇÃO que dei é "LampLigar"*/
function LampLigar(){  /*Aqui eu estou criando a função LampLigar e dizendo qual a sua função, ou seja, qual seu objetivo*/
    if ( !ContinueQuebrada()){ /*A palavra IF é um comando que coloca uma condição, ou seja, é uma outra função dentro da função LampLigar. E aquele sinal de "!" serve para dizer que: Caso a função "ContinueQuebrada" não for verdadeira aí sim pode executar a função atual. O ! serve como um simbolo de negação, exerce um papel como a palavra NÃO*/
    Lamp.src = "new-design-designify (1).png"}
    }

Desligar.addEventListener ( 'click', LampDesligar )
function LampDesligar(){ 
    if ( !ContinueQuebrada()){
    Lamp.src = "new-design-designify.png"}
    }
Lamp.addEventListener ( 'mouseover', LampLigar) /*MOUSEOVER significa caso o mouse passar por cima*/
Lamp.addEventListener ( 'mouseleave', LampDesligar) /*MOUSELEAVE quer dizer caso o mouse saia de cima*/

Lamp.addEventListener( 'dblclick', LâmpadaQuebrada ) /*DBLCLICK quer dizer caso o mouse dê dois cliques seguidos, ou seja, duplo clique.*/
function LâmpadaQuebrada() { Lamp.src = "Quebrada1.png" }
function ContinueQuebrada() { 
    return Lamp.src.indexOf ( 'Quebrada1' ) > -1  /*Aqui está dizendo que caso o "Lamp.src" da função "LâmpadaQuebrada" seja verdadeiro, ou seja, caso se tenha dado duplo clique e a imagem da lâmpada quebrada tenha aparecido então, ou seja, caso essa afirmação seja verdadeira então ela é maoir que -1(>  -1), então se ela for maior que -1 deve CANCELAR TODOS OS OUTROS COMANDO DAS FUNÇÕES(return) e a única maneira de a lampada voltar ao normal é reinicializando a página"*/
 }

