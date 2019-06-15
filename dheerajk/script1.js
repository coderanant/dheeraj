document.getElementById("one").onchange = function () 
{
  document.getElementById("two").setAttribute("disabled", "disabled");
  document.getElementById("three").setAttribute("disabled", "disabled");
  document.getElementById("four").setAttribute("disabled", "disabled");
  document.getElementById("five").setAttribute("disabled", "disabled");
  document.getElementById("six").setAttribute("disabled", "disabled");
  document.getElementById("seven").setAttribute("disabled", "disabled");
  document.getElementById("eight").setAttribute("disabled", "disabled");
  document.getElementById("nine").setAttribute("disabled", "disabled");
  document.getElementById("ten").setAttribute("disabled", "disabled");
  document.getElementById("eleven").setAttribute("disabled", "disabled");
  document.getElementById("twelve").setAttribute("disabled", "disabled");
  document.getElementById("thirteen").setAttribute("disabled", "disabled");
  document.getElementById("fourteen").setAttribute("disabled", "disabled");
  document.getElementById("fifteen").setAttribute("disabled", "disabled");
  document.getElementById("sixteen").setAttribute("disabled", "disabled");
  document.getElementById("seventeen").setAttribute("disabled", "disabled");
  document.getElementById("eighteen").setAttribute("disabled", "disabled");
  document.getElementById("nineteen").setAttribute("disabled", "disabled");

  if (this.value == "no"){

  	 document.getElementById("two").removeAttribute("disabled");
  	 document.getElementById("three").removeAttribute("disabled");
  	 document.getElementById("four").removeAttribute("disabled");
  	 document.getElementById("five").removeAttribute("disabled");
     document.getElementById("six").removeAttribute("disabled");
     document.getElementById("seven").removeAttribute("disabled");
     document.getElementById("eight").removeAttribute("disabled");
     document.getElementById("nine").removeAttribute("disabled");

  }

  else if (this.value == "yes"){
  	document.getElementById("ten").removeAttribute("disabled");
  	 document.getElementById("eleven").removeAttribute("disabled");
  	 document.getElementById("twelve").removeAttribute("disabled");
  document.getElementById("thirteen").removeAttribute("disabled");
  document.getElementById("fourteen").removeAttribute("disabled");
  document.getElementById("fifteen").removeAttribute("disabled");
  document.getElementById("sixteen").removeAttribute("disabled");
  document.getElementById("seventeen").removeAttribute("disabled");
  document.getElementById("eighteen").removeAttribute("disabled");
  document.getElementById("nineteen").removeAttribute("disabled");
  }

};


function myfunc1a() {
  var checkBox1 = document.getElementById("1a");
  if (checkBox1.checked == true){
    document.getElementById("2a").disabled = true;
    document.getElementById("3a").disabled = true;
  } 
  if (checkBox1.checked == false){
    document.getElementById("2a").disabled = false;
    document.getElementById("3a").disabled = false;
  } 
  
}
  

function myfunc2a(){
var checkBox5 = document.getElementById("2a");
  
  if (checkBox5.checked == true){
    document.getElementById("1a").disabled = true;
    document.getElementById("3a").disabled = true;
  } 
  if (checkBox5.checked == false){
    document.getElementById("1a").disabled = false;
    document.getElementById("3a").disabled = false;
  } 
}

function myfunc1b() {
  var checkBox2 = document.getElementById("1b");
  if (checkBox2.checked == true){
    document.getElementById("2b").disabled = true;
    document.getElementById("3b").disabled = true;
  } 
  if (checkBox2.checked == false){
    document.getElementById("2b").disabled = false;
    document.getElementById("3b").disabled = false;
  } 
  
}

function myfunc2b(){
var checkBox6 = document.getElementById("2b");
  
  if (checkBox6.checked == true){
    document.getElementById("1b").disabled = true;
    document.getElementById("3b").disabled = true;
  } 
  if (checkBox6.checked == false){
    document.getElementById("1b").disabled = false;
    document.getElementById("3b").disabled = false;
  } 
  
}

function myfunc1c() {
  var checkBox3 = document.getElementById("1c");
  if (checkBox3.checked == true){
    document.getElementById("2c").disabled = true;
    document.getElementById("3c").disabled = true;
  } 
  if (checkBox3.checked == false){
    document.getElementById("2c").disabled = false;
    document.getElementById("3c").disabled = false;
  } 
  
}

function myfunc2c(){
var checkBox7 = document.getElementById("2c");
  
  if (checkBox7.checked == true){
    document.getElementById("1c").disabled = true;
    document.getElementById("3c").disabled = true;
  } 
  if (checkBox7.checked == false){
    document.getElementById("1c").disabled = false;
    document.getElementById("3c").disabled = false;
  } 
  
}

function myfunc1d() {
  var checkBox4 = document.getElementById("1d");
  if (checkBox4.checked == true){
    document.getElementById("2d").disabled = true;
    document.getElementById("3d").disabled = true;
  } 
  if (checkBox4.checked == false){
    document.getElementById("2d").disabled = false;
    document.getElementById("3d").disabled = false;
  } 
  
}

function myfunc2d(){
var checkBox8 = document.getElementById("2d");
  
  if (checkBox8.checked == true){
    document.getElementById("1d").disabled = true;
    document.getElementById("3d").disabled = true;
  } 
  if (checkBox8.checked == false){
    document.getElementById("1d").disabled = false;
    document.getElementById("3d").disabled = false;
  } 
  
}


document.getElementById("1").onchange = function () 
{
  document.getElementById("2").setAttribute("disabled", "disabled");
  document.getElementById("3").setAttribute("disabled", "disabled");
  document.getElementById("4").setAttribute("disabled", "disabled");
  document.getElementById("5").setAttribute("disabled", "disabled");
  document.getElementById("6").setAttribute("disabled", "disabled");
  document.getElementById("7").setAttribute("disabled", "disabled");
  document.getElementById("8").setAttribute("disabled", "disabled");
  document.getElementById("9").setAttribute("disabled", "disabled");
  document.getElementById("10").setAttribute("disabled", "disabled");
  document.getElementById("11").setAttribute("disabled", "disabled");

  if (this.value == "yes"){

     document.getElementById("2").removeAttribute("disabled");
     document.getElementById("3").removeAttribute("disabled");
     document.getElementById("4").removeAttribute("disabled");
     document.getElementById("5").removeAttribute("disabled");
     document.getElementById("6").removeAttribute("disabled");
     document.getElementById("7").removeAttribute("disabled");
     document.getElementById("8").removeAttribute("disabled");
     document.getElementById("9").removeAttribute("disabled");
     document.getElementById("10").removeAttribute("disabled");
     document.getElementById("11").removeAttribute("disabled");

  }
};

document.getElementById("a").onchange = function () 
{
  document.getElementById("b").setAttribute("disabled", "disabled");
  document.getElementById("c").setAttribute("disabled", "disabled");
  document.getElementById("d").setAttribute("disabled", "disabled");
  document.getElementById("e").setAttribute("disabled", "disabled");
  document.getElementById("f").setAttribute("disabled", "disabled");
  document.getElementById("g").setAttribute("disabled", "disabled");

  if (this.value == "yes"){

     document.getElementById("b").removeAttribute("disabled");
     document.getElementById("c").removeAttribute("disabled");
     document.getElementById("d").removeAttribute("disabled");
     document.getElementById("e").removeAttribute("disabled");
     document.getElementById("f").removeAttribute("disabled");
     document.getElementById("g").removeAttribute("disabled");
    
  }
};

document.getElementById("xyz").onchange = function () 
{
  document.getElementById("abc").setAttribute("disabled", "disabled");

  if (this.value == "yes"){

     document.getElementById("abc").removeAttribute("disabled");
    
  }
};

document.getElementById("def").onchange = function () 
{
  document.getElementById("pqr").setAttribute("disabled", "disabled");

  if (this.value == "yes"){

     document.getElementById("pqr").removeAttribute("disabled");
    
  }
};