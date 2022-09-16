const linklist = document.querySelector('#link-list');
const bandcamp = 'https://valhallabass.bandcamp.com/album/by-the-magnolia'
const insta = 'http://instagram.com/valhallabass'
const tiktok = 'http://tiktok.com/valhallabass'

linklist.innerHTML =
    `<ul>
        <li><a href="${bandcamp}">Discography</a></li>
        <li><a href="${insta}">Instagram</a></li>
        <li><a href="${tiktok}">TikTok</a></li>
    </ul>
    `;

    