

//login button event handler code start
const loginButton = document.getElementById("login-access");
loginButton.addEventListener('click', function () {
    document.getElementById('login-area').style.display = 'none';
    loginButton.style.fontFamily = 'teko';
    document.getElementById('transection-area').style.display = 'block';
    document.getElementById('amount-input').style.display = 'flex';
})

//Deposit button event handler
document.getElementById('addDeposit').addEventListener('click', function () {
    const depositAmount = document.getElementById('depositAmount').value; // collect the value
    const depositNumber = parseFloat(depositAmount);                      // parseFloat the amount

    updateSpanText("currentBalance", depositNumber);
    updateSpanText('currentDeposit', depositNumber);

    document.getElementById('depositAmount').value = "";

})

//Withdraw button event handler
document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber= parseFloat(withdrawAmount);
    
})

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}