document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button')

    // step 1: get deposit value
    const depositfield = document.getElementById('deposit-amount');
    const new_depositamountString = depositfield.value;
    const new_depositamount = parseFloat(new_depositamountString);

    //  step2: get the deposit total amount
    const deposittotalElement = document.getElementById('deposit-total');
    const prev_deposittotalString = deposittotalElement.innerText;
    const prev_deposittotal = parseFloat(prev_deposittotalString);
    const current_diposittotal = prev_deposittotal + new_depositamount;
    deposittotalElement.innerText = current_diposittotal;

    // step3 : balance modified
    const balancetotalelement = document.getElementById('balance-total');
    const prev_balancetotalString = balancetotalelement.innerText;
    const prev_balancetotal = parseFloat(prev_balancetotalString);
    const current_balancetotal = prev_balancetotal + new_depositamount;
    balancetotalelement.innerText = current_balancetotal;




    // step4: clear deposit field

    depositfield.value = '';
})