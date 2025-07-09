document.getElementById("form-pagamento").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value;

  document.getElementById("email-cliente").textContent = email;
  document.getElementById("mensagem-confirmacao").classList.remove("oculto");
  this.style.display = "none";
});
