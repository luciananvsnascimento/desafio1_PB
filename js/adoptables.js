const donateModal = document.getElementById('donateModal');

function openModalDonate() {
    donateModal.style.display = "block";
}

function closeModal() {
    donateModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == donateModal) {
        closeModal();
    }
}

function submitForm() {
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;

  if (!email.match(/\S+@\S+\.\S+/)) {
    document.getElementById('email-error').style.display = 'block';
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    document.getElementById('amount-error').style.display = 'block';
    return;
  }

  window.location.href = '/pages/success.html';
}