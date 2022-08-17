
document.getElementById('btn-submit').addEventListener('click', function () {


    // step2: get email address inside mail input field
    const emailfield = document.getElementById('user_email');
    const email = emailfield.value;


    // step3: get pass word .
    const passwordfield = document.getElementById('user_pass');
    const pass = passwordfield.value;


    // step 4: validate inputs and send to bank page
    if (email.length !== 0 && pass.length !== 0) {
        window.location.href = 'bank.html';
    }
    else {
        alert("Please give your email and password both!")
    }

})