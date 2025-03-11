let stats = JSON.parse(localStorage.getItem('workoutProgress')) || {
    level: 1, xp: 0, str: 1, dex: 1, agi: 1, vit: 1, int: 1
};

document.getElementById("level").innerText = stats.level;
document.getElementById("xp").innerText = stats.xp;
document.getElementById("str").innerText = stats.level * 2;
document.getElementById("dex").innerText = stats.level * 2;
document.getElementById("agi").innerText = stats.level * 2;
document.getElementById("vit").innerText = stats.level * 2;
document.getElementById("int").innerText = stats.level * 2;
