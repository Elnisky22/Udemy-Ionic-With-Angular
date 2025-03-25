const reasonInput = document.querySelector('#input-reason'),
    amountInput = document.querySelector('#input-amount'),
    clearBtn = document.querySelector('#btn-clear'),
    addBtn = document.querySelector('#btn-add'),
    expensesList = document.querySelector('#expenses-list'),
    totalExpensesOutput = document.querySelector('#total-expenses'),
    alertCtrl = document.querySelector('ion-alert');

let TotalExpenses = 0;

function clearInputs() {
    reasonInput.value = '';
    amountInput.value = '';
}

addBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value,
        enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        alertCtrl.buttons = ['Okay'];
        alertCtrl.isOpen = true;
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = `${enteredReason}: $${enteredAmount}`;

    expensesList.appendChild(newItem);
    TotalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = `$${TotalExpenses}`;
    clearInputs();
})

alertCtrl.addEventListener('ionAlertDidDismiss', () => {
    alertCtrl.isOpen = false;
});

clearBtn.addEventListener('click', clearInputs);