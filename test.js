// #1

function logItems(array){
for (let i = 0; i < array.length; i++){
console.log(`${i + 1} - ${array[i]}`)
}
}

logItems(['Mango', 'Poly', 'Ajax'])

// #2
const message = prompt("напишіть слова для гравіювання");
const pricePerWord = 150;

function calculateEngravingPrice(message, pricePerWord){
    const words = message.split(" ");

    const price = words.length * pricePerWord;

    return price;
}

const totalPrice = calculateEngravingPrice(message, pricePerWord);
console.log(`Загальна вартість : ${totalPrice}`);
