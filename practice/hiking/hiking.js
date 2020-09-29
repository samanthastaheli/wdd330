//create an array of hikes

const hikeList = [
 {
    name: 'Bechler Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
        'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },
{
    name: 'Teton Canyon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Teton Canyon',
    distance: '5 miles',
    difficulty: 'Moderate',
    description: 'Beautiful short hike up Teton Canyon',
    directions:
        'Take Highway 33 to Driggs. Turn right into the town and continue through. Follow that road for a few miles then turn right up Teton Canyon. Drive to the end of the road. There is a parking area at the trailhead.'
    },
 {
    name: 'Denanda Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Denanda Falls',
    distance: '12 miles',
    difficulty: 'Moderate',
    description:
        'Beautiful hike through Bechler Meadows to Denanda Falls',
    directions:
        'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for several miles then turn left again at the sign for the Bechler Meadows ranger station. There is a parking area at the trailhead.'
    }
    ];

/* loop through array
    for each item in array create a new li element
    create more elements to hold hike info
    insert new element into the DOM (send it to the page)
*/

function renderHikeList(list) {
    const listElement = document.querySelector('#hikes'); //grabed element we will be working with
    list.forEach((hike) => {    //forEach is looping through array
        const newli = document.createElement('li'); //created li element 
        newli.innerHTML = renderOneHike(hike);
        listElement.appendChild(newli);
    });
}

// returns HTML string
function renderOneHike(hike) {
     let hikeHTML = `<img
     src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}"
     alt="${hike.imgAlt}"
   />
    <h2>${hike.name}</h2>
   <div>
     <h3>Distance</h3>
     <p>3 miles</p>
   </div>
   <div>
     <h3>Difficulty</h3>
     <p>Easy</p>
   </div>
   <div>
     <h3>Description</h3>
     <p>Beautiful short hike along the Bechler river to Bechler Falls</p>
   </div>
   <div>
     <h3>How to get there</h3>
     <p>
       Take Highway 20 north to Ashton. Turn right into the town and
       continue through. Follow that road for a few miles then turn left
       again onto the Cave Falls road. Drive to the end of the Cave Falls
       road. There is a parking area at the trailhead.
     </p>
   </div>`
   return hikeHTML;
}

// window.onload another way to run JS
renderHikeList(hikeList);