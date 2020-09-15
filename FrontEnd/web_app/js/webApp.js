let info = (() => {

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

    let btnFuncionario = document.querySelector('#btn-funcionario');
    let btnUsuario = document.querySelector('#btn-usuario');
    let tabelaFuncionario = document.querySelector('.funcionario');
    let tabelaUsuario = document.querySelector('.usuario');
    

    //GET toda lista de pessoas participando por meio do cadastro na land_page
    let listaBackupUsuarios = [];
    function _mostrarTodosAsPessoas(){
        const url = 'http://localhost:9090/usuario';
        fetch(url)
        .then(response => response.json())
        .then(response => _popularTabelaUsuario(response))
        .catch(err => console.log(err));
    }

_mostrarTodosAsPessoas();
    //GET de uma pessoa apenas pelo codigo
    function apagarUsuario(codigo){
        fetch(`http://localhost:9090/usuario/${codigo}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        }

        )
        .then(response => console.log(response))
        .then(response => _mostrarTodosAsPessoas())
        .catch(err => console.log(err));
        
    }

    var listaBackupEnderecos = []; 


    //GET lista de todos os funcionarios
    let listaBackupFuncionarios = [];
    function _pegarTodosOsfuncionarios(){
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
            .catch(err => console.log(err));
                    
        })
        .catch(err => console.log(err));
    }

    _pegarTodosOsfuncionarios();
    


    //GET de um e apenas um funcionario pelo codigo
    let funcionario = {};
    function _pegarPorCodigo(codigo){
        const url = `http://localhost:9090/funcionario/`;
        fetch(url + codigo)
        .then(response => response.json())
        .then(response => funcionario = response)
        .catch(err => console.log(err));
    }

    function editarFuncionario(codigo){

        $('#modal-adicionar').modal({backdrop: 'static'});

        fetch(`http://localhost:9090/funcionario/${codigo}`)
        .then(response => response.json())
        .then(response => {
            inputNome.value = response.nome;
            inputCpf.value = response.cpf;
            inputEmail.value = response.email;
            inputSenha.value = response.senha;
            inputNascimento.value = response.datanascimento;
            inputSalario.value = response.salario;

            fetch(`http://localhost:9090/endereco/${response.endereco}`)
            .then(response => response.json())
            .then(res => {
        
                        inputBairro.value = res.bairro;
                        inputCep.value = res.cep;
                        inputCidade.value = res.cidade;
                        inputEstado.value = res.estado;
                        inputNumero.value = res.numero;
                        inputRua.value = res.rua;
                        
        
        
                btnSalvar.addEventListener('click', e => {
                    e.preventDefault();
                    let enderecoAtualizado = {
                        
                        cep:inputCep.value,
                        rua:inputRua.value,
                        bairro:inputBairro.value,
                        numero:inputNumero.value,
                        cidade:inputCidade.value,
                        estado:inputEstado.value
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
                    .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
                   
                })
        
            
            }).catch(err => console.log(err))

        })
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

            let endereco = {
                cep:inputCep.value,
                rua:inputRua.value,
                bairro:inputBairro.value,
                numero:inputNumero.value,
                cidade:inputCidade.value,
                estado:inputEstado.value
            }


           

            fetch(`http://localhost:9090/endereco`, {
               method: 'POST',
               body: JSON.stringify(endereco),
               headers:{
                'Content-Type': 'application/json'
               }
                
            })
            .then(response => response.json())
            .then(res =>{ 
                let funcionario = {
                    nome: inputNome.value,
                    cpf: inputCpf.value,
                    email: inputEmail.value,
                    senha: inputSenha.value,
                    dataNascimento: inputNascimento.value,
                    salario: inputSalario.value,
                    endereco: res.codigo
                    
                }
                fetch('http://localhost:9090/funcionario', {
                method: 'POST',
                body: JSON.stringify(funcionario),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then()
        })





            _popularTabelaFuncionario(funcionarios);
        })

    }
        



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
    function _popularTabelaFuncionario(listaFuncionarios, listaBackupEnderecos){
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
            tdNascimento.textContent = f.datanascimento;
                tdEndereco.textContent = listaBackupEnderecos.map(e => {
                    if(e.codigo == f.codigo){
                        console.log(e);
                        return e.cep;
                    }    
                });
            
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

    return {
        apagarUsuario,
        editarFuncionario
    }
})()