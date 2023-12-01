var openNav
var closeNav
var temporizador

function automatico(){
  temporizador = setInterval(inicio, 500)
}

function openNav() {

  document.getElementById('menu').style.width = '590px';

}

function closeNav() {

  document.getElementById('menu').style.width = '0px';

}

var titulo = document.querySelector("h4")
var moldura = document.getElementById("moldura")
var indice = 0
var opcao = 0
const caminho = "../img/"
const exten = ".jpeg"

var Salgados = [
    {imag:"entreveiro", titulo:"Entreveiro", Descricao:"Descri"},
    {imag:"maminha", titulo:"Maminha", Descricao:"Descri"},
    {imag:"paelladefrutosdomar", titulo:"Paella de Frutos do Mar", Descricao:"Descri"},
    {imag:"paelladecarnebranca", titulo:"Paella de Carnes Brancas", Descricao:"Descri"},
    {imag:"risotodepalmito", titulo:"Paella de Palmito", Descricao:"Descri"},
]

var Doces = [
    {imag:"fonduedemorango", titulo:"Fondue de Morango", Descricao:"Descri"},
    {imag:"waffledebananacomleitecondensado", titulo:"Waffle de Banana com Leite Condensado", Descricao:"Descri"},
    {imag:"waffledemorango", titulo:"Waffle de Morango", Descricao:"Descri"},
]

var Saladas = [
    {imag:1, titulo:"Salada de Abacaxi", Descricao:"Descri"},
]
automatico();