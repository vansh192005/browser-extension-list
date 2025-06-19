let themeBtn = document.querySelector('#themeBtn');
let body = document.querySelector("body");
const listItems = document.querySelectorAll(".list-items");
let filterBtns = document.querySelectorAll(".extensionBtns button");
let allBtn = document.getElementById("allBtn");
let removeBtn = document.querySelectorAll(".buttons-part button");

// Theme button dark and light theme toggle
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // Optional: update icon too
    if (document.body.classList.contains("light-theme")) {
        themeBtn.src = "assets/images/icon-moon.svg";
    } else {
        themeBtn.src = "assets/images/icon-sun.svg";
        themeBtn.style.filter = "invert(0)";
    }
});

// Active button toggle
document.getElementById("activeBtn").addEventListener("click", () => {
    listItems.forEach(item => {
        item.classList.toggle('hidden', item.dataset.status !== 'active');
    })
});

// Inactive button toggle 
document.getElementById("inactiveBtn").addEventListener("click", () => {
    listItems.forEach(item => {
        item.classList.toggle('hidden', item.dataset.status !== 'inactive');
    })
});

// All, Inactive, and Active ki styling change krna 
filterBtns.forEach(button => {
    button.addEventListener("click", () => {
        filterBtns.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
    })
})

// Displaying all list-items when all button is clicked
allBtn.addEventListener("click", () => {
    listItems.forEach(card => {
        card.classList.remove('hidden')
    })
})

// Removing list-item when removeBtn is clicked
removeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const list_item = btn.closest('.list-items');
        if (list_item) {
            list_item.remove();
        }
    });
});