const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(listOfNames, event) {
    const messages = [];
    for (let i = 0; i < listOfNames.length; i++) {
        messages.push(`Thank you, ${listOfNames[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

console.log(writeCards(["Rob", "Ashley", "Peter"], "birthday"));

function countDown(number) {
    for (let i = parseInt(number, 10); i >= 0; i--){
        console.log(i);
    }
}