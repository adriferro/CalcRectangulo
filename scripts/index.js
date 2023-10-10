const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    
    let perimetro = document.getElementById("perimetro");
    let area = document.getElementById("area");

    perimetro.innerHTML = `El perímetro es: ${(2 * ancho) + (2 * largo)}`;

    const resultarea = ancho * largo;
    area.innerHTML = `El área es: ${resultarea}`;
})
