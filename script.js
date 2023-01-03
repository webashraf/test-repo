const string = 'Hello Bangladesh. I am ali ashraf tamimmmmmmmMMM . From Bangladesh. I ammmmmmmmmmmmmmmmmmmmmmmm a junior mearn stuck web developer.'
// const result = string.split(' ');
// console.log(result)


const largeWord = (string, num) =>{
if(string.length > num){
    return string.slice(0, num) + '......';
}
}
console.log(largeWord(string, 5));

