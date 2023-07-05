const numbers = document.querySelectorAll(".rating-number");
const send = document.querySelector(".button");
const ratingCard = document.querySelector(".rating-state");
const responseCard = document.querySelector(".thank-you-state");
const rated = document.querySelector(".rated-paragraph");

numbers.forEach(number => {
    number.addEventListener("click", function () {
        const Active = document.querySelector(".rating-number.active");
        if (Active) {
            Active.classList.remove("active");
        }
        number.classList.add("active");
    });
});

send.addEventListener("click", function () {
     ratingCard.style.display = "none";
     responseCard.style.display = "block";
     const selectedValue = document.querySelector(".rating-number.active").textContent;
     rated.textContent = "You selected " + selectedValue + " out of 5.";
 });

