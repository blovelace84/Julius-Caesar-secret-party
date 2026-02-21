console.log("Julius Caesar is hosting a secret party!");

const guests = ["Brutus", "Cassius", "Mark Antony", "Octavius", "Cicero"];

guests.forEach(guest => {
    for (let i = 0; i < guest.length; i++){
        if (guest[i] === 'a' || guest[i] === 'e' || guest[i] === 'i' || guest[i] === 'o' || guest[i] === 'u') {
            console.log(`${guest} is invited to the secret party!`);
            break;
        }
    }
})