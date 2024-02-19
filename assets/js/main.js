


// -------------------- start now -------------------------
// const allSit = document.getElementsByClassName('sit-btn');
// const ticketPrice = document.querySelector('.ticket-price');
// const priceDiv = document.querySelector('.total-price');
// const sitContainer = document.getElementById('sit-container');
// let count = 0;
// let totalPrice = 0;
// const selectedSeat = new Set()



// let seatLeft = allSit.length;
// document.querySelector('.have-seat').innerText = seatLeft;



// for (const sit of allSit) {
//     sit.addEventListener('click', function(e) {

//         const sitNumber = e.target.innerText;
//         if(selectedSeat.has(sitNumber)){
//             alert('This seat is already selected.');
//             return;
//         }

//         count = count + 1;
//         document.getElementById('sit-count').innerText = count;

        
//         const seatItem = document.createElement('div');
//         seatItem.classList.add('seat-item');


//         const seatContent = document.createElement('p');
//         const seatType = document.createElement('p');
//         const seatPrice = document.createElement('p');
//         seatContent.innerText = sitNumber;
//         seatType.innerText = 'Ecomony';
//         const price = parseInt(ticketPrice.innerText);
//         seatPrice.innerText = price;

//         totalPrice += price;

//         priceDiv.innerText = totalPrice;

//         seatItem.appendChild(seatContent);
//         seatItem.appendChild(seatType);
//         seatItem.appendChild(seatPrice);
//         sitContainer.appendChild(seatItem);

//         const grandTotal = document.querySelector('.total-grand');
//         grandTotal.innerText = totalPrice;

        

//         e.target.classList.add('active');

//         // sit.removeEventListener('click', clickHandler);
        
        


//         seatLeft -= 1;
//         document.querySelector('.have-seat').innerText = seatLeft;
//     });
// }



// const placeName = e.target.parentNode.childNodes[1].innerText;



// const allSit = document.getElementsByClassName('sit-btn');
// const ticketPrice = document.querySelector('.ticket-price');
// const priceDiv = document.querySelector('.total-price');
// const sitContainer = document.getElementById('sit-container');
// let count = 0;
// let totalPrice = 0;
// const selectedSeat = new Set();

// let seatLeft = allSit.length;
// document.querySelector('.have-seat').innerText = seatLeft;

// for (const sit of allSit) {
//     sit.addEventListener('click', function(e) {
//         if (e.target.classList.contains('active')) {
//             alert('This seat is already selected.');
//             return;
//         }

//         const sitNumber = e.target.innerText;
//         count = count + 1;
//         document.getElementById('sit-count').innerText = count;

//         const seatItem = document.createElement('div');
//         seatItem.classList.add('seat-item');

//         const seatContent = document.createElement('p');
//         const seatType = document.createElement('p');
//         const seatPrice = document.createElement('p');
//         seatContent.innerText = sitNumber;
//         seatType.innerText = 'Economy';
//         const price = parseInt(ticketPrice.innerText);
//         seatPrice.innerText = price;

//         totalPrice += price;
//         priceDiv.innerText = totalPrice;

//         seatItem.appendChild(seatContent);
//         seatItem.appendChild(seatType);
//         seatItem.appendChild(seatPrice);
//         sitContainer.appendChild(seatItem);

//         const grandTotal = document.querySelector('.total-grand');
//         grandTotal.innerText = totalPrice;

//         e.target.classList.add('active');
//         selectedSeat.add(sitNumber);

//         seatLeft -= 1;
//         document.querySelector('.have-seat').innerText = seatLeft;
//     });
// }


const allSit = document.getElementsByClassName('sit-btn');
const ticketPrice = document.querySelector('.ticket-price');
const priceDiv = document.querySelector('.total-price');
const sitContainer = document.getElementById('sit-container');
let count = 0;
let totalPrice = 0;
const selectedSeats = new Set();

let seatLeft = allSit.length;
document.querySelector('.have-seat').innerText = seatLeft;

for (const sit of allSit) {
    sit.addEventListener('click', function(e) {
        const sitNumber = e.target.innerText;
        
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

        // const fifteenOffer = grandTotal - grandTotal * 0.15;
        // const twentyOffer = grandTotal - grandTotal * 0.2;



        e.target.classList.add('active');
        selectedSeats.add(sitNumber);

        seatLeft -= 1;
        document.querySelector('.have-seat').innerText = seatLeft;
    });
}



// success popup
const nextButton = document.querySelector('.next-button');
const successPopup = document.querySelector('.success-popup');
const exitBtn = document.querySelector('.exit');


nextButton.addEventListener('click', function(){
    successPopup.classList.add('active');
});

exitBtn.addEventListener('click', function(){
    successPopup.classList.remove('active');
});