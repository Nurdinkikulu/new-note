// Function to load events from local storage
function loadEvents() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = ''; // Clear existing list

    events.forEach((event, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${event.date}</strong>: ${event.description}
            <button onclick="deleteEvent(${index})">Delete</button>
        `;
        eventList.appendChild(li);
    });
}

// Function to add an event
document.getElementById("addEventBtn").addEventListener("click", function () {
    const date = document.getElementById("eventDate").value;
    const description = document.getElementById("eventDescription").value;

    if (!date || !description) {
        alert("Please fill both date and event description.");
        return;
    }

    // Get events from local storage
    const events = JSON.parse(localStorage.getItem("events")) || [];

    // Add new event
    events.push({ date, description });

    // Save events back to local storage
    localStorage.setItem("events", JSON.stringify(events));

    // Clear input fields
    document.getElementById("eventDate").value = '';
    document.getElementById("eventDescription").value = '';

    // Reload events
    loadEvents();
});

// Function to delete an event
function deleteEvent(index) {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    
    // Remove event from array
    events.splice(index, 1);

    // Save updated events to local storage
    localStorage.setItem("events", JSON.stringify(events));

    // Reload events
    loadEvents();
}

// Load events when the app is initialized
loadEvents();