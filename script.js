function updateDateTime() {
    const now = new Date();

    // Format date as: Mon May 19 2025
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Format time as: 6:06:19 PM
    const formattedTime = now.toLocaleTimeString('en-US');

    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
}

// Initial load
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);
