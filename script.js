//your JS code here. If required.
const button = document.getElementsByTagName("input")[0];
const select = document.getElementById("colorSelect");

button.addEventListener("click",()=>{
    select.options[select.selectedIndex].remove();
});