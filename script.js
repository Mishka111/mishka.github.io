function copy(that){
  const inp = document.createElement('input');
  document.body.appendChild(inp)
  inp.value = that.textContent
  inp.select();
  document.execCommand('copy', false);
  inp.remove();

  const copyDiv = document.querySelector(".copyAlert")
    copyDiv.textContent = "Copied!";
    copyDiv.style.animationName = "disappear";
    copyDiv.style.animationDuration = "2.5s"; 
    setTimeout(function(){ 
    copyDiv.style.animationName = "none"; 
    }, 2400);
}

const cards = document.querySelectorAll('.card')
const projectsQuantity = document.querySelector('#projects-quantity')

projectsQuantity.innerHTML = cards.length