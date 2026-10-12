function updateTime() {

    let now = new Date();

    let date = now.toLocaleDateString();

    let time = now.toLocaleTimeString();

    let location = "Pakistan";

    document.getElementById("tickerText").innerText =
        "Current Date: " + date +
        "   |   Current Time: " + time +
        "   |   Location: " + location +
        "   |   BidSpirit Online Auction";
}

updateTime();

setInterval(updateTime, 1000);
// DATE AND TIME TICKER

function showTime() {
    let clock = document.getElementById("dateTime");

    if (!clock) {
        return;
    }

    let now = new Date();

    let date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    let time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    clock.innerText =
        "Today: " + date +
        " | Time: " + time +
        " | Pakistan";
}

showTime();

setInterval(showTime, 1000);