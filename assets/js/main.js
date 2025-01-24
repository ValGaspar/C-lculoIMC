function Escopo () {
    //Captura eventode
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

        const nível = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (resultado >= 39.9) {return mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} ${nível[5]}.</span>`;}
        if (resultado >= 34.9) {return mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} ${nível[4]}.</span>`;}
        if (resultado >= 29.9) {return mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} ${nível[3]}.</span>`;}
        if (resultado >= 24.9) {return mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} ${nível[2]}.</span>`;}
        if (resultado >= 18.5) {return mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} ${nível[1]}.</span>`;}
        if (resultado < 18.5) {return mostraValor.innerHTML = `<span> ${resultado.toFixed(3)} ${nível[0]}.</span>`;}

    }
    form.addEventListener('submit', recebeEventForm);
}
Escopo();