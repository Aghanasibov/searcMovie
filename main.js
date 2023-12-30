

const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');

const movieImg = document.querySelector('#movieImg');
const movieCard = document.querySelector('#movieCard');
const movieSubtitle = document.querySelector('#movieSubtitle');
const movieDesc = document.querySelector('#movieDesc');

searchBtn.addEventListener('click', async function () {
    const movieTitle = searchInput.value.trim();

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2c4d035c&t=${movieTitle}`);
        const movieObj = await response.json();

        if (response.ok && movieObj.Response === "True") {
            movieImg.src = movieObj.Poster;
            movieCard.textContent = `${movieObj.Title} (${movieObj.Released})`;
            movieSubtitle.textContent = `Aktorlar: ${movieObj.Actors}`;
            movieDesc.textContent = `Mükafatlar: ${movieObj.Awards}`;
        } else {
            throw new Error('Film tapılmadı.');
        }
    } catch (err) {
        console.error('Sorğuda səhv:', err.message);
        movieImg.src = '';
        movieCard.textContent = 'Film tapılmadı';
        movieSubtitle.textContent = '';
        movieDesc.textContent = '';
    }

    searchInput.value = '';
});