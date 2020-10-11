/ hero input form
const heroForm = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

//JSON way
function makeHero(event) {
    event.preventDefault(); // prevents form from being submitted
    const hero = {}; // create empty object
    hero.name = form.heroName.value; // create name value based in input feilds value 
    hero.realName = from.realName.value;
// check if checkbox checked
// long way
//     hero.powers = [];
// for (let i=0; i < form.powers.length; i++) {
//     if (form.powers[i].checked) {
//         hero.powers.push(form.powers[i].value);
//     }
// }

// shortened way
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
        // use spread opertato to convent node into array
        // filter() method filters so only checked are in array
        // map() method replaces each checkbox in array with its value property
        // all this is stored in hero.powers variable
// radio button
hero.category = form.category.value;

// number
hero.age = form.age.value;

// drop down
hero.city = form.city.value;
    // other way
    // form.city.options[form.city.selectedIndex].text

    alert(JSON.stringify(hero)); // converts object to JSON string
    return hero;
}

// check if index is checked
document.forms.hero.powers[0].checked = true;