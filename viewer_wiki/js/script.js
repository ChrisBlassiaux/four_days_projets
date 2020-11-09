const createAnswer = (title, url, text) => {
  let answer = document.createElement('div');
  answer.classList.add('answer');
  let answerTitle = document.createElement('h2');
  answerTitle.innerHTML = `<a href="${url}" target="_blank">${title}</a>`
  answerTitle.classList.add('title');
  let answerUrl = document.createElement('p');
  answerUrl.innerHTML = url; 
  answerUrl.classList.add('link');
  answer.appendChild(answerTitle);
  answer.appendChild(answerUrl);
  return answer;
}

const form = document.getElementById('form');

form.addEventListener('input', (e) => {
  e.preventDefault();

  let search = "https://en.wikipedia.org/w/api.php?action=opensearch&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&search=" + form.elements[0].value ;

  $.get(search, success);
  
  let answers = document.querySelector('.answers');

  function success(datas) {
    $( ".answer" ).remove();

    if(form.elements[0].value) {
      for (let i = 1; i < datas[1].length; i++) {
        answers.appendChild(createAnswer(datas[1][i], datas[3][i]));
      }
    }
  }
})


// JSON
// const user = {
//   age: 14,
//   name: 'chris'
// }

// console.log(JSON.stringify(user));

// const user1 = JSON.parse('{"age":14,"name":"chris"}');

// console.log(user1);


// AJAX

//Envoyer et récuperer des données dans le serveur de façon asynchrone => sans recharger la page



// XML est délaissé au profit du JSON
// Commence à laisser place à l'API fetch

//AJAX : désigne l'entièreté des techniques pour intéragir avec le serveur et mettre à jour la vue grâce au DOM de manière dynamique sans recharger la page

//XMLhttprequest object : Permet de faire des requètes http sans recharger la page en utilisant du JS