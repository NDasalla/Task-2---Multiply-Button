import { add, multiply } from "./math";


const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const updateDomWithAddedNumbers = () => {
        result.innerHTML =  "The numbers added together equals " + add(number1.value,number2.value);
    }
    const updateDomWithMultipliedNumbers = () => {
        result.innerHTML =  "The numbers multiplied together equals " + multiply(number1.value,number2.value);
    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);

}

export  {eventHandler};