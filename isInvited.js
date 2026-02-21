function isInvited(name){
    let invited = false;
    for (let i = 0; i < name.length; i++){
        if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u') {
            invited = true;
            break;
        }   
    }
    return invited;
}

isInvited("Brutus"); // true
isInvited("Cassius");