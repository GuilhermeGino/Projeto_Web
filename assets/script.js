function alterar_numero(){
    var p1 = document.getElementById("teste");

    p1.innerText = parseInt(p1.innerText) + 1;
}

function alterar_titulo(){
    var h1 = document.getElementsByTagName("h1");

    if (h1[0].innerText == "My First Heading"){
        h1[0].innerText = "Texto Mudado"
    }else{
        h1[0].innerText = "My First Heading"
    }
}

function executar(){
    var div = document.getElementsByClassName("container_contato");
    div[0].innerHTML = "<p>Agradecemos pelo seu cadastro, entraremos em contato para lhe atualizar sobre novidades e outras coisas!</p>"

}