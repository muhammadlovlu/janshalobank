

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
        
            const currentDeposit = document.getElementById('currentDeposit').innerText;
            const currentDepositNumber = parseFloat(currentDeposit);
            const totalDeposit =  depositNumber + currentDepositNumber;
            document.getElementById('currentDeposit').innerText = totalDeposit;

        })
