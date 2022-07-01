let path_selected
let id_selected

const showModalDeletar = function(path, id){
    path_selected = path
    id_selected = id
    $('#modalDeletar').modal('show')
}

var input_cnpj = document.getElementById("campoCNPJ").value
      
input_cnpj.forEach(el => {
  el.addEventListener('input', (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
    console.log(e.target.value);
    if (e.target.value) {
      if (e.target.value == "00.000.000/0000-00" || 
        e.target.value == "11.111.111/1111-11" || 
        e.target.value == "22.222.222/2222-22" || 
        e.target.value == "33.333.333/3333-33" || 
        e.target.value == "44.444.444/4444-44" || 
        e.target.value == "55.555.555/5555-55" || 
        e.target.value == "66.666.666/6666-66" || 
        e.target.value == "77.777.777/7777-77" || 
        e.target.value == "88.888.888/8888-88" || 
        e.target.value == "99.999.999/9999-99") {
          // el.value = ''
          e.target.value = ''
          console.log("teste funcao nova")
      }
    }
  })
});

const deletar = function(){
    if (path_selected != "" && id_selected != ""){
        window.location.href='/' + path_selected + '/delete/' + id_selected
    }
}

// const verificarCep = function(){
//     let cep = $('#floatingInputCep').val().replace(/[^0-9]/,'')
//     if (cep){
//         let url = 'http://opencep.com/v1/' +  cep
//         alert(url)
//         $.ajax({
//             url: url,
//             method:'GET',
//             dataType: 'json',
//             contentType: "application/json",
//             success: function(json){
//                 console.log("voltou");
//                 if(json.logradouro){
//                     $('#floatingInputRua').val(json.logradouro)
//                     $('#floatingInputBairro').val(json.bairro)
//                     $('#floatingInputCidade').val(json.localidade)
//                     $('#floatingInputUF').val(json.estado)
//                 }
//             }
//         })

//     }
// }

const verificarCep = function(){
        let cep = $('#floatingInputCep').val().replace(/[^0-9]/,'')
        if (cep){
            let url = '/endereco/' +  cep
            $.ajax({
                url: url,
                method:'GET',
                dataType: 'json',
                contentType: "application/json",
                success: function(json){
                    if(json.logradouro){
                        $('#floatingInputLogradouro').val(json.logradouro)
                        $('#floatingInputComplemento').val(json.complemento)
                        $('#floatingInputBairro').val(json.bairro)
                        $('#floatingInputLocalidade').val(json.localidade)
                        $('#floatingInputUF').val(json.uf)
                    }
                }
            })
    
        }
    }