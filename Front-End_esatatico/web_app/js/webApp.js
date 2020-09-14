(() => {
    //GET toda lista de pessoas participando por meio do cadastro na land_page
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

    let funcionarios = [{codigo: 1,
        nome: "Iago Murilo Joaquim da Cruz",
        cpf: "32842391543",
        email: "iagomurilojoaquimdacruz-82@msn.com",
        senha: "123456",
        datanascimento: "1956-06-10",
        salario: 6000.0,
        endereco: 1}];

        let funcionario = {};

    function _mostrarTodosAsPessoas(){
      for(user of users){
        console.log(user);
      }
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

    function _apagarUsuario(codigo){
        let usuario = _pegarPorCodigoUsuario(codigo);
        let index = users.indexOf(usuario);
        if(index > -1){
            users.splice(index, 1);
            console.log(users)
        }
    }


    //GET lista de todos os funcionarios

    function _pegarTodosOsfuncionarios(){
        for(funcionario of funcionarios){
            console.log(funcionario);
        }
    }


    //GET de um e apenas um funcionario pelo codigo
    function _pegarPorCodigoFuncionario(codigo){
        for(funcionario1 of funcionarios){
            if(funcionario1.codigo == codigo){
                funcionario = funcionario1
                console.log(funcionario);
                return funcionario;
            }
        }
    }

    function _apagarFuncionario(codigo){
        let funcionario = _pegarPorCodigoFuncionario(codigo);
        let index = funcionarios.indexOf(funcionario);
        if(index > -1){
            funcionarios.splice(index, 1);
            console.log(funcionarios);
        }
    }


})()