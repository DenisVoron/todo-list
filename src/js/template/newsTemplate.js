const newsTemplate = ({ title, url }) => {
    return `
            <li class="news-list__item">
                <a href="${url}" class="news-list__link link" target="_blank">${title}</a>
            </li>
            `;
}

export default newsTemplate;