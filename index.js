const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const peso = $('#peso');
const valorPeso = $('#valorPeso');

const altura = $('#altura');
const valorAltura = $('#valorAltura');

const calcular = $('#calcular');
const resultado = $('#resultado');

onload = () => {
  if (localStorage.getItem('peso') && localStorage.getItem('altura')) {
    peso.value = localStorage.getItem('peso');
    valorPeso.textContent = localStorage.getItem('peso');

    altura.value = localStorage.getItem('altura');
    valorAltura.textContent = (+localStorage.getItem('altura') / 100).toFixed(
      2,
    );

    resultado.textContent = localStorage.getItem('resultado');
  }
};

peso.addEventListener('input', () => {
  valorPeso.textContent = peso.value;
  localStorage.setItem('peso', peso.value);
});

altura.addEventListener('input', () => {
  valorAltura.textContent = altura.value / 100;
  localStorage.setItem('altura', altura.value);
});

calcular.addEventListener('click', (event) => {
  event.preventDefault();

  valorPeso.textContent = peso.value;
  valorAltura.textContent = altura.value / 100;

  const imc =
    valorPeso.textContent / (valorAltura.textContent * valorAltura.textContent);

  let estado = '';

  if (imc < 18.5) {
    estado = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    estado = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    estado = 'Sobrepeso';
  } else if (imc >= 30 && imc <= 34.9) {
    estado = 'Obesidade grau 1';
  } else if (imc >= 35 && imc <= 39.9) {
    estado = 'Obesidade grau 2';
  } else {
    estado = 'Obesidade Mórmida';
  }
  resultado.textContent = `IMC: ${imc.toFixed(2)} (${estado}).`;
  localStorage.setItem('estado', estado);
  localStorage.setItem('resultado', resultado.textContent);
});
