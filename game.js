// Array to keep track of selected cards
let selectedCards = [];

// Object to store matching pairs of tips and benefits
const pairs = {
    tip1: 'benefit1',
    tip2: 'benefit2',
    tip3: 'benefit3'
};

// Function to handle card click events
function handleCardClick(event) {
    let card = event.target;
    
    // Check if card is not already matched or selected
    if (!card.classList.contains('matched') && selectedCards.length < 2 && !card.classList.contains('selected')) {
        card.classList.add('selected'); // Add selected class to card
        selectedCards.push(card); // Add card to selectedCards array

        // If two cards are selected, check for a match
        if (selectedCards.length === 2) {
            checkMatch();
        }
    }
}

// Check if the selected cards match
function checkMatch() {
    const firstCard = selectedCards[0];
    const secondCard = selectedCards[1];
    const firstTip = firstCard.getAttribute('data-tip');
    const secondTip = secondCard.getAttribute('data-tip');

    // Checking to see if the selected cards match
    if (pairs[firstTip] === secondTip || pairs[secondTip] === firstTip) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        selectedCards = []; // Clear selected cards array
       // Check if all cards are matched
        checkWin(); 
    } else {
        // Not a match, deselect the cards
        setTimeout(() => {
            firstCard.classList.remove('selected');
            secondCard.classList.remove('selected');
            selectedCards = []; 
        }, 1000);
    }
}

// Function to check if all cards are matched
function checkWin() {
    const totalCards = document.querySelectorAll('.card').length;
    const matchedCards = document.querySelectorAll('.card.matched').length;
    
    // All cards are matched, show message
    if (matchedCards === totalCards) {
        document.getElementById('result').textContent = 'Congratulations you know your stuff, you are a step above! Check out our resources page for more tips or tricks!';
    }
}

// Reset the game
function resetGame() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('selected', 'matched');
    });
    selectedCards = [];
    document.getElementById('result').textContent = '';
}

// EventListners for each card(onlick)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', handleCardClick);
});

// EventListner for reset button
document.getElementById('reset-button').addEventListener('click', resetGame);
