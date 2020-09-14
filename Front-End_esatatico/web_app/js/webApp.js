(() => {
    //GET toda lista de pessoas participando por meio do cadastro na land_page
    const url = 'http://localhost:9090/usuario';
    function _mostrarTodosAsPessoas(){
        let listaBackup = [];
        fetch(url)
        .then(response => response.json())
        .then(response => listaBackup = response)
        .catch(err => console.log(err));
    }
})()

(() => {
    //GET de uma pessoa apenas pelo codigo
    const url = `http://localhost:9090/usuario/`;
    let pessoa = {};
    function _pegarPorCodigo(codigo){
        fetch(url + codigo)
        .then(response => response.json())
        .then(response => pessoa = response)
        .catch(err => console.log(err));
    }
})()

(() => {
    //GET lista de todos os funcionarios
    const url = 'http://localhost:9090/funcionario';
    let listaBackup = [];
    function _pegarTodosOsfuncionarios(){
        fetch(url)
        .then(response => response.json())
        .then(response => listaBackup = response)
        .catch(err => console.log(err));
    }
})()

(() => {
    //GET de um e apenas um funcionario pelo codigo
    const url = `http://localhost:9090/funcionario/`;
    let funcionario = {};
    function _pegarPorCodigo(codigo){
        fetch(url + codigo)
        .then(response => response.json())
        .then(response => funcionario = response)
        .catch(err => console.log(err));
    }
})()