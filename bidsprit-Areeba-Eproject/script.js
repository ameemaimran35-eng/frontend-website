// Visitor count

let visits = localStorage.getItem("visits");

if (!sessionStorage.getItem("countedVisit")) {
    if (!visits) {
        visits = 1;
    } else {
        visits = Number(visits) + 1;
    }

    localStorage.setItem("visits", visits);
    sessionStorage.setItem("countedVisit", "true");
}

let visitor = document.getElementById("visitorCount");

if (visitor) {
    visitor.innerText = localStorage.getItem("visits");
}

// Username

let name = sessionStorage.getItem("userName");

if (!name) {
    name = prompt("Please enter your first name:");

    if (!name) {
        name = "Guest";
    }

    sessionStorage.setItem("userName", name);
}

let visitorName = document.getElementById("visitorName");

if (visitorName) {
    visitorName.innerText = name;
}


// Items

let items = [

    {
        name: "Classic Oil Painting",
        cat: "Fine Art",
        price: "$800",
        date: "15 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmxB4QhBhNrdTjgjRGC7src34OBGjRa7qvDArqtGRLQ&s=10",
        desc: "A beautiful classic oil painting for art lovers."
    },

    {
        name: "Modern Canvas Art",
        cat: "Fine Art",
        price: "$650",
        date: "15 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzT-zfTJ0JMsFbxVffD5W7LwaVcd2AVYpVqnCjJIoyA&s=10",
        desc: "Modern canvas artwork with attractive colors."
    },

    {
        name: "Abstract Painting",
        cat: "Fine Art",
        price: "$900",
        date: "15 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqg6G8rkMzyMxA4Kqo17PkTO-v0uUlVrBjQKfxAfc8A&s=10",
        desc: "Beautiful abstract artwork."
    },

    {
        name: "Portrait Artwork",
        cat: "Fine Art",
        price: "$750",
        date: "15 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EtvH37PP4oO1eX3w-e4OiWlOw5LZRTwyXWAmXw7jpQ&s=10",
        desc: "Classic portrait artwork."
    },

    {
        name: "Colorful Artwork",
        cat: "Fine Art",
        price: "$600",
        date: "15 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIP33ZkurPH9O6leoQXqc1537SrTG7CAThDd_eaKNBg&s=10",
        desc: "Bright and colorful artwork."
    },

    {
        name: "Landscape Painting",
        cat: "Fine Art",
        price: "$700",
        date: "15 October 2026",
        img: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful landscape painting."
    },

    {
        name: "Antique Vase",
        cat: "Antiques",
        price: "$700",
        date: "20 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CB-dKbTZ5UGyeGf59Cqr7YFom3FxHXuih8-lcl0OeQ&s=10",
        desc: "Elegant antique vase."
    },

    {
        name: "Vintage Clock",
        cat: "Antiques",
        price: "$850",
        date: "20 October 2026",
        img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful vintage clock."
    },

    {
        name: "Old Ceramic Pot",
        cat: "Antiques",
        price: "$550",
        date: "20 October 2026",
        img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
        desc: "Traditional ceramic antique."
    },

    {
        name: "Antique Decoration",
        cat: "Antiques",
        price: "$650",
        date: "20 October 2026",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        desc: "Decorative antique item."
    },

    {
        name: "Vintage Collection",
        cat: "Antiques",
        price: "$900",
        date: "20 October 2026",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        desc: "Special vintage collection."
    },

    {
        name: "Classic Wooden Chair",
        cat: "Furniture",
        price: "$1,200",
        date: "25 October 2026",
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
        desc: "Classic wooden chair."
    },

    {
        name: "Luxury Sofa",
        cat: "Furniture",
        price: "$1,500",
        date: "25 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHVGDEdwzTAZimREDXf-f0e17_QI_eI48phVXHtOHaw&s=10",
        desc: "Comfortable luxury sofa."
    },

    {
        name: "Classic Table",
        cat: "Furniture",
        price: "$1,100",
        date: "25 October 2026",
        img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
        desc: "Elegant classic table."
    },

    {
        name: "Wooden Cabinet",
        cat: "Furniture",
        price: "$1,350",
        date: "25 October 2026",
        img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful wooden cabinet."
    },

    {
        name: "Vintage Armchair",
        cat: "Furniture",
        price: "$950",
        date: "25 October 2026",
        img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
        desc: "Comfortable vintage armchair."
    },

    {
        name: "Rare Collectible",
        cat: "Collectibles",
        price: "$500",
        date: "28 October 2026",
        img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
        desc: "Rare collectible item."
    },

    {
        name: "Decorative Piece",
        cat: "Collectibles",
        price: "$450",
        date: "28 October 2026",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonr1Rgogb9Rdu22U8cx1OdN7t4nOb082jvfjRBcFmSw&s=10",
        desc: "Beautiful decorative collectible."
    },

    {
        name: "Rare Artwork",
        cat: "Collectibles",
        price: "$850",
        date: "28 October 2026",
        img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
        desc: "Rare artwork for collectors."
    },

    {
        name: "Gem Collection",
        cat: "Collectibles",
        price: "$1,000",
        date: "28 October 2026",
        img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful collection of gems."
    },

    {
        name: "Vintage Treasure",
        cat: "Collectibles",
        price: "$750",
        date: "28 October 2026",
        img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
        desc: "Special vintage treasure."
    }

];


// Show categories

function showCategories() {

    let box = document.getElementById("categoryList");

    box.innerHTML = "";

    let list = items.slice(0, 8);

    list.forEach((item, index) => {

        box.innerHTML += `
        
        <div class="col-md-3">
            <div class="cat-card" onclick="showItem(${index})">

                <img src="${item.img}" alt="${item.name}">

                <div>
                    <i class="fa-solid fa-gavel"></i>

                    <h3>${item.cat}</h3>

                    <p>${item.name}</p>

                    <b>${item.price}</b>
                </div>

            </div>
        </div>
        
        `;
    });
}


// Show all categories

function showAllCategories() {

    let box = document.getElementById("categoryList");

    box.innerHTML = "";

    items.forEach((item, index) => {

        box.innerHTML += `
        
        <div class="col-md-3">
            <div class="cat-card" onclick="showItem(${index})">

                <img src="${item.img}" alt="${item.name}">

                <div>
                    <i class="fa-solid fa-gavel"></i>

                    <h3>${item.cat}</h3>

                    <p>${item.name}</p>

                    <b>${item.price}</b>
                </div>

            </div>
        </div>
        
        `;
    });
}


// Show auctions

function showAuctions() {

    let box = document.getElementById("auctionList");

    box.innerHTML = "";

    items.slice(0, 6).forEach((item, index) => {

        box.innerHTML += `
        
        <div class="col-md-4">
            <div class="auction-card">

                <img src="${item.img}" alt="${item.name}">

                <div class="card-text">

                    <h3>${item.name}</h3>

                    <p>${item.cat}</p>

                    <h4>${item.price}</h4>

                    <button class="gold-btn"
                        onclick="showItem(${index})">
                        View Details
                    </button>

                </div>

            </div>
        </div>
        
        `;
    });
}


// Item details

function showItem(index) {

    let item = items[index];

    document.getElementById("itemImg").src = item.img;
    document.getElementById("itemName").innerText = item.name;
    document.getElementById("itemCat").innerText = item.cat;
    document.getElementById("itemDesc").innerText = item.desc;
    document.getElementById("itemPrice").innerText = item.price;
    document.getElementById("itemDate").innerText = item.date;

    let modal = new bootstrap.Modal(
        document.getElementById("categoryModal")
    );

    modal.show();
}


// Open bid form

function openForm() {

    let modal = new bootstrap.Modal(
        document.getElementById("bidForm")
    );

    modal.show();
}


// Submit bid


function submitBid(event) {

    event.preventDefault();

    let name = document.getElementById("bidName").value;
    let amount = document.getElementById("bidAmount").value;

    alert("Thank you " + name + "! Your bid of $" + amount + " has been submitted.");

    event.target.reset();

    let modal = bootstrap.Modal.getInstance(
        document.getElementById("bidForm")
    );

    modal.hide();
}


// Search

function searchItems() {

    let text = document.getElementById("searchInput").value.toLowerCase();

    let found = items.find(item =>
        item.name.toLowerCase().includes(text) ||
        item.cat.toLowerCase().includes(text)
    );

    if (found) {

        let index = items.indexOf(found);

        showItem(index);

    } else {

        alert("Item not found.");

    }
}


// Gallery

function openGallery(src) {

    document.getElementById("bigImg").src = src;

    let modal = new bootstrap.Modal(
        document.getElementById("galleryModal")
    );

    modal.show();
}


// Time

function showTime() {

    let now = new Date();

    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    document.getElementById("dateTime").innerText =
        "Today: " + date + " | Time: " + time + " | Pakistan";

}

setInterval(showTime, 1000);

showTime();


// Feedback
let feedback = document.getElementById("feedbackForm");

if (feedback) {

    feedback.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert("Thank you for your feedback!");

            this.reset();

        }
    );

}



// Start

showCategories();
showAuctions();
/* CATEGORY PAGE */


/* 3 extra items */


let extraItems = [

    {
        name: "Antique Treasure",
        cat: "Antiques",
        price: "$780",
        date: "20 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
        desc: "A beautiful antique treasure with a classic design."
    },

    {
        name: "Luxury Cabinet",
        cat: "Furniture",
        price: "$1,400",
        date: "25 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80",
        desc: "A beautiful luxury cabinet for a classic home."
    },

    {
        name: "Luxury Collectible",
        cat: "Collectibles",
        price: "$950",
        date: "28 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
        desc: "A special collectible item for collectors."
    }

];


/* Category items */

let catItems = [];

if (typeof items !== "undefined") {

    catItems = items.map(function(item) {

        return {
            name: item.name,
            cat: item.cat,
            price: item.price,
            date: item.date,
            condition: "Excellent",
            img: item.img,
            desc: item.desc || "A beautiful item available on BidSpirit."
        };

    });

}


/* Add extra items */

catItems = catItems.concat(extraItems);


/* Make exactly 24 cards */

catItems = catItems.slice(0, 24);


/* Make category cards */

function makeCat(list, id) {

    let box = document.getElementById(id);

    if (!box) {
        return;
    }

    box.innerHTML = "";

    list.forEach(function(item, index) {

        box.innerHTML += `

        <div class="col-lg-4 col-md-6">

            <div class="cat-card"
                onclick="showCatDetails(${index})">

                <img src="${item.img}" alt="${item.name}">

                <div class="cat-card-text">

                    <h3>${item.name}</h3>

                    <p>${item.cat}</p>

                    <h4>${item.price}</h4>

                    <button class="view-btn"
                        onclick="event.stopPropagation(); showCatDetails(${index})">

                        View Details

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}


/* Show details */

function showCatDetails(index) {

    let item = catItems[index];

    document.getElementById("catImage").src = item.img;

    document.getElementById("catName").innerText =
        item.name;

    document.getElementById("catType").innerText =
        item.cat;

    document.getElementById("catDesc").innerText =
        item.desc;

    document.getElementById("catPrice").innerText =
        item.price;

    document.getElementById("catDate").innerText =
        item.date;

    document.getElementById("catCondition").innerText =
        item.condition;


    let modal = new bootstrap.Modal(
        document.getElementById("catModal")
    );

    modal.show();

}


/* Bid Now */

function openCategoryBid() {

    let details = bootstrap.Modal.getInstance(
        document.getElementById("catModal")
    );

    if (details) {
        details.hide();
    }


    setTimeout(function() {

        let form = new bootstrap.Modal(
            document.getElementById("catBid")
        );

        form.show();

    }, 400);

}


/* Submit bid */

let bidForm = document.getElementById("categoryBidForm");

if (bidForm) {

    bidForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            let form = bootstrap.Modal.getInstance(
                document.getElementById("catBid")
            );

            if (form) {
                form.hide();
            }


            this.reset();


            setTimeout(function() {

                let thank = new bootstrap.Modal(
                    document.getElementById("thankModal")
                );

                thank.show();

            }, 400);

        }
    );

}


/* Category page visitor count */

let categoryCount =
    document.getElementById("categoryCount");

if (categoryCount) {

    let visits = localStorage.getItem("visits");

    if (!visits) {
        visits = 1;
    }

    categoryCount.innerText = visits;

}


/* Category page time */

function categoryClock() {

    let clock =
        document.getElementById("categoryTime");

    if (!clock) {
        return;
    }

    let now = new Date();

    clock.innerText =
        "Date: " +
        now.toLocaleDateString() +
        " | Time: " +
        now.toLocaleTimeString() +
        " | Pakistan";

}

categoryClock();

setInterval(categoryClock, 1000);


/* Show 24 cards */

makeCat(
    catItems.slice(0, 6),
    "fineArt"
);

makeCat(
    catItems.slice(6, 12),
    "antiques"
);

makeCat(
    catItems.slice(12, 18),
    "furniture"
);

makeCat(
    catItems.slice(18, 24),
    "collectibles"
);