title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

const stringWithoutFormatting = title + ' ' +  name +  ' ' + surname + '\n'
    + 'ul.' +  ' ' + street + '\n' + zip +  ' ' + city + '\n' + country
const stringWithFormatting = `${title} ${name} ${surname}
ul. ${street}
${zip} ${city}
${country}`


console.log(stringWithoutFormatting)
console.log(stringWithFormatting)
/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
