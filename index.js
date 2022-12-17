const level = document.querySelector('.level');
const levelOne = document.querySelector('.level_number-one');
const levelTwo = document.querySelector('.level_number-two');
const levelThree = document.querySelector('.level_number-three');
const levelChooseButton = document.querySelector('.level_choose-button');

let chosenLevel;

level.addEventListener ('click', (event) => {
    let h3 = event.target.closest('h3');

    if (!h3) return;

    if (!level.contains(h3)) return;
  
    highlight(h3);
});

function highlight(h3) {
    if (chosenLevel) {
        chosenLevel.classList.remove('highlight');
    }
    chosenLevel = h3;
    chosenLevel.classList.add('highlight');
}

levelChooseButton.addEventListener('click', () => {
    if () {
        document.location = 'levelOne.html';
    }
});

