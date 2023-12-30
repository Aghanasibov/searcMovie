//
// const searchBtn=document.querySelector('#searchBtn')
// const searchInput=document.querySelector('#searchInput')
//
//
// const movieImg=document.querySelector('#movieImg')
// const movieCard=document.querySelector('#movieCard')
// const movieSubtitle=document.querySelector('#movieSubtitle')
// const movieDesc=document.querySelector('#movieDesc')
//
//
//
//
//
//
//
//
// searchBtn.addEventListener('click',function () {
//     const movieTitle=searchInput.value
//     console.log('movieTitle',movieTitle)
//     const myPromise = fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2c4d035c&t=${movieTitle}`)
//
//
//
//     myPromise.then(res => {
//         const secondPromise = res.json()
//         return secondPromise
//     }).then((movieObj) => {
//         console.log(movieObj);
//
//         movieImg.src=movieObj.Poster
//         movieCard.innerHTML=`${movieObj.Title} ${movieObj.Relased}`
//         movieSubtitle.innerHTML=movieObj.Actors
//         movieDesc.innerHTML=movieObj.Awards
//     }).catch((err) => {
//         console.log('err', err)
//     }).finally(() => {
//         console.log('fetched')
//     })
//
//
//     searchInput.value=''
// })

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
        movieImg.src = ''; // Hata durumunda resmi temizle
        movieCard.textContent = 'Film tapılmadı';
        movieSubtitle.textContent = '';
        movieDesc.textContent = '';
    }

    searchInput.value = '';
});