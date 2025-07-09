document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const cargo = document.getElementById("cargo").value;
  const painel = document.getElementById("painel");

  if (!usuario || !senha || !cargo) {
    alert("Preencha todos os campos.");
    return;
  }

  let html = `<h2>Bem-vindo, ${usuario}!</h2>`;

  if (cargo === "gerente") {
    html += `
      <div class="relatorio">
        <h3>📊 Relatório de Vendas</h3>
        <ul>
          <li>Total de Vendas: R$ 4.250,00</li>
          <li>Pedidos Entregues: 37</li>
          <li>Pedidos Pendentes: 5</li>
          <li>Melhor Vendedor: Ana Silva</li>
        </ul>
      </div>
    `;
  } else {
    html += `<p>Acesso concedido como funcionário.</p>`;
  }

  painel.innerHTML = html;
  painel.classList.remove("oculto");

  this.style.display = "none";
});
