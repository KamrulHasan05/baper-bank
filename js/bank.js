// deposit system handle
document.getElementById('depositBtn').addEventListener('click', function () {
    // get the deposit amount
    const inputDeposit = document.getElementById('depositInput');
    const newDepositAmountText = inputDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // get Deposite Box
    const totalDeposit = document.getElementById('DepositTotal');
    const oldDepositAmountText = totalDeposit.innerText;
    const oldDepositAmount = parseFloat(oldDepositAmountText);

    // updating Deposite Box
    const newDepositTotal = newDepositAmount + oldDepositAmount;
    totalDeposit.innerText = newDepositTotal;

    // get Balance
    const totalBalance = document.getElementById('balanceTotal');
    const totalBalanceText = totalBalance.innerText;
    const oldTotalBalance = parseFloat(totalBalanceText)

    // update total balance
    const newBalanceAmount = newDepositAmount + oldTotalBalance;
    totalBalance.innerText = newBalanceAmount;


    // toclear input
    inputDeposit.value = '';
})


// withdraw system handle
document.getElementById('withdrawBtn').addEventListener('click', function () {
    // get withdraw input
    const inputWithdraw = document.getElementById('withdrawInput');
    const inputWithdrawText = inputWithdraw.value;
    const newInputWithdraw = parseFloat(inputWithdrawText);

    // get withdraw box
    const totalWithdraw = document.getElementById('withdrawTotal');
    const totalWithdrawText = totalWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(totalWithdrawText);

    // update withdraw box
    const newTotalWithdraw = previousTotalWithdraw + newInputWithdraw;
    totalWithdraw.innerText = newTotalWithdraw;

    // get balance box 
    const totalBalance = document.getElementById('balanceTotal');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    // update total balance
    const newTotalBalance = previousTotalBalance - newInputWithdraw;
    totalBalance.innerText = newTotalBalance;


    // clear input 
    inputWithdraw.value = '';
})