// Async function findThings
async function findThings() {
    // Define API key
    const apiKey = '4fa16c23';

    //student name and number
    const nameD = 'Oleg';
    const numberD = 20089820;

    //print to screen
    Sname.textContent = `Name: ${nameD}`;
    Snumber.textContent = `Number: ${numberD}`;

    // Get movie name from input field
    const movie = document.getElementById('searchInput').value;

    // Fetch data from OMDB API
    const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`);
    const data = await response.json();

    // Handle API error response
    if (data.Response === 'False') {
        alert(data.Error);
        return;
    }

    // Create array with movie details
    const things = [
        data.Title,
        data.Plot,
        data.Actors,
        data.Genre,
        data.Director
    ];

    // Clear output div
    const output = document.getElementById('output');
    output.innerHTML = '';

    // Loop through movie details and display them
    things.forEach((thing, index) => {
        const div = document.createElement('div');
        div.textContent = `${index + 1}. ${thing}`;
        div.classList.add('animation');
        output.appendChild(div);
    });

    // Display movie poster
    const poster = document.getElementById('poster');
    poster.src = data.Poster;
    poster.style.display = 'block';
}