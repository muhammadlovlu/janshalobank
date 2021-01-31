

//login button event handler code start
document.getElementById('login-access').addEventListener('click', function (){
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transection-area').style.display ='block';
    document.getElementById('amount-input').style.display = 'flex';
})


//Deposit button event handler
document.getElementById('addDeposit').addEventListener('click', function(){
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
   
    
    document.getElementById('depositAmount').value = "";
})



 

//Withdraw button event handler

document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1* withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
})



function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const Number = parseFloat(Amount);
    return Number;
}


function updateSpanText (id, depositNumber){
    const current = document.getElementById(id).innerText;
const currentNumber  = parseFloat(current);
const total = currentNumber + depositNumber;
document.getElementById(id).innerText = total;
}