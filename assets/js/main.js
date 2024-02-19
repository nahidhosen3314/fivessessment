
const allSit = document.getElementsByClassName('sit-btn');
const ticketPrice = document.querySelector('.ticket-price');
const priceDiv = document.querySelector('.total-price');
const sitContainer = document.getElementById('sit-container');
const nextButton = document.querySelector('.next-button');
const successPopup = document.querySelector('.success-popup');
const exitBtn = document.querySelector('.exit');

let count = 0;
let totalPrice = 0;
const selectedSeats = new Set();

let seatLeft = allSit.length;
document.querySelector('.have-seat').innerText = seatLeft;

for (const sit of allSit) {
    sit.addEventListener('click', function(e) {
        const sitNumber = e.target.innerText;

        // enable next button
        nextButton.removeAttribute("disabled");
        
        // Check if the maximum number of seats has been reached
        if (selectedSeats.size >= 4) {
            alert('You have already selected the maximum of 4 seats.');
            return;
        }
        
        // Check if the seat is already selected
        if (selectedSeats.has(sitNumber)) {
            alert('This seat is already selected.');
            return;
        }

        count = count + 1;
        document.getElementById('sit-count').innerText = count;

        const seatItem = document.createElement('div');
        seatItem.classList.add('seat-item');

        const seatContent = document.createElement('p');
        const seatType = document.createElement('p');
        const seatPrice = document.createElement('p');
        seatContent.innerText = sitNumber;
        seatType.innerText = 'Economy';
        const price = parseInt(ticketPrice.innerText);
        seatPrice.innerText = price;

        totalPrice += price;
        priceDiv.innerText = totalPrice;

        seatItem.appendChild(seatContent);
        seatItem.appendChild(seatType);
        seatItem.appendChild(seatPrice);
        sitContainer.appendChild(seatItem);

        const grandTotal = document.querySelector('.total-grand');
        grandTotal.innerText = totalPrice;

        // Discount

        function applyCoupon(couponCode) {
            let discountedPrice = totalPrice;
            if (couponCode === 'NEW15') {
                discountedPrice = totalPrice - totalPrice * 0.15;
            } else if (couponCode === 'Couple 20') {
                discountedPrice = totalPrice - totalPrice * 0.2;
            }
            return discountedPrice;
        }

        
        const couponInput = document.getElementById('coupon-input');
        const applyButton = document.querySelector('.cupon-btn');

        applyButton.addEventListener('click', function() {
            const couponCode = couponInput.value;
            let finalPrice;

            
            if (couponCode === 'NEW15' || couponCode === 'Couple 20') {
                finalPrice = applyCoupon(couponCode);
                grandTotal.innerText = finalPrice;

                 // Hide the coupon input field
                couponInput.style.display = 'none';
                applyButton.style.display = 'none';



            } else {
                alert('Invalid coupon code');
            }
        });


        e.target.classList.add('active');
        selectedSeats.add(sitNumber);

        seatLeft -= 1;
        document.querySelector('.have-seat').innerText = seatLeft;
    });
}


// success popup
nextButton.addEventListener('click', function(){
    successPopup.classList.add('active');
});

exitBtn.addEventListener('click', function(){
    successPopup.classList.remove('active');
});