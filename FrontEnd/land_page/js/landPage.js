

(() =>{
    let inputNome = document.querySelector('#name');
    let inputWhatsapp = document.querySelector('#whats');
    let btnEnviar = document.querySelector('#btn-submit');
    const url = 'http://localhost:9090/usuario';

    let info = {};
    let options = {};
    function _validarCampos(){
        let regexNome = /^[A-Za-z]/i;
        let regexWhatsapp = /^[0-9]{2}[0-9]{5}[0-9]{4}/g;
        if(!inputNome || !inputWhatsapp){
            alert('Por favor preencha todos os campos');
        }

        if(!regexNome.test(inputNome.value) || !regexWhatsapp.test(inputWhatsapp.value)){
            alert('Por favor preencha os campos corretamente');
        }

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
        fetch(url, options)
        .then(response => response.json())
        .then(response => {
            alert('Success:', response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


    btnEnviar.addEventListener('click', e => {
        e.preventDefault();

        _cadastrarUsuario();
    })
})();