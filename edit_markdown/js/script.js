form.addEventListener('input', (e) => {
  e.preventDefault();

  document.getElementById('content').innerHTML = marked(form.elements[0].value);
  
  localStorage.setItem('markdown', form.elements[0].value);
  // localStorage.getItem('markdown')  => mettre input 
});

document.querySelector('textarea').innerHTML = localStorage.getItem('markdown');
document.getElementById('content').innerHTML = marked(localStorage.getItem('markdown'));


// localStorage.removeItem('markdown');

// plusieurs espaces, il prend qu'un espace
// il ne prend pas les retours à la ligne


// tester jquery