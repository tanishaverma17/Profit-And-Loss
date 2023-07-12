var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#submit-btn");
var output = document.querySelector("#output-box");

function CalculateProfitAndLoss(initial, quantity,current){
    if(initial >current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        output.innerText = "The loss is" + loss + "and the lossPercentage is" + lossPercentage +"%";
    }
    else if(initial < current){
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        output.innerText = "The profit is" + profit +"and the profitPercentage is" + profitPercentage +"%";
    }
    else{
        output.innerText = "No Pain No Gain, No Gain No Pain";
    }
}

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    CalculateProfitAndLoss(ip, qty, curr);
}

button.addEventListener("click", submitHandler);




