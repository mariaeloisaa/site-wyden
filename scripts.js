document.getElementById('cadastro').addEventListener('click', function(event){
    window.location.href = "cadastro.html"
})

document.getElementById('beneficio').addEventListener('click', function(event){
    window.location.href = "beneficio.html"
})

document.getElementById('home').addEventListener('click', function(event){
    window.location.href = "index.html"
})

document.getElementById('necessario').addEventListener('click', function(event){
    window.location.href = "necessario.html"
})

document.getElementById('origem').addEventListener('click', function(event){
    window.location.href = "origem.html"
})



// conectar back

function teste()  {
    const tituloProduto = document.getElementById('tituloProduto'); 
    const preco = document.getElementById('preco');
    const descricao = document.getElementById('descricao');
    const catProduto = document.getElementById('catProduto');
    console.log(tituloProduto, preco, descricao, catProduto);
    let fd = new FormData();
    fd.append("tituloProduto", tituloProduto.value);
    fd.append("preco", preco.value);
    fd.append("descricao", descricao.value);
    fd.append("catProduto", catProduto.value);

    fetch("http://localhost:8000/api/produtos", {
        method: 'POST',
        body: fd
    }).then((res) => {
        console.log(res.json);
    }).catch((err) => console.error(err))
}