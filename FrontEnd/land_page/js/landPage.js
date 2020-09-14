

(() =>{
    let inputNome = document.querySelector('#name');
    let inputWhatsapp = document.querySelector('#whats');
    let btnEnviar = document.querySelector('#btn-submit');
    const url = 'http://localhost:9090/usuario';
    
    // Inicia os objetos vazios que seram preenchidos futuramente
    let info = {};
    let options = {};
    function _validarCampos(){
        let regexNome = /^[A-Za-z]/i;//regex para validar o nome
        let regexWhatsapp = /^[0-9]{2}[0-9]{5}[0-9]{4}/g;//regex para validar o numero
        if(!inputNome.value || !inputWhatsapp.value){//verifica se os campos de nome e numero estão vazios
            swal("Por favor preencha todos os campos", "Clique no botão para fechar a janela" ,"info");
            return;
        }

        if(!regexNome.test(inputNome.value) || !regexWhatsapp.test(inputWhatsapp.value)){//verifica se os campos passam no teste do regex
            swal("Os campos estão com valores não reconhecidos pelo sistema", "Clique no botão para fechar essa janela", "warning");
            return;
        }

        //insere os dados nos objetos caso tudo funcione corretamente
        info = {
            nome: inputNome.value,
            whatsapp: inputWhatsapp.value
        }
        options = {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
            'Content-Type': 'application/json'
        }
    }
    }


    function _cadastrarUsuario (){
        _validarCampos();
        if(!info.nome || !info.whatsapp){//ultma vereficação para saber se existe algum campo vazio, por mais que a função validar funcione para isso, quando se passa dessa forma a função cadastro tbm é iniciada, causando um erro, para evitar isso, verificamos os dados de novo
            return;
        }
        fetch(url, options)//manda a request de POST para a api
        .then(response => {
            response.json()
            //zera as informações para que as mesma não fiquem armazenadas e acabem interferindo na hora de executar a funcção
            info = {};
            options = {};
        })
        .then(response => {
            swal("Cadastro efetuado com sucesso!", "Clique no botão para fechar essa janela", "success");
        })
        .catch(error => {
            swal("Ocorrei um erro com a api" + error, "Clique no botão para fechar essa janela", "error");

        });
    }


    btnEnviar.addEventListener('click', e => {
        e.preventDefault();

        _cadastrarUsuario();
    })
})();