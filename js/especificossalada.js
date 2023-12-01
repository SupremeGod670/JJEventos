var openNav
var closeNav
var titulo = document.querySelector("h2")
var desc = document.querySelector("h5")
var moldura = document.getElementById("moldura")
var indice = 0
var opcao = 0
var temporizador
const caminho = "../img/"
const exten = ".jpeg"
window.onload = inicio

function openNav() {

  document.getElementById('menu').style.width = '590px';

}

function closeNav() {

  if(window.innerWidth>670){
  document.getElementById('menu').style.width = '0px';
  }else{
    openNav()
  }

}

var ListaDeComidas = [
  {imag:"saladadeabacaxi", titulo:"Salada de Abacaxi", Descricao:"Descri"},
  {imag:"saladadebeterraba", titulo:"Salada de Beterraba", Descricao:"Descri"},
  {imag:"saladadetomateecebola", titulo:"Salada de Tomate com Cebola", Descricao:"Descri"},
  {imag:"saladamista1", titulo:"Salada Mista", Descricao:"Descri"},
]

function automatico(){
  temporizador = setInterval(inicio, 500)
}

function inicio(){
  if(indice>ListaDeComidas.length-1 || indice<0){
    alert("Erro o Valor requerido não é valido.")
  }else{
    moldura.src = caminho+ListaDeComidas[indice].imag+exten
    titulo.innerHTML = ListaDeComidas[indice].titulo
    desc.innerHTML = "Sobre: "+ ListaDeComidas[indice].Descricao
  }
  if(window.innerWidth<=670){
    openNav()
  }
  automatico();

}

function avanca(){

  if(indice < ListaDeComidas.length-1){
    indice++
}
if(indice == ListaDeComidas.length-1){

  indice = 0
}
inicio();
}

function retorna(){

  if(indice >= 1){
    indice--
} else{

  indice = 0
}
inicio();
}