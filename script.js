function showCadastro() {
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("listagem").style.display = "none";
  }

  function showListagem() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("listagem").style.display = "block";
    listarItens();
  }

  function cadastrarItem(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const classe = document.getElementById("classe").value;
    const raca = document.getElementById("raca").value;
    const alinhamento = document.getElementById("alinhamento").value;
    const descricao = document.getElementById("descricao").value;
    if (nome && classe && raca && alinhamento &&descricao) {
      const item = { nome, classe, raca, alinhamento, descricao };
      const items = JSON.parse(localStorage.getItem("items")) || [];
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
      document.getElementById("nome").value = "";
      document.getElementById("classe").value = "";
      document.getElementById("raca").value = "";
      document.getElementById("alinhamento").value = "";
      document.getElementById("descricao").value = "";
      alert("Personagem cadastrado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  }

  function listarItens() {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const listaItems = document.getElementById("listaItems");

    listaItems.innerHTML = "";

    items.forEach(item => {
      const row = document.createElement("tr");

      const colunas = ["nome", "classe", "raca", "alinhamento", "descricao"];

      colunas.forEach(coluna => {
      const cell = document.createElement("td");
      const valor = item[coluna];

      const valorFormatado = valor.charAt(0).toUpperCase() + valor.slice(1);

      cell.textContent = valorFormatado;

      const colunaFormatada = coluna.charAt(0).toUpperCase() + coluna.slice(1);

      cell.setAttribute("data-label", colunaFormatada);

      row.appendChild(cell);
      });

      listaItems.appendChild(row);
    });
  }
  function resetarLista(){
      localStorage.clear();
      location.reload();
  }