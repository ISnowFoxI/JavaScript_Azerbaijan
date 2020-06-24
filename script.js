//dark mode 
function darkMode() {
  let checkBox  =document.getElementById("checkbox")
  let element = document.body;
  let header = document.getElementById("headOfSite");
  if (checkBox.checked)
  {
    element.style.backgroundColor="#121212"; 
    element.style.color="white"; 
    header.style.backgroundColor="#121212"; 
  }
  else {
    element.style.backgroundColor="white"; 
    element.style.color="black"; 
    header.style.backgroundColor="white"; 
  }
  
}

function light() {
  let header = document.getElementById("headOfSite");
  header.classList.toggle("dark-mode");
  
  let element = document.body;
  element.classList.toggle("dark-mode");
}


//ScrollBar function 
window.onscroll = function() {progressBar()};

function progressBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}