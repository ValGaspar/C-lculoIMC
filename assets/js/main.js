function Escopo () {
    const form = document.querySelector('.formulario');
    const mostraValor = document.querySelector('.resultado');

    function recebeEventForm (event){
        event.preventDefault();

        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        const resultado = peso.value / parseFloat(altura.value) ** parseFloat(altura.value);
        //IMC = peso dividido por altura ao quadrado

        if(peso.value == '' || altura.value == '' || /[a-zA-Z]/.test(peso.value) || /[a-zA-Z]/.test(altura.value)){
            mostraValor.innerHTML = `<span> Inválido! Digite novamente. </span>`;
            mostraValor.style.background = 'rgb(228, 84, 84)';
            return;
        }
        
        mostraValor.style.background = 'var(--primary-color-darker)';

        if (resultado < 18.5){
            mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} (Abaixo do peso) </span>`;
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} (Peso normal) </span>`;
        } else if (resultado >=25 && resultado <=29.9){
            mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} (Sobrepeso) </span>`; 
        } else if (resultado >= 30 && resultado <= 34.9){
            mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} (Obesidade grau 1) </span>`;
        } else if (resultado >= 35 && resultado <= 39.9){
            mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} (Obesidade grau 2) </span>`;
        } else if (resultado > 40 ){
            mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} (Obesidade grau 3) </span>`;
        }
    }
    form.addEventListener('submit', recebeEventForm);
}
Escopo();