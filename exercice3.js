var string = "une phrase sans majuscule";
console.log(string.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' '));