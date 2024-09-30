const btn = document.getElementById("btn").addEventListener("click",displayDate)
function displayDate(){
    document.getElementById("demo").innerHTML = Date();
    document.getElementById("demo").style.color = "red";
    
    document.getElementById("demo").style.backgroundColor = "green";

    document.getElementById("demo").style.height = "100px";

    document.getElementById("demo").style.width = "500px";
  
    document.getElementById("demo").innerHTML =` <p>This Is Current Time :</p> ${new Date()}`

}

let marks = [85,97,44,37,76,60];

let sum = 85+97+44+37+76+60;
let res= sum;
console.log(res);

let avg = res / marks.length;
console.log(avg)
// for( let sum1 = 0; sum1<marks.length; sum1++){

// }

// for(let sum of marks.length) {
  
//   console.log(sum/res )
// }