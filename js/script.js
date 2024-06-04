const modal = document.getElementById('adoptModal');
const adoptButton = document.getElementById('adoptFormSubmit');
const form = document.getElementById('adoptForm');
const donateModal = document.getElementById('donateModal');
const donateFormSubmitButton = document.getElementById('donateFormSubmit');

function openModal() {
  modal.style.display = "block";
}

function openDonateModal() {
  donateModal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  donateModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == donateModal) {
    closeModal();
  }
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateAdoptForm()) {
    closeModal();
    window.location.href = "/pages/success.html";
  }
});

adoptButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (validateAdoptForm()) {
    closeModal();
    window.location.href = "/pages/success.html";
  }
});

donateFormSubmitButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (validateDonateForm()) {
    closeModal();
    window.location.href = "/pages/success.html";
  }
});

function validateAdoptForm() {
  const email = document.querySelector('#adoptModal input[type="email"]').value;
  const fullname = document.querySelector('#adoptModal input[type="text"][id="fullname"]').value;
  const day = document.querySelector('#adoptModal select.day').value;
  const month = document.querySelector('#adoptModal select.month').value;
  const year = document.querySelector('#adoptModal select.year').value;
  const terms = document.querySelector('#adoptModal input[type="checkbox"]').checked;

  if (!email || !fullname || !day || !month || !year || !terms) {
    alert('Please fill in all fields and agree to the terms');
    return false;
  }

  if (!email.match(/\S+@\S+\.\S+/)) {
    alert('Please enter a valid email address');
    return false;
  }

  return true;
}


function validateDonateForm() {
  const email = document.querySelector('#donateModal input[type="email"]').value;
  const amount = document.querySelector('#donateModal input[type="text"]').value;
  const paymentMethod = document.querySelector('#donateModal input[name="payment-method"]:checked');

  if (!email || !amount || !paymentMethod) {
    alert('Please fill in all fields and select a payment method');
    return false;
  }

  if (!email.match(/\S+@\S+\.\S+/)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount');
    return false;
  }

  return true;
}