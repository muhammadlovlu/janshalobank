

//login button event handler code start
document.getElementById("login-access").addEventListener('click', function () {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('login-access').style.fontFamily = 'teko';
    document.getElementById('transection-area').style.display = 'block';
    document.getElementById('amount-input').style.display = 'flex';
})

//Deposit button event handler
document.getElementById('addDeposit').addEventListener('click', function () {
    const depositAmount = document.getElementById('depositAmount').value; // collect the value
    const depositNumber = parseFloat(depositAmount);                      // parseFloat the amount


    document.getElementById('depositAmount').value = "";
    
    updateSpanText("currentBalance", depositNumber);
    updateSpanText('currentDeposit', depositNumber);
})

//Withdraw button event handler
document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);
  
})


// all functions are here
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}