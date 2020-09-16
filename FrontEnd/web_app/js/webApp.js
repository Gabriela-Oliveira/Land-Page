let info = (() => {

    let todasInputs = document.querySelectorAll('#modal-adicionar form input');
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

    let inputNomeEditar = document.querySelector('#modal-editar #nome');
    let inputCpfEditar = document.querySelector('#modal-editar #cpf');
    let inputEmailEditar = document.querySelector('#modal-editar #email');
    let inputSenhaEditar = document.querySelector('#modal-editar #senha');
    let inputNascimentoEditar = document.querySelector('#modal-editar #data-nascimento');
    let inputSalarioEditar = document.querySelector('#modal-editar #salario');

    let inputCepEditar = document.querySelector('#modal-editar #cep');
    let inputRuaEditar = document.querySelector('#modal-editar #rua');
    let inputBairroEditar = document.querySelector('#modal-editar #bairro');
    let inputNumeroEditar = document.querySelector('#modal-editar #numero');
    let inputCidadeEditar = document.querySelector('#modal-editar #cidade');
    let inputEstadoEditar = document.querySelector('#modal-editar #estado');

    let btnSalvar = document.querySelector('#save');
    let btnCancelar = document.querySelector('#cancel');

    let btnSalvarEdicao = document.querySelector('#salvar-edicao');
    let btnCancelarEdicao = document.querySelector('#cancelar-edicao');

    let btnConfirmar = document.querySelector('#confirmar');
    let btnCancelarExclusao = document.querySelector('#cancelar');

    let tabelaFuncionario = document.querySelector('.funcionario');
    let tabelaUsuario = document.querySelector('.usuario');

    //Regex que serão usados

    let regexEmail = /[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[A-Za-z]/gi;
    let regexpf = /[0-9]{11}/gi;
    let regexData = /[0-9]{4}[-]{1}[0-90-9]{2}[-]{1}[0-90-9]{2}/g;

    function _validarRegex(regex, campo){
        if(!regex.test(campo)){
            swal("Campo vazio!", "Preencha todos os campos por favor!", "warning");
            return;
        }
    }


    //GET toda lista de pessoas participando por meio do cadastro na land_page
    let listaBackupUsuarios = [];
    function _mostrarTodosAsPessoas() {
        const url = 'http://localhost:9090/usuario';
        fetch(url)
            .then(response => response.json())
            .then(response => _popularTabelaUsuario(response))
            .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));
    }

    _mostrarTodosAsPessoas();

    //GET de uma pessoa apenas pelo codigo
    function apagarUsuario(codigo) {
        

        $('#modal-exclusao').modal({backdrop: 'static'})

        btnConfirmar.addEventListener('click', e => {
            e.preventDefault();
            fetch(`http://localhost:9090/usuario/${codigo}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
    
            )
        
        .then(response =>  swal("Usuário excluido com sucesso!", "", "sucess"))
            .then(response => {    
                _mostrarTodosAsPessoas();
                $('#modal-confimar').modal({ display: 'none'});
            })
            .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));
        })
    }

    function apagarFuncionario(codigo) {

        $('#modal-exclusao').modal({backdrop: 'static'})

        btnConfirmar.addEventListener('click', e => {
            e.preventDefault();
            fetch(`http://localhost:9090/funcionario/${codigo}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
    
            )
                .then(response => swal("Funcionário excluido com sucesso!", " ", "sucess"))
                .then(response => {
                    _pegarTodosOsfuncionarios()
                    $('#modal-confimar').modal({ display: 'none' });
                })
                .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));
        })

        btnCancelarExclusao.addEventListener('click', e => {
            e.preventDefault();
            return;
        })




    }


    var listaBackupEnderecos = [];


    //GET lista de todos os funcionarios
    let listaBackupFuncionarios = [];
    function _pegarTodosOsfuncionarios() {
        const url = 'http://localhost:9090/funcionario';
        fetch(url)
            .then(response => response.json())
            .then(response => {
                listaBackupFuncionarios = response;
                fetch('http://localhost:9090/endereco')
                    .then(response => response.json())
                    .then(response => {
                        listaBackupEnderecos = response;
                        _popularTabelaFuncionario(listaBackupFuncionarios, listaBackupEnderecos);
                    })
                    .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));

            })
            .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));
    }

    _pegarTodosOsfuncionarios();



    function editarFuncionario(codigo) {

        $('#modal-editar').modal({ backdrop: 'static' });

        fetch(`http://localhost:9090/funcionario/${codigo}`)
            .then(response => response.json())
            .then(response => {
                
                inputNomeEditar.value = response.nome;
                inputCpfEditar.value = response.cpf;
                inputEmailEditar.value = response.email;
                inputSenhaEditar.value = response.senha;
                inputNascimentoEditar.value = response.datanascimento.join('-');
                inputSalarioEditar.value = response.salario;

                fetch(`http://localhost:9090/endereco/${response.endereco}`)
                    .then(response => response.json())
                    .then(res => {

                        inputBairroEditar.value = res.bairro;
                        inputCepEditar.value = res.cep;
                        inputCidadeEditar.value = res.cidade;
                        inputEstadoEditar.value = res.estado;
                        inputNumeroEditar.value = res.numero;
                        inputRuaEditar.value = res.rua;


                        btnSalvarEdicao.addEventListener('click', e => {
                            e.preventDefault();
                            if (!inputCep.value || !inputRua.value || !inputBairro.value || !inputNumero.value || !inputCidade.value || !inputEstado.value
                                || !inputNome.value || !inputCpf.value || !inputEmail.value || !inputSenha.value || !inputNascimento.value || !inputSalario.value) {
                                    swal("Campo vazio!", "Preencha todos os campos por favor!", "warning");
                                return;
                            }
                            _validarRegex(regexEmail, inputEmail.value);
                            _validarRegex(regexpf, inputCpf.value);
                            _validarRegex(regexData, inputNascimento.value);
                            let enderecoAtualizado = {
                                
                                cep: inputCep.value,
                                rua: inputRua.value,
                                bairro: inputBairro.value,
                                numero: inputNumero.value,
                                cidade: inputCidade.value,
                                estado: inputEstado.value
                            }
                            fetch(`http://localhost:9090/endereco/${res.codigo}`, {
                                method: 'PUT',
                                body: JSON.stringify(enderecoAtualizado),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(response => response.json())
                                .then(response => {

                                    let funcionarioAtualizado = {
                                        nome: inputNome.value,
                                        cpf: inputCpf.value,
                                        email: inputEmail.value,
                                        senha: inputSenha.value,
                                        dataNascimento: inputNascimento.value,
                                        salario: inputSalario.value,
                                        endereco: res.codigo
                                    }
                                    fetch(`http://localhost:9090/funcionario/${codigo}`, {
                                        method: 'PUT',
                                        body: JSON.stringify(funcionarioAtualizado),
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    })
                                        .then(response => response.json())
                                        .then(response => {
                                            _pegarTodosOsfuncionarios();
                                            
                                        })
                                        .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));
                                })
                                .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));

                        })


                    }).catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"))

            })
    }

    function _adicionarFuncionario() {

        $('#modal-adicionar').modal({ backdrop: 'static' });

        for (let input of todasInputs) {
            input.value = '';
        }
        btnSalvar.addEventListener('click', e => {
            e.preventDefault();

                if (!inputCep.value || !inputRua.value || !inputBairro.value || !inputNumero.value || !inputCidade.value || !inputEstado.value
                    || !inputNome.value || !inputCpf.value || !inputEmail.value || !inputSenha.value || !inputNascimento.value || !inputSalario.value) {
                    swal("Campo vazio!", "Preencha todos os campos por favor!", "warning");
                        
                    return;
                }
            
            _validarRegex(regexEmail, inputEmail.value);
            _validarRegex(regexpf, inputCpf.value);
            _validarRegex(regexData, inputNascimento.value);
            let endereco = {
                cep: inputCep.value,
                rua: inputRua.value,
                bairro: inputBairro.value,
                numero: inputNumero.value,
                cidade: inputCidade.value,
                estado: inputEstado.value
            }

            fetch(`http://localhost:9090/endereco`, {
                method: 'POST',
                body: JSON.stringify(endereco),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
                .then(response => response.json())
                .then(res => {
                    
                    let funcionario = {
                        nome: inputNome.value,
                        cpf: inputCpf.value,
                        email: inputEmail.value,
                        senha: inputSenha.value,
                        datanascimento: inputNascimento.value,
                        salario: inputSalario.value,
                        endereco: res.codigo

                    }
                    fetch('http://localhost:9090/funcionario', {
                        method: 'POST',
                        body: JSON.stringify(funcionario),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            response.json();
                        })
                        .then(response => {
                            swal("Funcionário criado com sucesso", "", "sucess");
                            _pegarTodosOsfuncionarios();
                            $('#modal-adicionar').modal({ display: 'none' });

                        })
                        .catch(err => swal("ERROR", "Erro interno no servidor, se possivel verifique as informações passadas", "error"));

                })
        })
    }


    function _popularTabelaUsuario(users) {
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

    function _pegarEndereco(listaBackupEnderecos, endereco) {
        for (let valor of listaBackupEnderecos) {
            if (valor.codigo == endereco) {
                return valor.cep;
            }
        }
    }
    function _popularTabelaFuncionario(listaFuncionarios, listaBackupEnderecos) {
        let tabelaFuncionarios = document.querySelector('.tableFuncionario')
        // Aqui eu limpo a tabela inteira
        tabelaFuncionarios.textContent = "";

        listaFuncionarios.map(f => {
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
            tdCodigo.textContent = f.codigo;
            tdNome.textContent = f.nome;
            tdCpf.textContent = f.cpf;
            tdEmail.textContent = f.email;
            tdSenha.textContent = f.senha;
            tdNascimento.textContent = f.datanascimento.join('-');
            tdEndereco.textContent = _pegarEndereco(listaBackupEnderecos, f.endereco);
            tdSalario.textContent = f.salario;
            tdAcoes.innerHTML = `
            <button
            class="btn btn-outline-primary btn-sm "
            onClick="info.editarFuncionario(${f.codigo})">
            <i class="fas fa-pencil-alt"></i> Editar
            </button>
            <button class="btn btn-outline-primary btn-sm excluir"
            onClick="info.apagarFuncionario(${f.codigo})"><i class="fas fa-trash-alt"></i> Excluir</button>
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


    btnAdicionar.addEventListener('click', e => {
        e.preventDefault();
        _adicionarFuncionario();
    })

    return {
        apagarUsuario,
        editarFuncionario,
        apagarFuncionario
    }

})()