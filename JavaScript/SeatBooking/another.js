var elements = document.querySelectorAll('.seat-conatiner .seat');
var totalAmountElement = document.getElementById("amount");

let first = 0;
let second = 0;
let third = 0;

elements.forEach(function (element, index) {
    element.addEventListener('click', function () {
        element.classList.toggle("Selected");

        let selectSeatLower = document.querySelectorAll(".seat-conatiner .lower .row .Selected");
        let selectSeatMiddle = document.querySelectorAll(".seat-conatiner .middle .row .Selected");
        let selectSeatHigher = document.querySelectorAll(".seat-conatiner .higher .row .Selected");
          
        let selectSeat = selectSeatLower.length;
        let selectSeat1 = selectSeatMiddle.length;
        let selectSeat2 = selectSeatHigher.length;

        if (index <= 31) {
            first = selectSeat * 100;
        } else if (index > 31 && index <= 69) {
            second = selectSeat1 * 200;
        } else if (index > 69 && index <= 111) {
            third = selectSeat2 * 300;
        }


        let totalAmount = first + second + third;
        totalAmountElement.textContent = totalAmount;

            
         const showTotalAmount=document.getElementById("amount");
         showTotalAmount.innerText=totalAmount;

         const firstrowtotal=document.getElementById("firstrow")
         const secondrowtotal=document.getElementById("secondrow")
         const Thirdrowtotal=document.getElementById("thirdrow")

         firstrowtotal.innerText=selectSeat;
         secondrowtotal.innerText=selectSeat1;
        Thirdrowtotal.innerText=selectSeat2;

         

    });
});

