const decodificado = document.getElementById("decodificar");
const textarea = document.getElementById("texto_decode");
const btnEncriptar = document.getElementById("encriptar_btn");
const btnDesencriptar = document.getElementById("desencriptar_btn");

function encriptar(msg){
    let newMsg=msg.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/u/gi, 'ufat').replace(/o/gi, 'ober');
    console.log(newMsg);
    return newMsg;
}

function desencriptar(msg){
    let newMsg=msg.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('ufat', 'u').replaceAll('imes', 'i').replaceAll('ober', 'o');
    console.log(newMsg);
    return newMsg;
}

function mostrarResultado(modo){
    if(textarea.value!=="")
        {
            decodificado.innerHTML=`
            <div class="containerDe">
                <div class="textoD" id="textoD">
                    <p>${modo==="encriptar" ? encriptar(textarea.value) : desencriptar(textarea.value)}</p>
                </div>
                <button class="copiar" id="copiar">Copiar</button>
            </div>`;
            
            
            const texto = document.getElementById("textoD").innerText;
            const btnCopiar = document.getElementById("copiar");
            
            const copiarContenido = async () => {
                try {
                await navigator.clipboard.writeText(texto);
                } catch (err) {
                console.error('Error al copiar: ', err);
                }
            }
    
            btnCopiar.addEventListener("click", e => {
                copiarContenido();
                document.querySelector('.notification_copy').classList.toggle('inactive');
                setTimeout(()=> document.querySelector('.notification_copy').classList.toggle('inactive'), 2000)
            })
        }
}

textarea.addEventListener('keydown', e => {
    let regex=/[A-ZzäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/;
    if(regex.test(e.key) & e.key!=='Backspace') e.preventDefault();
});

btnEncriptar.addEventListener('click', e => {
    mostrarResultado('encriptar');
});

btnDesencriptar.addEventListener('click', e => {
    mostrarResultado('desencriptar');
})