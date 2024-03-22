s = 0
function affichage(){

    var q1 = document.getElementById("q-1-4").checked ;
    if(q1){
        s++
    }

    var q2 = document.getElementById("q-2-4").checked ;
    if(q1){
        s++
    }

    var q3 = document.getElementById("q-3-2").checked ;
    if(q3){
        s++
    }

    var q4 = document.getElementById("q-4-2").checked ;
    if(q4){
        s++
    }

    var q5 = document.getElementById("q-5-2").checked ;
    if(q5){
        s++
    }

    var q6 = document.getElementById("q-6-2").checked ;
    if(q6){
        s++
    }

    var q7 = document.getElementById("q-7-1").checked ;
    if(q7){
        s++
    }

    var q8_1 = document.getElementById("q-8-1").checked ;
    var q8_2 = document.getElementById("q-8-2").checked ;
    var q8_3 = document.getElementById("q-8-3").checked ;
    var q8_4 = document.getElementById("q-8-4").checked ;
    if(q8_1 || q8_2 || q8_3 || q8_4){
        s++
    }

    var q9 = document.getElementById("q-9-1").checked ;
    if(q9){
        s++
    }

    var q10 = document.getElementById("q-10-4").checked ;
    if(q10){
        s++
    }
    
    if(s < 5){
        window.location.href = "file:///C:/Users/yassi/OneDrive/Documents/projects/quiz/endings/ending_1.html"
    }
    else if(s > 5 && s < 8){
        window.location.href = "file:///C:/Users/yassi/OneDrive/Documents/projects/quiz/endings/ending_2.html"
    }
    else{
        window.location.href = "file:///C:/Users/yassi/OneDrive/Documents/projects/quiz/endings/ending_3.html"
    }
}

function checkTime() {
    const startTime = Date.now(); // Get the current timestamp in milliseconds
    let timeLeft =  60; // Initially set time left to 2 minutes (120 seconds)
  
    // Function to update the timer every second
    const updateTimer = function() {
      timeLeft = Math.max(0, timeLeft - 1); // Decrement time left and ensure it's not negative
      const timerElement = document.getElementById("timer");
      timerElement.textContent = timeLeft + " seconds";
  
      if (timeLeft === 0) {
        window.location.href = "file:///C:/Users/yassi/OneDrive/Documents/projects/quiz/endings/ending_4.html";
        return false; // Signal timeout and stop timer
      } else {
        setTimeout(updateTimer, 1000); // Schedule the next update
      }
    };
  
    // Start the timer after 1 second
    setTimeout(updateTimer, 1000);
  }
  
  window.onload = checkTime;
