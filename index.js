// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}
saturdayFun()
let mondayWork = function (activity="go to the office"){
    return `This Monday, I will ${activity}.`

}
mondayWork()

function wrapAdjective(symbol) {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}

// Test the function
const highlightAdjective = wrapAdjective('*');
console.log(highlightAdjective('a hard worker')); 
// function wrapAdjective(me ="You are"){
//     return function(message, symbol){
//         return`${me} ${symbol}${message}${symbol}!`

//     }
// }
// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
    