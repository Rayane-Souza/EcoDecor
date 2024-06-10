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

