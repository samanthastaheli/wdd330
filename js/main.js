const week = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const weekButton = document.getElementById('weekButton')

weekButton.addEventListener('click', weekContentCreator);

function createAElement(weekNo) {
    
}

function weekContentCreator() {
    for(let i = 0; i > week.length; i++) {
        let weekNo = week[i];
        const linksDiv = document.getElementById('weekContent');
    const a = linksDiv.innerHTML = `
        <a class="weekLink" href="week${weekNo}.html">Week ${weekNo}</a>
    `;
    linksDiv.appendChild(a);
    }
}









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

// drop down
// toggle between hiding and showing dropdown content
function weekDropdown() {
    document.getElementById('weekContent').classList.toggle("show");
}

function activitesDropdown() {
    document.getElementById('activitesContent').classList.toggle("show");
}

function challengesDropdown() {
    document.getElementById('challengesContent').classList.toggle("show");
}

// close dropdown when clicked outside of it
window.onlick = function(event) {
    if (!event.target.matches('.dropButton')) {
        dropdowns = document.getElementsByClassName('dropdown-content');
        i;
        for (i = 0; i < dropdowns.lenght; i++) {
            openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

