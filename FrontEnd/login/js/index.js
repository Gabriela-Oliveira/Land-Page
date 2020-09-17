(() => {
    let inputEmail = document.querySelector('#email');
    let inputSenha = document.querySelector('#senha');
    let btnEnviar = document.querySelector('#btn-entrar');
    let alerta = document.querySelector('.alert');
    let mensagem = document.querySelector('.mensagem');
    let fechar = document.querySelector('.close');

    //Validadndo e-mail e senha:
    function _validarEmailSenha(){
        let regexEmail = /^[a-z0-9.#-_]+@[a-z]+.[a-z]/i;
        let regexSenha = /^[a-zA-Z0-9.@!#$%*]{6-10}/i;

        if(!inputEmail.value || !inputSenha.value){
            mostrarMensagem('Por favor preencha todos os campos !');
            return;
        }

        if(!regexEmail.test(inputEmail.value) && !regexSenha.test(inputSenha.value)){
            mostrarMensagem('E-mail ou senha inválidos', 'orange');
            return;
        }
    }

    function _procurarFuncionario(){
        _validarEmailSenha();
        let listaFuncionarios =  [ {codigo: 0,
            nome: "Iago Murilo Joaquim da Cruz",
            cpf: "32842391543",
            email: "adm@adm.com",
            senha: "123456",
            datanascimento: "1956-06-10",
            salario: 6000.0,
            endereco: 1}];
        fetch('http://localhost:9090/funcionario')
        .then(response => response.json())
        .then(response => {
            listaFuncionarios = response;

            for(funcionario of listaFuncionarios){
                if(funcionario.email == inputEmail.value && funcionario.senha == inputSenha.value.toString()){
                    window.location.href = '../web_app/index.html';
                }

    
            }
        })
        .catch(err => mostrarMensagem('Erro interno no servidor! se possível verifique as informações passadas!'));
    }

    function mostrarMensagem(mensage, color){
        alerta.classList.remove('esconder');
        mensagem.textContent = mensage;
        alerta.style.backgroundColor = color;
        setTimeout(()=> {
            alerta.classList.add('esconder');
            alerta.style.backgroundColor = '';
        }, 7000);

        fechar.addEventListener('click', ()=> {
            alerta.classList.add('esconder');
            alerta.style.backgroundColor = '';
        })
    }

    btnEnviar.addEventListener('click', (e)=>{
        e.preventDefault();
        _procurarFuncionario();

    });


})();