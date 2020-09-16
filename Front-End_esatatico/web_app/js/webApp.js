var info = (() => {
    let todasInputs = document.querySelectorAll('form input');
    let btnAdicionar = document.querySelector('#btn-adicionar');

    let inputNome = document.querySelector('#nome');
    let inputCpf = document.querySelector('#cpf');
    let inputEmail = document.querySelector('#email');
    let inputSenha = document.querySelector('#senha');
    let inputNascimento = document.querySelector('#data-nascimento');
    let inputSalario = document.querySelector('#salario');

    let inputCep = document.querySelector('#cep');
    let inputRua = document.querySelector('#rua');
    let inputBairro = document.querySelector('#bairro');
    let inputNumero = document.querySelector('#numero');
    let inputCidade = document.querySelector('#cidade');
    let inputEstado = document.querySelector('#estado');

    let btnSalvar = document.querySelector('#save');
    let btnCancelar = document.querySelector('#cancel');

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

    let enderecos = [{
        codigo:1,
        cep:"54268454",
        rua:"Rua das Bananeiras",
        bairro:"Palmeiras",
        numero:25,
        cidade:"São Paulo",
        estado:"São Paulo"
    }];
     let endereco = {};

    let btnFuncionario = document.querySelector('#btn-funcionario');
    let btnUsuario = document.querySelector('#btn-usuario');
    let tabelaFuncionario = document.querySelector('.funcionario');
    let tabelaUsuario = document.querySelector('.usuario')

    _popularTabelaFuncionario(funcionarios);

    _popularTabelaUsuario(users);

    function _popularTabelaUsuario(users){
        let tabelaUsuarios = document.querySelector('.tableUsuario')
        //Limpa a tabela para não repetir os dados

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
            onClick="info.apagarUsuario(${u.codigo})"><i class="fas fa-trash-alt"></i> Excluir</button>
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
            tdEndereco.textContent = enderecos.map(e => {
                if(e.codigo == u.codigo){
                    return e.cep;
                }    
            });
            tdSalario.textContent = u.salario;
            tdAcoes.innerHTML = `
            <button
             class="btn btn-outline-primary btn-sm "
             onClick="info.editarFuncionario(${u.codigo})">
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

    function apagarFuncionario(codigo){
        let funcionario = _pegarPorCodigoFuncionario(codigo);
        let index = funcionarios.indexOf(funcionario);
        if(index > -1){
            funcionarios.splice(index, 1);
            alert('deu certo');
        }
        _popularTabelaFuncionario(funcionarios);
    }

    function apagarUsuario(codigo){
        let usuario = _pegarPorCodigoUsuario(codigo);
        let index = users.indexOf(usuario);
        if(index > -1){
            users.splice(index, 1);
        _popularTabelaUsuario(users);
            
        }
    }
    //GET de um e apenas um funcionario pelo codigo
    function _pegarPorCodigoFuncionario(codigo){
        for(let funcionario1 of funcionarios){
            if(funcionario1.codigo == codigo){
                funcionario = funcionario1
                console.log(funcionario);
                return funcionario;
            }
        }
    }

    function _adicionarFuncionario(){

        $('#modal-adicionar').modal({backdrop: 'static'});

        btnSalvar.addEventListener('click', e => {
            e.preventDefault();

            for(let input of todasInputs){
                if(!input.value){
                    alert('Por favor preencha todos os campos');
                    return;
                }
            }

            endereco = {
                codigo: enderecos.length+1,
                cep:inputCep.value,
                rua:inputRua.value,
                bairro:inputBairro.value,
                numero:inputNumero.value,
                cidade:inputCidade.value,
                estado:inputEstado.value
            }

            funcionario = {
                codigo: funcionarios.length+1,
                nome: inputNome.value,
                cpf: inputCpf.value,
                email: inputEmail.value,
                senha: inputSenha.value,
                datanascimento: inputNascimento.value,
                salario: inputSalario.value,
                endereco: endereco.codigo
            }

            enderecos.push(endereco);
            funcionarios.push(funcionario);


            _popularTabelaFuncionario(funcionarios);
        })

    }
    function editarFuncionario(codigo){
        let funcionario = _pegarPorCodigoFuncionario(codigo);
        let index = funcionarios.indexOf(funcionario);
        if(index == -1) return;

        $('#modal-adicionar').modal({backdrop: 'static'});

        inputNome.value = funcionario.nome;
        inputCpf.value = funcionario.cpf;
        inputEmail.value = funcionario.email;
        inputSenha.value = funcionario.senha;
        inputNascimento.value = funcionario.datanascimento;
        inputSalario.value = funcionario.salario;

        let endereco = undefined;

        let end = enderecos.map(ende => {
            if(ende.codigo == funcionario.codigo){
                return ende;
            }
        })

        let indexEndereco = enderecos.indexOf(end);
        
        enderecos.map(e => {
            if(e.codigo == funcionario.codigo){
                inputBairro.value = e.bairro;
                inputCep.value = e.cep;
                inputCidade.value = e.cidade;
                inputEstado.value = e.estado;
                inputNumero.value = e.numero;
                inputRua.value = e.rua;
                endereco = e.codigo;
            }
        });


        btnSalvar.addEventListener('click', e => {
            e.preventDefault();

            let enderecoAtualizado = {
                codigo: endereco,
                cep:inputCep.value,
                rua:inputRua.value,
                bairro:inputBairro.value,
                numero:inputNumero.value,
                cidade:inputCidade.value,
                estado:inputEstado.value
            }

            let funcionarioAtualizado = {
                codigo: funcionario.codigo,
                nome: inputNome.value,
                cpf: inputCpf.value,
                email: inputEmail.value,
                senha: inputSenha.value,
                datanascimento: inputNascimento.value,
                salario: inputSalario.value,
                endereco: endereco
            }

            enderecos.splice(indexEndereco, 1, enderecoAtualizado);
            funcionarios.splice(index, 1, funcionarioAtualizado);


            _popularTabelaFuncionario(funcionarios);
        })

    }

    btnAdicionar.addEventListener('click', e => {
        e.preventDefault();
        _adicionarFuncionario();
        _popularTabelaFuncionario(funcionarios);
    })

    return{
        apagarFuncionario,
        editarFuncionario,
        apagarUsuario
    }

})()