let stars = document.querySelectorAll('.star-icon')
document.addEventListener('click', function(e){
    var classStar = e.target.classList;
    if(!classStar.contains('ativo')){
        stars.forEach(function(star){
            star.classList.remove('ativo');

        })
        classStar.add('ativo');
        console.log(e.target.getAttribute('data-avaliacao'))
    }
});

const imagens = document.querySelectorAll('.img-container li img');
function trocar(event) {
    const clicada = event.currentTarget;
    const boxPrincipal = document.querySelector('#imgPrincipal')
    boxPrincipal.src = clicada.src;
    boxPrincipal.alt = clicada.alt;
    // console.log(clicada.src);
}
function galeriaClick(imagem) {
    imagem.addEventListener('click', trocar);
}
imagens.forEach(galeriaClick);
const preencherForm = (endereco) => {
    const logradouro = endereco.logradouro || '';
    const bairro = endereco.bairro || '';
    const localidade = endereco.localidade || '';
    const uf = endereco.uf || '';
    
    const endereco0 = `${logradouro}, ${bairro}`;
    document.getElementById('endereco').value = endereco0;
    const complementoEndereco = `${localidade} - ${uf}`;
    document.getElementById('complementoCep').value = complementoEndereco;
    }
const pesquisarCep = async() => {
    const cep = document.getElementById('cepInutTxt').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherForm(endereco);
}
document.getElementById('cepInutTxt')
    .addEventListener('focusout', pesquisarCep);
