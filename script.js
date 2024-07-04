function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(17, 25);
    const dayOfWeek = now.toUTCString().slice(0, 3);

    document.getElementById('time').innerText = utcTime;
    document.getElementById('day').innerText = dayOfWeek;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
