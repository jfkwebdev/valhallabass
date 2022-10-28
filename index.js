const header = document.querySelector('.header');
const chronicleButton = document.querySelector('#me');
const logo = document.querySelector('.logo', 'a');
const iframe = document.querySelector('iframe')
const column = document.querySelector('.column');


function chronicle() {
        header.innerHTML = `<img src="public/media/touchgrass.jpg"/>`;
        column.innerHTML = `
        <p>Valhalla Bass began as a college sensation that evolved into an unstoppable professional vibrato. After playing lead bass in Tuscaloosa's popular Joey Freshwater Band, Chandler Patty graduated with a Chemical Engineering degree but decided in the haze of playing a graduate gig at red shed in full robes and regalia that his journey and craft had only just begun. After moving to Huntsville Alabama, Chandler went on tour and performed with the funk rock group Opposite Box. Between this and Joey Freshwater shows, which were still in high demand at the University of Alabama, Patty found his footing and was able to develop his craft in collaborative settings and solo acts. Open mic nights and new partnerships flourished despite the closing of bars and venues alike, and Chandler found a niche and community as Valhalla Bass was born. During this expansion, Chandler began to play bass for up and coming country artist, Justin Holt, supporting his band on many dates in 2021. Chandler released his first album "By the Magnolia" on Bandcamp, chronicling his life in Huntsville and inspirations thus far. After touring with the Justin Holt Band and following his album release, he relocated to his hometown of Nashville, Tennessee where he made his first Broadway appearance and has become a regular on the Nashville scene. Chandler Patty's new album "Eden IS" will be released on November 1, 2022 across all platforms - an anxiety reducing, harmonious arrangement that resonates with his own unique sound. "Eden IS" is a refreshing bass-focused production that reveals that Patty is not only a rising talent, but a force to be reckoned with.  
        </p>
        <div class="pic">
            <img src="public/media/slapstank.jpg"/>
            <p></p>
            <img src="public/media/oppbox.jpg"/>
            <p></p>
            <img src="public/media/fisheyecowboy.png"/>
            <p></p>
            <img src="public/media/cowboysinging3.png"/>
            <p></p>
            `
        console.log('changedheader');
}

function indexHeader() {
    header.innerHTML = `            
    <img src="public/media/vikinghat1.jpg"/>
    <img id="logo" src="public/media/icon/logo.svg"/>
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