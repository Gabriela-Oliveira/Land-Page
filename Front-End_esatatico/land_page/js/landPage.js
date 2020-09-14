

(() =>{
    let inputNome = document.querySelector('#name');
    let inputWhatsapp = document.querySelector('#whats');
    let btnEnviar = document.querySelector('#btn-submit');

    //inicia os objetos vazios para serem utilizados quando preciso
    let user = {};
    //mockup de uma lista de pessoas já cadastradas
    let users = [{nome:'Guilherme Henrique', whatsapp: '21985430032'}, {nome: 'Gabriela Oliveira', whatsapp: '21907658890'}, {nome: 'Cicero Romão', whatsapp: '21978427610'}, {nome: 'Paulo Eduardo', whatsapp: '21965324422'}];

    function _validarCampos(){
        let regexNome = /^[A-Za-z]/i;//regex para validar o nome
        let regexWhatsapp = /^[0-9]{2}[0-9]{5}[0-9]{4}/g;//regex para validar o numero
        if(!inputNome.value || !inputWhatsapp.value){//verifica os valores para saber se a input está vazia
            swal("Por favor preencha todos os campos", "Clique no botão para fechar a janela" ,"info");
            return;
            
        }

        if(!regexNome.test(inputNome.value) || !regexWhatsapp.test(inputWhatsapp.value)){//varefica se está tudo dentro dos padrões do regex
            swal("Os campos estão com valores não reconhecidos pelo sistema", "Clique no botão para fechar essa janela", "warning");
            return;
        }
        //caso ocorra tudo bem até esse ponto indica os valores para cadastro do usuario
        user = {
            nome: inputNome.value,
            whatsapp: inputWhatsapp.value
        }
        
        

  }


    function _cadastrarUsuario (){
        _validarCampos();
        if(!user.nome || !user.whatsapp){
            console.log(users);
            return;
        }
        users.push(user);//Manda o usuario para dentro da lista
        user = {};//Zera todos os valores de usuario para o que o mesmo não fique com valores já utilizados no ultimo cadastro
        swal("Cadastro efetuado com sucesso!", "Clique no botão para fechar essa janela", "success");
        console.log(users);

    }


    btnEnviar.addEventListener('click', e => {
        e.preventDefault();
        _cadastrarUsuario();
    })
})();