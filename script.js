// Get elements
const link1 = document.getElementById("link1");
const list = document.getElementById("list");
const x = document.getElementById("x");
const link0 = document.getElementById("link0");
const search = document.getElementById("search");
const x2 = document.getElementById("x2");
const theGOAT = document.getElementById("theGOAT");
const GOAT = document.getElementById("GOAT");
const x1 = document.getElementById("x1");
const searchInput = document.querySelector(".search input");
const searchResults = document.querySelectorAll(".content-box, .content-box-mcu");
const searchbutton = document.getElementsByClassName(".search-button")
const boxes = document.getElementById("content-card")
const noShow = document.getElementById("noShow")
const card = document.getElementsByClassName("article")

// Create the search button
const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchButton.classList.add("search-button");

// Append the search button to the search div
search.appendChild(searchButton);

// Event listeners
x.addEventListener("click", closeMenu);
link1.addEventListener("click", showMenu);
link0.addEventListener("click", showSearch);
x2.addEventListener("click", closeGOAT);
theGOAT.addEventListener("click", showGOAT);
x1.addEventListener("click", closeSearch);
searchButton.addEventListener("click", filterContent);
boxes.addEventListener("click", content)
card.addEventListener("click", content)

function content() {
    noShow.style.display = "flex";
}

function showGOAT() {
    GOAT.style.visibility = "visible";
    GOAT.style.opacity = "1";
    GOAT.style.transition = "opacity 0.5s ease-in-out";
}

function closeGOAT() {
    GOAT.style.opacity = "0";
    setTimeout(() => {
        GOAT.style.visibility = "hidden";
    }, 500);
}

function showMenu() {
    list.style.display = "block";
    list.style.opacity = "1";
    list.style.transition = "opacity 0.5s ease-in-out";
}

function closeMenu() {
    list.style.opacity = "0";
    setTimeout(() => {
        list.style.display = "none";
    }, 500);
}

function showSearch() {
    search.style.display = "flex";
    search.style.opacity = "1";
    search.style.transition = "opacity 0.5s ease-in-out";
}

function closeSearch() {
    search.style.opacity = "0";
    setTimeout(() => {
        search.style.display = "none";
    }, 500);
}

function filterContent() {
    const query = searchInput.value.toLowerCase();
    let found = false;

    searchResults.forEach(result => {
        const text = result.querySelector("p").textContent.toLowerCase();
        if (text.includes(query)) {
            result.style.display = "flex";
            search.style.display = "none"
            found = true;
        } else {
            result.style.display = "none";
        }
    });

    if (!found) {
        alert("No results found.");
    }
}

function jobX() {
    noShow.style.display = "none"
    card.style.cursor = "pointer"
}