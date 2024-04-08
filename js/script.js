async function findThings() {
    const apiKey = '4fa16c23'; 
    const movie = document.getElementById('searchInput').value;

    const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === 'False') {
      alert(data.Error);
      return;
    }

    const things = [
      data.Title,
      data.Plot,
      data.Actors,
      data.Genre,
      data.Director
    ];

    const output = document.getElementById('output');
    output.innerHTML = '';

    things.forEach((thing, index) => {
      const div = document.createElement('div');
      div.textContent = `${index + 1}. ${thing}`;
      div.classList.add('animation');
      output.appendChild(div);
    });

    const poster = document.getElementById('poster');
    poster.src = data.Poster;
    poster.style.display = 'block';
  }