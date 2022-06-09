// code your solution here
// function saturdayFun(activity = "roller-skate"){
//     return `This Saturday, I want to ${activity}!`
// }

// function mondayWork(activity1= "go to the office"){
//     return `This Monday, I will ${activity1}.`
// }

// let wrapAdjective = function(style="*") {
//   return function(adjective="special") {
//     return `You are ${style}${adjective}${style}!`
//   }
// }



































function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
// console.log(saturdayFun())

function mondayWork(activity2 = "go to the office"){
  return `This Monday, I will ${activity2}.`
}

let wrapAdjective= function (string = "*"){
  return function (adjective = "special"){
    return `You are ${string}${adjective}${string}!`
  }
  
}