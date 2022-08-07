const inputScrol = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputScrol.addEventListener ('input', spanTextSize);

function spanTextSize(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}