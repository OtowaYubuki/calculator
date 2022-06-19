let dots = document.getElementById("dots");
let slash = document.getElementById("slash");
let minus = document.getElementById("minus");
let equal = document.getElementById("equal");
let AC_t = document.getElementById("AC_t");
let plus = document.getElementById("plus");
let asterisk = document.getElementById("asterisk");


zero.disabled = true;
w_zero.disabled = true;

/*global total*/
function clickNumber7(){
  total.innerHTML += "7"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber8(){
  total.innerHTML += "8"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber9(){
  total.innerHTML += "9"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber4(){
  total.innerHTML += "4"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber5(){
  total.innerHTML += "5"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber6(){
  total.innerHTML += "6"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber1(){
  total.innerHTML += "1"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber2(){
  total.innerHTML += "2"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber3(){
  total.innerHTML += "3"
  zero.disabled = false;
  w_zero.disabled = false;
}

function clickNumber0(){
  total.innerHTML += "0"
}

function clickNumber00(){
  total.innerHTML += "00"
}

function clickAC(){
  total.innerHTML = null
  zero.disabled = true;
  w_zero.disabled = true;
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

function clickEqual(){
  total.innerHTML = eval(total.innerHTML);
}

//演算の連続入力の不可
plus.addEventListener("click",function(){
plus.disabled = true;
minus.disabled = true;
asterisk.disabled = true;
slash.disabled = true;
})

minus.addEventListener("click",function(){
plus.disabled = true;
minus.disabled = true;
asterisk.disabled = true;
slash.disabled = true;
})

asterisk.addEventListener("click",function(){
plus.disabled = true;
minus.disabled = true;
asterisk.disabled = true;
slash.disabled = true;
})

slash.addEventListener("click",function(){
plus.disabled = true;
minus.disabled = true;
asterisk.disabled = true;
slash.disabled = true;
})

dots.addEventListener("click",function(){
plus.disabled = true;
minus.disabled = true;
asterisk.disabled = true;
slash.disabled = true;
})

/*global AC*/
AC_t.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global seven*/
seven.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global eight*/
eight.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global nine*/
nine.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global six*/
six.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global five*/
five.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global four*/
four.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global three*/
three.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global two*/
two.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global one*/
one.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global zero*/
zero.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

/*global w_zero*/
w_zero.addEventListener("click",function(){
plus.disabled = false;
minus.disabled = false;
asterisk.disabled = false;
slash.disabled = false;
})

