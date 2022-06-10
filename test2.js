let seven = document.getElementById("seven");
let six = document.getElementById("six");
let five = document.getElementById("five");
let four = document.getElementById("four");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let zero = document.getElementById("zero");
let w_zero = document.getElementById("w_zero");
let dots = document.getElementById("dots");
let slash = document.getElementById("slash");
let minus = document.getElementById("minus");
let equal = document.getElementById("equal");
let AC_t = document.getElementById("AC_t");

function clickNumber7(){
  total.innerHTML += "7"
}

function clickNumber8(){
  total.innerHTML += "8"
}

function clickNumber9(){
  total.innerHTML += "9"
}

function clickNumber4(){
  total.innerHTML += "4"
}

function clickNumber5(){
  total.innerHTML += "5"
}

function clickNumber6(){
  total.innerHTML += "6"
}

function clickNumber1(){
  total.innerHTML += "1"
}

function clickNumber2(){
  total.innerHTML += "2"
}

function clickNumber3(){
  total.innerHTML += "3"
}

function clickNumber0(){
  total.innerHTML += "0"
}

function clickNumber00(){
  total.innerHTML += "00"
}

function clickAC(){
  total.innerHTML = null
}

function clickDots(){
  total.innerHTML += "."
}

function clickPlus(){
  total.innerHTML += "+"
}

function clickMinus(){
  total.innerHTML += "-"
}

function clickAsterisk(){
  total.innerHTML += "*"
}

function clickSlash(){
  total.innerHTML += "/"
}

function clickNumber00(){
  total.innerHTML += "00"
}

function clickEqual(){
  total.innerHTML = eval(total.innerHTML);
}

//演算の連続入力の不可

