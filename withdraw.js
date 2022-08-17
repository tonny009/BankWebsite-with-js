// step1 : add eventhandelar with withdraw

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawfield = document.getElementById('withdraw-amount');
    const new_withdrawamountString = withdrawfield.value;
    const new_withdrawamount = parseFloat(new_withdrawamountString);
    // console.log(new_withdrawamount)

    // step 2: get withdraw total amount
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const prev_withdrawtotalString = withdrawtotalElement.innerText;
    const prev_withdrawtotal = parseFloat(prev_withdrawtotalString);
    const current_withdrawtotal = prev_withdrawtotal + new_withdrawamount;
    withdrawtotalElement.innerText = current_withdrawtotal;

    // step3 : balance modified
    const balancetotalelement = document.getElementById('balance-total');
    const prev_balancetotalString = balancetotalelement.innerText;
    const prev_balancetotal = parseFloat(prev_balancetotalString);
    const current_balancetotal = prev_balancetotal - new_withdrawamount;
    balancetotalelement.innerText = current_balancetotal;

    // step4: clear withdraw field

    withdrawfield.value = '';
}
)