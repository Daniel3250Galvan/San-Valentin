let contadorNo = 0;
const maxNo = 5;

const btnNo = document.getElementById("btnNo");
const btnSi = document.getElementById("btnSi");
const contenedorImagenes = document.getElementById("imagenesTristes");
const mensajeFinal = document.getElementById("mensajeFinal");
const mensajeNo = document.getElementById("mensajeNo");

const mensajes = [
    "¿Segura? 😢",
    "Me estoy poniendo triste...",
    "Eso duele mucho 💔",
    "Mi corazón se está rompiendo...",
    "¡Última oportunidad! ¡No me abandones! 😭"
];

btnNo.addEventListener("click", () => {

    if (contadorNo >= maxNo) return;

    contadorNo++;

    mensajeNo.textContent = mensajes[contadorNo - 1];
    mensajeNo.classList.remove("dramatico");
    void mensajeNo.offsetWidth;
    mensajeNo.classList.add("dramatico");

    contenedorImagenes.innerHTML = "";

    const img = document.createElement("img");

    // ✅ RUTA CORRECTA PARA GITHUB PAGES
    img.src = `Content/img/triste${contadorNo}.jpeg`;

    contenedorImagenes.appendChild(img);

    btnNo.style.transform = `scale(${1 - contadorNo * 0.15})`;
    btnSi.style.transform = `scale(${1 + contadorNo * 0.20})`;

    moverBotonNo();

    if (contadorNo === maxNo) {
        setTimeout(() => btnNo.style.display = "none", 300);
    }
});
