const nameDiv = document.getElementById('name');
const menuDiv = document.getElementById('menu');
const weeks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export function createMenu() {
    nameDiv.innerHTML = 
        `<a href="index.html" id="titleHomeLink">
            <h1 href="index.html">WDD 330 Portfolio: Samantha Staheli</h1>
        </a>`

    for(let i = 0; i < weeks.length; i++) {
        menuDiv.innerHTML = 
            `<div id="home">
                <a id="homeLink" href="index.html">Home</a>
            </div>
            <div class="dropdown">
                <button class="dropButton" id="weeksDropButton" id="weekButton">Weeks<span class="material-icons">arrow_drop_down</span></button>
                <div id="weekContent" class="hidden"></div>
            </div>
            <div class="dropdown">
                <button class="dropButton" id="activitesDropButton">Team Activities<span class="material-icons">arrow_drop_down</span></button>
                <div id="activitesContent" class="hidden"></div>
            </div>
            <div class="dropdown">
                <button class="dropButton" id="challengesDropButton">Challenges<span class="material-icons">arrow_drop_down</span></button>
                <div id="challengesContent" class="hidden"></div>
            </div>`
    }
}

const challenges = document.getElementById('challengesContent');
const activites = document.getElementById('activitesContent');

export function dropWeeks() {
    let weeks = document.getElementById('weekContent');
    weeks.innerHTML = 
    `<a class="dropedLink" href="week1.html">Week 1</a>
    <a class="dropedLink" href="week2.html">Week 2</a>
    <a class="dropedLink" href="week3.html">Week 3</a>
    <a class="dropedLink" href="week4.html">Week 4</a>
    <a class="dropedLink" href="week5.html">Week 5</a>
    <a class="dropedLink" href="week6.html">Week 6</a>
    <a class="dropedLink" href="week7.html">Week 7</a>
    <a class="dropedLink" href="week8.html">Week 8</a>
    <a class="dropedLink" href="week9.html">Week 9</a>
    <a class="dropedLink" href="week10.html">Week 10</a>`

    weeks.classList.toggle('hidden');
}
export function dropActivities() {
    let activites = document.getElementById('activitesContent');
    activites.innerHTML = 
    `<a class="dropedLink" href="week4/tictactoe/tictactoe.html">Tic Tac Toe</a>
    <a class="dropedLink" href="week5/activity5/index.html">Hiking</a>
    <a class="dropedLink" href="week8/pokemon-api/index.html">Pokemon</a>`

    activites.classList.toggle('hidden');
}
export function dropChallenges() {
    let challenges = document.getElementById('challengesContent');
    challenges.innerHTML = 
    `<a class="dropedLink" href="challenge1/index.html">Todo App</a>
    <a class="dropedLink" href="challenge2/index.html">Challenge 2</a>`

    challenges.classList.toggle('hidden');
}

// // export function weekDropdown() {

// // }

// // export function activitesDropdown() {
// //     const activitesDiv = document.getElementById('activitesContent');
// //     activitesDiv.innerHTML = 
// //         ``
// // }

// // export function challengesDropdown() {
// // const challengesDiv = document.getElementById('challengesContent');
// // challengesDiv.innerHTML = 
// //     `<a class="projectLink" href="projects/todo/index.html">Challenge 1</a>`
// // }




// function renderlinkList(list) {
//     const listElement = document.querySelector('#linkList');
//     list.forEach((linkList) => {
//         const newli = document.createElement('li');
//         newli.innerHTML = renderOneLink(linkList);
//         listElement.appendChild(newli);
//     });
// }

// //return HTML string
// function renderOneLink(linkList) {
//     let linkHTML = `<li><a href='${linkList.url}'>${linkList.label}<a/></li>`
// }

// renderlinkList(links);


// for(let i = 0; i < links.length; i++) {
//     // weekLabel = links[i].label;
//     // weekLink = links[i].url;

//     let li = document.createElement('li');
//     let a = document.createElement('a');
                   
//     li.textContent = links[i].label;
//     a.textContent = href='links[i].url';
                
//     li.appendChild(a);
                
//     document.getElementById('link').appendChild(li);

//     // for (let x = 0; x <link.length; x++) {
//     //     document.getElementById('link').innerHTML = w;
//     // }
// }

// // drop down
// // toggle between hiding and showing dropdown content
// function weekDropdown() {
//     document.getElementById('weekContent').classList.toggle("show");
// }

// function activitesDropdown() {
//     document.getElementById('activitesContent').classList.toggle("show");
// }

// function challengesDropdown() {
//     document.getElementById('challengesContent').classList.toggle("show");
// }

// // close dropdown when clicked outside of it
// export function dropDown(event) {
//     if (!event.target.matches('.dropButton')) {
//         dropdowns = document.getElementsByClassName('dropdown-content');
//         i;
//         for (i = 0; i < dropdowns.lenght; i++) {
//             openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }