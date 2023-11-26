function getGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    if (currentHour > 6 && currentHour < 12) {
        return "Good morning";
    } else if (currentHour > 12 && currentHour < 18) {
        return "Good afternoon";
    } else if (currentHour > 18 && currentHour <= 23){
        return "Good evening";
    } else {
        return "Good nights";
    }
}

function updateGreeting() {
    var greetingDiv = document.getElementById("greeting");
    var greetingMessage = getGreeting();
    greetingDiv.textContent = greetingMessage;
}


updateGreeting();


setInterval(updateGreeting, 60000);
