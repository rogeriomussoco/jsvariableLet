/* Neste pequeno projeto vamos declarar variável do tipo LET em Jasvascript
Nome: Rogério Tiago Miguel
Proj Name: Javascript e suas funcionalidades
*/

// A variável Let pode ser usada dentro de um laço de iteração. Partindo de 30 ele precisará
//adicionar a idade até chegar aos 50 anos. ele deve seve ser impresso dentro de blocos de escopo
//Se usar fora do bloco do escopo, dentro dos parenteses dará erro
//. para imprimir voce precisará digitar: Local onde está a sua pasta e depois 
//node .\Nomedoarquivo.js
function ImprimirIdade() {
for (let idade =30; idade <=50; idade++) {
    console.log('A idade dentro do for é:.....', idade);
    }
    // este bloco dará sempre erro porque está fora do escopo
   // console.log('A idade dentro do for é:.....',idade);
}
ImprimirIdade();

