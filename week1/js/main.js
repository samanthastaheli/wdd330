const link = [
    {  
        label: 'Week1 Notes',
        url: 'index.html'
    },
    {
        label: 'Week 2',
        url: 'index.html'
    }
]

for (let i = 0; i < link.length; i++) {
    w = link[i].label + ' ' + link[i].url;

    for (let x = 0; x <link.length; x++) {
        document.getElementById('link').innerHTML = w;
    }
}

