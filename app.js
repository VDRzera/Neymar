function pesquisar() {
    // Pega a seção onde os resultados serão mostrados
    let section = document.getElementById("resultados-pesquisa");
    // console.log(section); // Verifica se a seção foi encontrada
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
      section.innerHTML = "<p> <em> <strong>Opção não encontrada, digite o que deseja ver!</strong> <em> </p>"  
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Cria uma string vazia para guardar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Para cada dado, cria um novo item de resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLowerCase()
      if (titulo.includes(campoPesquisa)||tags.includes(campoPesquisa)) {
          resultados += `
          <div class="item-resultado">
           <h2><a href="https://www.instagram.com/neymarjr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
             target="_blank">Neymar Jr. </a> <p> <em> <strong>${dado.titulo}</strong> <em> </h2>
          <p> ${dado.descricao} </p>
           <p> ${dado.link} </p>
        </div>
      `;
      }
    }
  
      if (!resultados) {
           resultados = "<p> <em> <strong>Opção não encontrada</strong> <em> </p>"  
      }

    // Mostra os resultados na página
    section.innerHTML = resultados;
  }