let dots = document.getElementById("dots");
let slash = document.getElementById("slash");
let minus = document.getElementById("minus");
let equal = document.getElementById("equal");
let AC_t = document.getElementById("AC_t");
let plus = document.getElementById("plus");
let asterisk = document.getElementById("asterisk");

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
//「演算子を入力した時、入力済み結果の末尾が演算子の場合は末尾を削除して、新たに入力された演算子を付加する」
/*global slice*/
var mark = ['+','-','*','/','.'];
let total = document.getElementById("total");
if (total.slice(-1,-2) == mark) {
      total.slice(-1,-2).style.display="none";
    }
