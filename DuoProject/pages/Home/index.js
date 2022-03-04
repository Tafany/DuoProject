


fetch("http://127.0.0.1:5501/arquivo.json")

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  
    data.lista_tarefas.forEach(function (recebe) {
      var inicio = document.createElement('div');
      inicio.classList.add('setaContainer');

      //mostrar perguntas
      var perguntas = document.createElement('perguntas');
      perguntas.innerHTML = recebe.titulo;
      perguntas.classList.add('pergunta');
      perguntas.setAttribute('onClick', 'mascara(' + recebe.id + ')');
      //retorno
      inicio.appendChild(perguntas);

      //mostrar resposta
      var respostas = document.createElement('p');
      respostas.innerHTML = recebe.descricao;
      respostas.classList.add('resposta');

      //trazer á resposta
      var transResp = document.createElement('div');
      transResp.classList.add('hidden');
      transResp.id = recebe.id;
      transResp.appendChild(respostas);

      inicio.appendChild(transResp);

      document.getElementById('bloco').appendChild(inicio);
    })
  })

  function mascara(id) {
    if (document.getElementById(id).style.display == 'block') {
      document.getElementById(id).style.display = 'none';
      document.getElementById(id).parentElement.classList.remove('ativo');
    } else {
      document.getElementById(id).style.display = 'block';
      document.getElementById(id).parentElement.classList.add('ativo');
    }
  }




