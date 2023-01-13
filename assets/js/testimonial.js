function validate() {

    var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validphone = /^(0|91)?[6-9][0-9]{9}$/;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const job = document.getElementById('job').value;
    const message = document.getElementById('message').value;

    if (name == '') {
        document.getElementById('name').classList.add('invalid')
    }
    else {
        document.getElementById('name').classList.remove('invalid')
    }
    if (email == '' || !email.match(validemail)) {
        document.getElementById('email').classList.add('invalid')
    }
    else {
        document.getElementById('email').classList.remove('invalid')
    }
    if (country == '') {
        document.getElementById('country').classList.add('invalid')
    }
    else {
        document.getElementById('country').classList.remove('invalid')
    }
    if (phone == '' || !phone.match(validphone)) {
        document.getElementById('phone').classList.add('invalid')
    }
    else {
        document.getElementById('phone').classList.remove('invalid')
    }
    if (company == '') {
        document.getElementById('company').classList.add('invalid')
    }
    else {
        document.getElementById('company').classList.remove('invalid')
    }
    if (job == '') {
        document.getElementById('job').classList.add('invalid')
    }
    else {
        document.getElementById('job').classList.remove('invalid')
    }
    if (message == '') {
        document.getElementById('message').classList.add('invalid')
    }
    else {
        document.getElementById('message').classList.remove('invalid')
    }
}