const header = document.querySelector('.header');
const chronicleButton = document.querySelector('#me');
const logo = document.querySelector('.logo', 'a');
const iframe = document.querySelector('iframe')
const column = document.querySelector('.column');


function chronicle() {
        header.innerHTML = `<img src="public/media/touchgrass.jpg"/>`;
        column.innerHTML = `
        <div class="pic">
            <img src="public/media/singingatdchi.jpg"/>
            <p></p>
            <img src="public/media/stagelights.png"/>
            <p></p>
            <img src="public/media/bandwgraphic2.jpg"/>
            <p></p>
            <img src="public/media/cowboysinging3.png"/>
            <p></p>
            `
        console.log('changedheader');
}

function indexHeader() {
    header.innerHTML = `            
    <img src="public/media/vikinghat1.jpg"/>
    <img id="logo" src="public/media/icon/logo.svg">
    `;
    column.innerHTML = `
    <iframe width="666" height="315" src="https://www.youtube.com/embed/jc8y61pfQ6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>
        Sing, Goddess, Achilles' rage,
        Black and murderous, that cost the Greeks
        Incalculable pain, pitched countless souls
        Of heroes into Hades' dark,
        And left their bodies to rot as feasts
        For dogs and birds, as Zeus' will was done.
            Begin with the clash between Agamemnon--
        The Greek warlord--and godlike Achilles.
        
           Which of the immortals set these two
        At each other's throats?
                                            Apollo
        Zeus' son and Leto's, offended
        By the warlord. Agamemnon had dishonored
        Chryses, Apollo's priest, so the god
        Struck the Greek camp with plague,
        And the soldiers were dying of it.
    </p>`
}

chronicleButton.addEventListener("click", chronicle);
logo.addEventListener("click", indexHeader);