/* VISITOR COUNT */

let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);

document.getElementById("visitorCount").innerText = visits;


/* DATE AND TIME */

function updateTime() {

    let now = new Date();

    let date = now.toLocaleDateString("en-PK", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    let time = now.toLocaleTimeString("en-PK");

    document.getElementById("tickerText").innerHTML =
        " " + date +
        " &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; " +
        " " + time +
        " &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; " +
        " Pakistan";
}

updateTime();

setInterval(updateTime, 1000);