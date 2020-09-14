var info = (() => {
    //GET toda lista de pessoas participando por meio do cadastro na land_page
    let users = [{ 
        codigo: 1, 
        nome:'Guilherme Henrique', 
        whatsapp: '21985430032'}, 
        { codigo: 2, 
        nome: 'Gabriela Oliveira', 
        whatsapp: '21907658890'}, 
        { codigo: 3, 
        nome: 'Cicero Romão', 
        whatsapp: '21978427610'},
        { codigo: 4, 
        nome: 'Paulo Eduardo', 
        whatsapp: '21965324422'
        }];

        let user = {};

    let funcionarios = [
        {codigo: 1,
        nome: "Iago Murilo Joaquim da Cruz",
        cpf: "32842391543",
        email: "iagomurilojoaquimdacruz-82@msn.com",
        senha: "123456",
        datanascimento: "1956-06-10",
        salario: 6000.0,
        endereco: 1
    }];

        let funcionario = {};

    function apagarFuncionario(codigo){
        let funcionario = _pegarPorCodigoFuncionario(codigo);
        let index = funcionarios.indexOf(funcionario);
        if(index > -1){
            funcionarios.splice(index, 1);
            alert('deu certo');
        }
        _popularTabelaFuncionario(funcionarios);
    }

    function _popularTabelaUsuario(users){
        let tabelaUsuarios = document.querySelector('.tableUsuario')
        // Aqui eu limpo a tabela inteira \o/
        tabelaUsuarios.textContent = "";

        users.map(u => {
            // Criando os elementos 
            var tr = document.createElement('tr');

            var tdCodigo = document.createElement('td');
            var tdNome = document.createElement('td');
            var tdWhatsapp = document.createElement('td');
            var tdAcoes = document.createElement('td');

            // Passando os valores para as Tds
            tdCodigo.textContent = u.codigo;
            tdNome.textContent = u.nome;
            tdWhatsapp.textContent = u.whatsapp;
            tdAcoes.innerHTML = `
            <button class="btn btn-outline-primary btn-sm "
            onClick="info.apagarUsuario(${u.id})"><i class="fas fa-trash-alt"></i> Excluir</button>
            `;

            // Tenho que add as minhas tds na minha tr.

            tr.appendChild(tdCodigo);
            tr.appendChild(tdNome);
            tr.appendChild(tdWhatsapp);
            tr.appendChild(tdAcoes);
            
            tabelaUsuarios.appendChild(tr);
        });

    }

    function _popularTabelaFuncionario(listaFuncionarios){
        let tabelaFuncionarios = document.querySelector('.tableFuncionario')
        // Aqui eu limpo a tabela inteira \o/
        tabelaFuncionarios.textContent = "";

        listaFuncionarios.map(u => {
            // Criando os elementos 
            var tr = document.createElement('tr');

            var tdCodigo = document.createElement('td');
            var tdNome = document.createElement('td');
            var tdCpf = document.createElement('td');
            var tdEmail = document.createElement('td');
            var tdSenha = document.createElement('td');
            var tdNascimento = document.createElement('td');
            var tdEndereco = document.createElement('td');
            var tdSalario = document.createElement('td');
            var tdAcoes = document.createElement('td');

            // Passando os valores para as Tds
            tdCodigo.textContent = u.codigo;
            tdNome.textContent = u.nome;
            tdCpf.textContent = u.cpf;
            tdEmail.textContent = u.email;
            tdSenha.textContent = u.senha;
            tdNascimento.textContent = u.datanascimento;
            tdEndereco.textContent = u.endereco;
            tdSalario.textContent = u.salario;
            tdAcoes.innerHTML = `
            <button
             class="btn btn-outline-primary btn-sm "
             onClick="info.editarFuncionario(${u.id})">
             <i class="fas fa-pencil-alt"></i> Editar
             </button>
            <button class="btn btn-outline-primary btn-sm excluir"
            onClick="info.apagarFuncionario(${u.codigo})"><i class="fas fa-trash-alt"></i> Excluir</button>
            `;

            // Tenho que add as minhas tds na minha tr.

            tr.appendChild(tdCodigo);
            tr.appendChild(tdNome);
            tr.appendChild(tdCpf);
            tr.appendChild(tdEmail);
            tr.appendChild(tdSenha);
            tr.appendChild(tdNascimento);
            tr.appendChild(tdEndereco);
            tr.appendChild(tdSalario);
            tr.appendChild(tdAcoes);
         
            tabelaFuncionarios.appendChild(tr);
        });

    }

    _popularTabelaFuncionario(funcionarios);

    //GET de uma pessoa apenas pelo codigo

    function _pegarPorCodigoUsuario(codigo){
        for(let user1 of users){
            if(user1.codigo == codigo){
                console.log(user1);
                user = user1;
                return user;
            }
        }
    }

    function apagarUsuario(codigo){
        let usuario = _pegarPorCodigoUsuario(codigo);
        let index = users.indexOf(usuario);
        if(index > -1){
            users.splice(index, 1);
            console.log(users)
        }
    }



    //GET de um e apenas um funcionario pelo codigo
    function _pegarPorCodigoFuncionario(codigo){
        for(funcionario1 of funcionarios){
            if(funcionario1.codigo == codigo){
                funcionario = funcionario1
                console.log(funcionario);
                return funcionario;
            }
        }
    }

    return{
        apagarFuncionario
    }



})()