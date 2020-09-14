

(() =>{
    let inputNome = document.querySelector('#name');
    let inputWhatsapp = document.querySelector('#whats');
    let btnEnviar = document.querySelector('#btn-submit');

    let user = {};
    let users = [{nome:'Guilherme Henrique', whatsapp: '21985430032'}, {nome: 'Gabriela Oliveira', whatsapp: '21907658890'}, {nome: 'Cicero Romão', whatsapp: '21978427610'}, {nome: 'Paulo Eduardo', whatsapp: '21965324422'}];

    function _validarCampos(){
        let regexNome = /^[A-Za-z]/i;
        let regexWhatsapp = /^[0-9]{2}[0-9]{5}[0-9]{4}/g;
        if(!inputNome || !inputWhatsapp){
            swal("Por favor preencha todos os campos", "info");
            
        }

        if(!regexNome.test(inputNome.value) || !regexWhatsapp.test(inputWhatsapp.value)){
            swal("Os campos estão com valores não reconhecidos pelo sistema", "Clique no botão para fechar essa janela", "warning");
            
        }
    }


    function _cadastrarUsuario (){
        _validarCampos();
        user = {
            nome: inputNome.value,
            whatsapp: inputWhatsapp.value
        }
        users.push(user);
        swal("Cadastro efetuado com sucesso!", "Clique no botão para fechar essa janela", "success");
    }


    btnEnviar.addEventListener('click', e => {
        e.preventDefault();
        _cadastrarUsuario();
    })
})();