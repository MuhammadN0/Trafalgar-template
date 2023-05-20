const ul = document.getElementById('ul');
const icon = document.getElementById('burgericon');

icon.addEventListener('click',()=>{
  ul.classList.toggle('active-ul');
  if(ul.classList.contains('active-ul')){
    ul.style.display ='block';
  } else {
    ul.style.display ='none';
  }
})