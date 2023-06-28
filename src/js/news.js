import newsTemplate from './template/newsTemplate.js';

const URL = 'https://hn.algolia.com/api/v1/search';

const ref = {
    inputQuery: document.querySelector('.js-query-input'),
    loaderQuery: document.querySelector('.js-query-load'),
    newsList: document.querySelector('.js-news-list'),
};


const showLoader = () => {
    ref.loaderQuery.classList.add('show');
    ref.loaderQuery.classList.remove('hide');
};
const hideLoader = () => {
    ref.loaderQuery.classList.add('hide');
};

const render = (hits) => {
    console.log(hits)
    const list = hits.map(({ title, url }) => newsTemplate({ title, url })).join('');

    ref.newsList.innerHTML = '';
    ref.newsList.insertAdjacentHTML('afterbegin', list);
};


const onQueryChange = e => {
    const query = e.target.value;

    if (!query) {
        ref.newsList.innerHTML = '';
        return
    }

    showLoader();
    fetch(`${URL}?hitsPerPage=10&query=${query}`)
        .then((res) => res.json())
        .then(({ hits }) => render(hits))
        .finally(hideLoader)
};

function debounce(callback, delay) {
    let timerId = 0;

    return function (e) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            callback(e);
            timerId = 0;
        }, delay);
    }
}

ref.inputQuery.addEventListener('input', debounce(onQueryChange, 1000));





//=====================throttle
// function throttle(callback, delay) {

//     let timerId = 0;
//     return function (e) {
//         if (timerId) return;

//         timerId = setTimeout(() => {
//             callback(e)
//             timerId = 0;
//         }, delay);
//     }
// };