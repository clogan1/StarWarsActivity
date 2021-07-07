document.addEventListener('DOMContentLoaded', () => {
    // to run the server, in the directory with the dbStarWars.json run
    // json-server --watch dbStarWars.json
    // Create a function that will fetch from 
    // http://localhost:3000/starwars/1
    // Take a look at the index html and add the name, 
    // height, mass, hair color, eye color, 
    // birth year, gender, home world, and films.
   fetchData()
    })


    function fetchData(){
        fetch('http://localhost:3000/starwars/1')
        .then(res => res.json())
        .then(json => addContent(json))
    }

function addContent(data){
    document.querySelector('h1').textContent = data.name;
    document.querySelector('#height').textContent = data.height;
    document.querySelector('#mass').textContent = data.mass;
    document.querySelector('#hair_color').textContent = data.hair_color;
    document.querySelector('#eye_color').textContent = data.eye_color;
    document.querySelector('#birth_year').textContent = data.birth_year;
    document.querySelector('#gender').textContent = data.gender;
    document.querySelector('#homeworld').textContent = data.homeworld;
}

