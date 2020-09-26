const links = [
    {  
        label: 'Week1 Notes',
        url: 'week1/index.html'
    },
    {
        label: 'Week2 Notes',
        url: 'week2/week2.html'
    }
]

for(let i = 0; i < links.length; i++) {
    // weekLabel = links[i].label;
    // weekLink = links[i].url;

    let li = document.createElement('li');
    let a = document.createElement('a');
                   
    li.textContent = links[i].label;
    a.textContent = href='links[i].url';
                
    li.appendChild(a);
                
    document.getElementById('link').appendChild(li);

    // for (let x = 0; x <link.length; x++) {
    //     document.getElementById('link').innerHTML = w;
    // }
}

