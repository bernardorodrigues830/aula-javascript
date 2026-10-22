//getAttribute - obter valor do atributo (Valor da linha)
//setAttribute - definir ou modificar o valor da linha

function changeImage() {
    const img = document.getElementById("myImage");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "Imagem1.png") {
        img.setAttribute("src", "imagem2.png");
        img.setAttribute("alt", "Imagem Real Madrid");
    } else { //caso contrario realize o processo inverso
        img.setAttribute("src", "Imagem1.png");
        img.setAttribute("alt", "Imagem Botafogo");
    }

}