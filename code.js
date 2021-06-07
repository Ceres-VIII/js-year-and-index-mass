let year = +prompt("Enter year");

if(year%4 == 0) {
    if(year%100 == 0) {
        if(year%400 == 0) {
            alert("высокосный");
        }
        else
        alert("не высокосный");
    }
    else
        alert("высокосный");
}else{
    alert("не высокосный");
}


let weight = +prompt("Enter weight (in kg)");
let height= +prompt("Enter height (in m)");

let index  = weight / (height**2) 
console.log(index)

if (index < 16) {
    console.log('Выраженный дефицит массы тела');
}else if (16 < index && index < 18.5){
    console.log("Недостаточная (дефицит) масса тела");
}else if (18.5 < index && index < 25){
    console.log("Норма") ;
}else if (25 < index && index< 30){
    console.log("Избыточная масса тела (предожирение)");
}else if (30 < index && index< 35){
    console.log("Ожирение 1 степени");
}else if (35 < index && index < 40){
    console.log("Ожирение 2 степени");
}else{
    console.log("Ожирение 2 степени");
}