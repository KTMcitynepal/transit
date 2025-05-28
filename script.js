function updateDateTime() {
    const now = new Date();

    // Manually format date as: Mon May 28 2025 (without commas)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const weekday = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    const formattedDate = `${weekday} ${month} ${day} ${year}`;

    // Format time as: 6:06:19 PM
    const formattedTime = now.toLocaleTimeString('en-US');

    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
}

// Initial load
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);
