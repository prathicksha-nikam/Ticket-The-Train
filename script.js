let passengersInTrain = 0;
let trainsDispatched = 0;
const maxCapacity = 5;

function spawnPassenger() {
    const waitingArea = document.getElementById("waiting-area");
    
    // Limit max waiting passengers on screen
    if (waitingArea.children.length >= 6) {
        alert("Platform is too crowded! Let passengers board the train first.");
        return;
    }

    const passengerDiv = document.createElement("div");
    passengerDiv.classList.add("passenger");
    passengerDiv.innerText = "🧍 Passenger";
    
    // Click passenger to make them board the train
    passengerDiv.onclick = function() {
        boardTrain(passengerDiv);
    };

    waitingArea.appendChild(passengerDiv);
}

function boardPassenger(element) {
    if (passengersInTrain < maxCapacity) {
        passengersInTrain++;
        element.remove();
        updateUI();

        if (passengersInTrain === maxCapacity) {
            dispatchTrain();
        }
    }
}

// Alias for click event
function boardTrain(element) {
    boardPassenger(element);
}

function updateUI() {
    document.getElementById("passenger-count").innerText = passengersInTrain;
    document.getElementById("train-count").innerText = trainsDispatched;
}

function dispatchTrain() {
    setTimeout(() => {
        alert("🚂 Train is full and departing! Great job!");
        passengersInTrain = 0;
        trainsDispatched++;
        updateUI();
    }, 300);
}
