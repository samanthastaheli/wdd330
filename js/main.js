// const links = [
//     {  
//         label: 'Week1',
//         url: 'week1.html'
//     },
//     {
//         label: 'Week2',
//         url: 'week2.html'
//     },
//     {
//         label: 'Week3',
//         url: 'week3.html'
//     }
// ];

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

function projectDropdown() {
    document.getElementById('projectContent').classList.toggle("show");
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