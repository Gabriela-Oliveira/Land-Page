(() => {
    let inputEmail = document.querySelector('#email');
    let inputSenha = document.querySelector('#senha');
    let btnEnviar = document.querySelector('#btn-entrar');
    let alerta = document.querySelector('.alert');
    let mensagem = document.querySelector('.mensagem');
    let fechar = document.querySelector('.close');

    let funcionario = {};
    let funcionarios = [{codigo: 1,
    nome: "Iago Murilo Joaquim da Cruz",
    cpf: "32842391543",
    email: "iagomurilojoaquimdacruz-82@msn.com",
    senha: "123456",
    datanascimento: "1956-06-10",
    salario: 6000.0,
    endereco: 1}];
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

            for(funcionario of funcionarios){
                if(funcionario.email == inputEmail.value && funcionario.senha == inputSenha.value.toString()){
                    mostrarMensagem("Login efetuado com sucesso!", 'green');
                    window.location.href = '../../../Front-End_esatatico/web_app/index.html';
                }

    
            }
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