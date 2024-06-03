// Object to represent sections of the day with lowercase names
const timeSections = {
    midnight_to_6am: 'midnight_to_6am',
    am_6_to_noon: 'am_6_to_noon',
    noon_to_6pm: 'noon_to_6pm',
    pm_6_to_midnight: 'pm_6_to_midnight'
};

// Images and messages for each time
const timeDetails = {
    midnight_to_6am: {
        image: 'early.png',
        message: 'It is early. Go back to sleep'
    },
    am_6_to_noon: {
        image: 'morning.jpg',
        message: 'It is morning! Gotta Shower'
    },
    noon_to_6pm: {
        image: 'afternoon.jpg',
        message: 'Afternoon, need to hit the gym.'
    },
    pm_6_to_midnight: {
        image: 'night.jpg',
        message: 'Evening or night. Need dinner and sleep'
    }
};

// Function to get the current time based on the hour of the day
function getCurrentTimeSection() {
    const now = new Date();
    const hour = now.getHours();  // get time

    if (hour >= 0 && hour < 6) {
        return timeSections.midnight_to_6am;
    } else if (hour >= 6 && hour < 12) {
        return timeSections.am_6_to_noon;
    } else if (hour >= 12 && hour < 18) {
        return timeSections.noon_to_6pm;
    } else {
        return timeSections.pm_6_to_midnight;
    }
}

// Function to update the image and message based on the current time
function updateTimeDetails() {
    const currentSection = getCurrentTimeSection();
    const imageElement = document.getElementById('timepic');
    const messageElement = document.getElementById('message');

    imageElement.src = timeDetails[currentSection].image;
    imageElement.alt = currentSection;
    messageElement.textContent = timeDetails[currentSection].message;
}

// Update the time details when the page displays
window.onload = updateTimeDetails;
