let progress = JSON.parse(localStorage.getItem('workoutProgress')) || {
    pushups: 0, situps: 0, squats: 0, run: 0, xp: 0, level: 1
};

function updateTime() {
    const now = new Date();
    document.getElementById("time-display").innerText = `Current Time: ${now.toLocaleTimeString()}`;
}
setInterval(updateTime, 1000);
updateTime();

function updateExercise(exercise, amount) {
    progress[exercise] += amount;
    if (progress[exercise] > 100 && exercise !== "run") progress[exercise] = 100;
    if (progress[exercise] > 10 && exercise === "run") progress[exercise] = 10;

    document.getElementById(exercise).innerText = `${progress[exercise]}/${exercise === "run" ? 10 : 100}`;
    localStorage.setItem('workoutProgress', JSON.stringify(progress));
}

function checkCompletion() {
    if (progress.pushups >= 100 && progress.situps >= 100 && progress.squats >= 100 && progress.run >= 10) {
        document.getElementById("status").innerText = "Quest Completed!";
        progress.xp += 50;
        if (progress.xp >= 100) {
            progress.level++;
            progress.xp = 0;
        }
        localStorage.setItem('workoutProgress', JSON.stringify(progress));
    } else {
        document.getElementById("status").innerText = "You must complete all exercises!";
    }
}
