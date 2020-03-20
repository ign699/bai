const generateRandomArray = () => {
    const array = []
    for(let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * (20 - 5 + 1)) + 5)
    }
    return array
}


const printArrayContent = (arr) => console.log(arr.join(', '))

printArrayContent(generateRandomArray())
