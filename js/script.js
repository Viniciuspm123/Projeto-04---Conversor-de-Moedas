// script.js

 

// Configuração inicial das taxas de câmbio

const exchangeRates = {

    USD: { BRL: 4.87, EUR: 0.92 },

    EUR: { BRL: 5.30, USD: 1.09 },

    BRL: { USD: 0.21, EUR: 0.19 }

};

 

// Seleciona os elementos do DOM

const amountInput = document.getElementById('amount');

const fromCurrency = document.getElementById('from-currency');

const toCurrency = document.getElementById('to-currency');

const convertButton = document.getElementById('convert-btn');

const resultDisplay = document.getElementById('result');

 

// Adiciona evento de clique ao botão de conversão

convertButton.addEventListener('click', () => {

    const amount = parseFloat(amountInput.value);

    const from = fromCurrency.value;

    const to = toCurrency.value;

 

    // Verifica se os valores são válidos

    if (isNaN(amount) || amount <= 0) {

        resultDisplay.textContent = 'Por favor, insira um valor válido.';

        return;

    }

 

    // Realiza a conversão

    const convertedAmount = convertCurrency(amount, from, to);

    resultDisplay.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;

});

 

// Função para realizar a conversão

function convertCurrency(amount, fromCurrency, toCurrency) {

    if (fromCurrency === toCurrency) {

        return amount;

    }

    const rate = exchangeRates[fromCurrency][toCurrency];

    return amount * rate

}