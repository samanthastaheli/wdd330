const links = [
    {  
        label: 'Week1 Notes',
        url: 'week1/index.html'
    }
]

for(let i = 0; i < links.length; i++) {
    l = links[i].label + ' ' + links[i].url;

    let li = document.createElement('li');
    let a = document.createElement('a');
                   
    a.textContent = l;
                
    li.appendChild(a);
                
    document.getElementById('link').appendChild(li);

    // for (let x = 0; x <link.length; x++) {
    //     document.getElementById('link').innerHTML = w;
    // }
}

