// Gallery items

let galleryItems = [

    {
        name: "Classic Oil Painting",
        type: "Fine Art",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Royal Portrait",
        type: "Fine Art",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Abstract Canvas",
        type: "Fine Art",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Landscape Artwork",
        type: "Fine Art",
        image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Modern Art",
        type: "Fine Art",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Colorful Artwork",
        type: "Fine Art",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80"
    },


    {
        name: "Antique Vase",
        type: "Antiques",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Vintage Clock",
        type: "Antiques",
        image: "https://images.unsplash.com/photo-1509048191080-d2f9c6e0f0b1?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Old Ceramic",
        type: "Antiques",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Antique Mirror",
        type: "Antiques",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Bronze Statue",
        type: "Antiques",
        image: "https://images.unsplash.com/photo-1597586117271-9b7c6c7f2f6b?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Vintage Decoration",
        type: "Antiques",
        image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=900&q=80"
    },


    {
        name: "Classic Wooden Chair",
        type: "Furniture",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Luxury Sofa",
        type: "Furniture",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Classic Table",
        type: "Furniture",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Royal Cabinet",
        type: "Furniture",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Vintage Armchair",
        type: "Furniture",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Antique Desk",
        type: "Furniture",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=80"
    },


    {
        name: "Rare Coin",
        type: "Collectibles",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Gem Collection",
        type: "Collectibles",
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Vintage Camera",
        type: "Collectibles",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Collectible Book",
        type: "Collectibles",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Rare Sculpture",
        type: "Collectibles",
        image: "https://images.unsplash.com/photo-1544413164-5f1b7e5e5b8b?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Historic Collectible",
        type: "Collectibles",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80"
    }

];


// Show gallery cards

function showGallery() {

    let box = document.getElementById("galleryList");

    box.innerHTML = "";

    galleryItems.forEach(function(item, index) {

        box.innerHTML += `

            <div class="col-lg-4 col-md-6">

                <div class="gallery-card">

                    <img src="${item.image}"
                         alt="${item.name}"
                         onclick="openGallery(${index})">

                    <div class="gallery-text">

                        <h3>${item.name}</h3>

                        <p>${item.type}</p>

                    </div>

                </div>

            </div>

        `;

    });

}


// Open image

function openGallery(index) {

    let item = galleryItems[index];

    document.getElementById("galleryImage").src = item.image;

    document.getElementById("galleryTitle").innerText = item.name;

    document.getElementById("galleryDescription").innerText =
        "Beautiful " + item.type + " from BidSpirit Gallery.";

    let modal = new bootstrap.Modal(
        document.getElementById("galleryModal")
    );

    modal.show();

}


// Visitor count

let visits = localStorage.getItem("galleryVisits");

if (!visits) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

localStorage.setItem("galleryVisits", visits);

document.getElementById("galleryVisitors").innerText = visits;


// Date and time

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

showGallery();