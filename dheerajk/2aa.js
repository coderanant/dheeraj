/*document.getElementById("two").onchange = function () {
  document.getElementById("three").setAttribute("disabled", "disabled");
  if (this.value == "0" )
    document.getElementById("three").removeAttribute("disabled");
};*/

document.getElementById("any").onchange = function () {
  document.getElementById("past").setAttribute("disabled", "disabled");
  if (this.value == "Yes" )
    document.getElementById("past").removeAttribute("disabled");
};