// AUCTION ITEMS

let auctions = [

    {
        name: "Classic Oil Painting",
        cat: "Fine Art",
        price: "$800",
        date: "15 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=80",
        desc: "A beautiful classic oil painting for art lovers."
    },

    {
        name: "Royal Portrait",
        cat: "Fine Art",
        price: "$950",
        date: "15 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
        desc: "A beautiful portrait artwork with a classic style."
    },

    {
        name: "Abstract Canvas",
        cat: "Fine Art",
        price: "$700",
        date: "16 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",
        desc: "Modern abstract canvas artwork."
    },

    {
        name: "Landscape Artwork",
        cat: "Fine Art",
        price: "$850",
        date: "16 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful landscape artwork."
    },

    {
        name: "Historical Painting",
        cat: "Fine Art",
        price: "$1,100",
        date: "17 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        desc: "A special historical style painting."
    },

    {
        name: "Modern Art Piece",
        cat: "Fine Art",
        price: "$750",
        date: "17 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80",
        desc: "A modern and attractive art piece."
    },


    {
        name: "Antique Vase",
        cat: "Antiques",
        price: "$700",
        date: "18 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
        desc: "Elegant antique vase."
    },

    {
        name: "Vintage Clock",
        cat: "Antiques",
        price: "$850",
        date: "18 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful vintage clock."
    },

    {
        name: "Old Ceramic Pot",
        cat: "Antiques",
        price: "$550",
        date: "19 October 2026",
        condition: "Good",
        img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
        desc: "Traditional ceramic antique."
    },

    {
        name: "Antique Mirror",
        cat: "Antiques",
        price: "$900",
        date: "19 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful antique decorative mirror."
    },

    {
        name: "Bronze Statue",
        cat: "Antiques",
        price: "$1,200",
        date: "20 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
        desc: "Classic bronze statue for collectors."
    },

    {
        name: "Vintage Decoration",
        cat: "Antiques",
        price: "$650",
        date: "20 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        desc: "A beautiful vintage decoration."
    },


    {
        name: "Wooden Chair",
        cat: "Furniture",
        price: "$1,200",
        date: "21 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
        desc: "Classic wooden chair."
    },

    {
        name: "Luxury Sofa",
        cat: "Furniture",
        price: "$1,500",
        date: "21 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        desc: "Comfortable luxury sofa."
    },

    {
        name: "Classic Table",
        cat: "Furniture",
        price: "$1,100",
        date: "22 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
        desc: "Elegant classic table."
    },

    {
        name: "Royal Cabinet",
        cat: "Furniture",
        price: "$1,350",
        date: "22 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful royal style cabinet."
    },

    {
        name: "Vintage Armchair",
        cat: "Furniture",
        price: "$950",
        date: "23 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
        desc: "Comfortable vintage armchair."
    },

    {
        name: "Antique Desk",
        cat: "Furniture",
        price: "$1,400",
        date: "23 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80",
        desc: "Classic antique desk."
    },


    {
        name: "Rare Coin",
        cat: "Collectibles",
        price: "$500",
        date: "24 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
        desc: "A rare collectible coin."
    },

    {
        name: "Gem Collection",
        cat: "Collectibles",
        price: "$1,000",
        date: "24 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
        desc: "Beautiful collection of gems."
    },

    {
        name: "Vintage Camera",
        cat: "Collectibles",
        price: "$650",
        date: "25 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        desc: "Classic vintage camera."
    },

    {
        name: "Collectible Book",
        cat: "Collectibles",
        price: "$450",
        date: "25 October 2026",
        condition: "Good",
        img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        desc: "A special collectible book."
    },

    {
        name: "Rare Sculpture",
        cat: "Collectibles",
        price: "$850",
        date: "26 October 2026",
        condition: "Excellent",
        img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
        desc: "Rare decorative sculpture."
    },

    {
        name: "Historic Collectible",
        cat: "Collectibles",
        price: "$900",
        date: "26 October 2026",
        condition: "Very Good",
        img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
        desc: "A special historic collectible."
    }

];


// SHOW CARDS

function showAuctions() {

    let box = document.getElementById("auctionCards");

    box.innerHTML = "";

    auctions.forEach(function(item, index) {

        box.innerHTML += `

        <div class="col-lg-4 col-md-6">

            <div class="auction-card"
                onclick="showAuction(${index})">

                <img src="${item.img}" alt="${item.name}">

                <div class="auction-text">

                    <h3>${item.name}</h3>

                    <p>${item.cat}</p>

                    <h4>${item.price}</h4>

                    <button class="auc-btn"
                        onclick="event.stopPropagation(); showAuction(${index})">

                        View Details

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}


// DETAILS

function showAuction(index) {

    let item = auctions[index];

    document.getElementById("aucImage").src = item.img;

    document.getElementById("aucName").innerText = item.name;

    document.getElementById("aucType").innerText = item.cat;

    document.getElementById("aucDesc").innerText = item.desc;

    document.getElementById("aucPrice").innerText = item.price;

    document.getElementById("aucDate").innerText = item.date;

    document.getElementById("aucCondition").innerText =
        item.condition;

    let modal = new bootstrap.Modal(
        document.getElementById("auctionModal")
    );

    modal.show();

}


// BID FORM

function openAuctionBid() {

    let modal = bootstrap.Modal.getInstance(
        document.getElementById("auctionModal")
    );

    if (modal) {
        modal.hide();
    }

    setTimeout(function() {

        let bid = new bootstrap.Modal(
            document.getElementById("auctionBid")
        );

        bid.show();

    }, 400);
}


// SUBMIT BID

let bidForm = document.getElementById("auctionBidForm");

if (bidForm) {

    bidForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let modal = bootstrap.Modal.getInstance(
            document.getElementById("auctionBid")
        );

        if (modal) {
            modal.hide();
        }

        this.reset();

        setTimeout(function() {

            let thank = new bootstrap.Modal(
                document.getElementById("auctionThanks")
            );

            thank.show();

        }, 400);

    });

}


// VISITOR COUNT

let count = document.getElementById("auctionCount");

if (count) {

    let visits = localStorage.getItem("visits");

    if (!visits) {
        visits = 1;
    }

    count.innerText = visits;

}


// TIME

function auctionClock() {

    let clock = document.getElementById("auctionTime");

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

auctionClock();

setInterval(auctionClock, 1000);


// START

showAuctions();