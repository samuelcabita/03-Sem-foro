const ImagemVermelha='./img/vermelho.png';
const ImagemAmarela='./img/amarelo.png';
const ImagemVerde='./img/verde.png';
const ImagemMain = document.querySelector('img');
const BtnGrupo= document.querySelectorAll('button');

//função Que quando clicado trocal a imagem padrão pela vermelha
BtnGrupo[0].addEventListener('click',()=>{
    ImagemMain.src=ImagemVermelha;
});

//função Que quando clicado trocal a imagem padrão pela Amarela
BtnGrupo[1].addEventListener('click',()=>{
    ImagemMain.src=ImagemAmarela;
});

//função Que quando clicado trocal a imagem padrão pela verde
BtnGrupo[2].addEventListener('click',()=>{
    ImagemMain.src=ImagemVerde;
});

//Funcao Aumatico;
BtnGrupo[3].addEventListener('click',function Auto(){
    
    setTimeout(() => {
       ImagemMain.src=ImagemVermelha;
       ImagemMain.src=ImagemAmarela;
    }, 3000); // Tempo do vermelho

    // Depois de 5 segundos (3s vermelho + 2s amarelo), muda para o verde
    setTimeout(() => {
        ImagemMain.src=ImagemAmarela;
        ImagemMain.src=ImagemVerde;
    }, 5000); // Tempo do amarelo

    // Depois de 8 segundos (3s vermelho + 2s amarelo + 3s verde), volta ao vermelho
    setTimeout(() => {
        ImagemMain.src=ImagemVerde;
        ImagemMain.src=ImagemVermelha;
    }, 8000); // Tempo do verde


 // Inicia imediatamente
setInterval(Auto, 8000); // Repetir a cada 8 segundos
});