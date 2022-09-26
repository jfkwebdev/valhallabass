const header = document.querySelector('#header');
const chronicleButton = document.querySelector('#me');
const logo = document.querySelector('.logo', 'a');
const iframe = document.querySelector('iframe')


function meHeader() {
        header.innerHTML = `<img src="content/basswalksmile.jpg"/>`;
        console.log('changedheader');
}

function indexHeader() {
    header.innerHTML = `<img src="content/vikinghat1.jpg"/>`;
}

function stopYT() {
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
  func: 'stopVideo' }), '*');
}

chronicleButton.addEventListener("click", meHeader);
logo.addEventListener("click", indexHeader);