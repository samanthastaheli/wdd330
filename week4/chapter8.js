// // search input form
// const form = document.forms['search'];
// form.addEventListener('submit', search, false);

// // simple way
// function search(event) {
//     event.preventDefault(); // prevents form from being submitted
//     alert(`You Searched For: ${form.searchInput.value}`);
// }

// quiz ninja
// response: document.querySelector('#response');

// start(quiz){
//     this.score = 0;
//     this.questions = [...quiz];
//     this.ask();
// }

// ask(name){
//     if(this.questions.length > 0) {
//         this.question = this.questions.pop();
//         const question = `What is ${this.question.name}'s real name?`;
//         view.render(view.question,question);
//     }
//     else{
//         this.gameOver();
//     }
// }

// view.response.addEventListener('submit', (event) => game.check(event), false);
// view.hide(view.response);