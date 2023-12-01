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
  {imag:"fonduedebanana", titulo:"Fondue de Banana", Descricao:"Descri"},
  {imag:"fonduedemorango", titulo:"Waffle de Morango", Descricao:"Descri"},
  {imag:"pudim", titulo:"Pudim", Descricao:"Descri"},
  {imag:"waffledebananacomleitecondensado", titulo:"Waffle de Banana com Leite Condensado", Descricao:"Descri"},
]

function automatico(){
  temporizador = setInterval(inicio, 500)
}

function inicio(){
  console.log(indice)
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

  indice = 2
}
inicio();
}