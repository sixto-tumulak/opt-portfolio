 /* Passcode function */
 function checkPasscode(){
    var enteredPasscode = document.getElementById("passcode").value;
    var correctPasscode = "2000";

    if (enteredPasscode === correctPasscode){
        document.getElementById("passcode-container").style.display = "none";
        window.location.href ="profile.html";
    }
    else{
        alert("Incorrect passcode. Please try again!");
    }
}

/* My Function for Calculator */
let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = `-${currentInput}`;
    }
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}

 
 // Gallery for JavaScript for the image slideshow with navigation buttons
 let slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function showSlides(n) {
   let i;
   const slides = document.getElementsByClassName("mySlides");

   if (n > slides.length) {
     slideIndex = 1;
   }

   if (n < 1) {
     slideIndex = slides.length;
   }

   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }

   slides[slideIndex - 1].style.display = "block";
 }
 
 
