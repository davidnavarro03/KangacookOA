function appendAlert (message, type){
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alertPlaceholder.append(wrapper)
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const valid = email.includes("@") && (email.includes(".com") || email.includes(".org") || email.includes(".edu"));
    if(!valid)
    {
        appendAlert("Invalid email!", "danger");
    }
    return valid;
}

function validateName() {
    const name = document.getElementById("nameuser").value;
    const valid = name.length >= 5 && name.length <= 20;

    if(!valid)
    {
        appendAlert("Invalid name!", "danger");
    }
    return valid;
}

function validateCredentials() {
    return validateEmail() && validateName();
}