function showsideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hidesideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


//Gallery on home page

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.src;
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <img src="${imgSrc}" class="modal-img">
                </div>
            `;
            document.body.appendChild(modal);
            
            const closeButton = modal.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
});


// ContactUS page Event listener for submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    
    let nameValid = validateField(name, 'Name');
    let emailValid = validateField(email, 'Email');
    let messageValid = validateField(message, 'Message');

    // success alert
    if (nameValid && emailValid && messageValid) {
        alert('Form submitted successfully!');
    }
 });


// Validation
function validateField(field, fieldName) {
    if (field.value.trim() === '') {
        showError(field, `${fieldName} is required`);
        return false;
    } else if (field.id === 'email' && !isValidEmail(field.value.trim())) {
        showError(field, 'Email is not valid');
        return false;
    } else {
        showSuccess(field);
        return true;
    }
}

// Error message
function showError(field, message) {
    let formControl = field.parentElement;
    let errorText = formControl.querySelector('small');
    errorText.innerText = message;
    errorText.style.visibility = 'visible';
    field.style.borderColor = 'red';
}

// Success message
function showSuccess(field) {
    let formControl = field.parentElement;
    let errorText = formControl.querySelector('small');
    errorText.style.visibility = 'hidden';
    field.style.borderColor = 'green';
}

// Check if email is valid
function isValidEmail(email) {
    
    return email.includes('@') && email.includes('.');
}


// Resources page learning tips
const learningTips = [
    'Set specific goals for your study sessions.',
    'Take regular breaks to keep your mind fresh.',
    'Use active recall to test your memory.',
    'Teach what you have learned to someone else.',
    'Stay organized with a study schedule.',
    'Find a study group to collaborate with.',
    'Use a variety of study materials.',
    'Stay hydrated and eat healthily.',
    'Get plenty of sleep before exams.',
    'Eliminate distractions while studying.'
];

// List of tips
function displayTips() {
    const tipsList = document.getElementById('tips-list');
    learningTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}
//DOM event listener for loading content 
document.addEventListener('DOMContentLoaded', displayTips);


