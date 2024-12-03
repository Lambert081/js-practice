let firstName = "uzoma"
let lastName = "lambert"
let h2Elem = document.getElementById ("name")
console.log("h2Elem")
h2Elem.style.color = "red"
h2Elem.innerHTML = firstName + lastName

let h1Elem = document.getElementById ("Welcome")
h1Elem.innerHTML = "welcome to function class"

let p = document.querySelector(".css");
console.log(p)
p.innerHTML = "introduction to function";
p.style.fontSize = "100px";

let change = document.getElementById("change");
console.log(change)
change.addEventListener("click", () =>{
    h1Elem.style.color = "blue";
    h2Elem.style.display = "none"
});

let btn = document.querySelector(".btn")
console.log("btn")
btn.addEventListener("click", () =>{
    document.write("I have erased everything!");
})

// function addNums(){
    // let result = 10 + 5
    // console.log(result)
// }
// addNums();

function addNum(a,b){
    let result = a + b;
    console.log("result")
}
addNum(5,7);
console.log(addNum)

function changebtn(){
    change.style.backgroundColor = "orange";
    change.style.padding = "10px"
}
// changebtn()

function onmouse(){
    change.style.backgroundColor = ""
    change.style.padding = ""
    console.log("mouse out")
}

let text = "tinubu"

function showMessage(){
     text = "Johnbull"
    console.log("hello" + " " + text)
}
console.log(text)
showMessage ()
console.log(text)

function showText (text){
    alert ("hello" + " " + text)
}

showText ("great")
showText ("promise")

let customers = ["calab", "david", "chinazo", "wisdon"];

function senderNewYear(sender, customers, message){
    console.log(`${sender}: Hello ${customers}, ${sender} ${message}`)
} 

senderNewYear ("uba", customers[1], "wishes you a happy new year");

let people = ["calab", "david", "chinazo", "wisdon"];

function sendNewYear (sender, customers, message){
    console.log(`${sender}: Hello ${people}, ${sender} ${message}`)
} 

senderNewYear ("first bank", people[2], "wishes you a happy new year");

function mulNum (x, y){
    let product = x * y;
    console.log(product);
    return product;
    console.log(product);
}
mulNum(5, 4);
// let c = product
console.log(p)

const student = ["uzoma", "bullion van", "chima", "promise", "chioma", 
    "Amaka", "grace", "chika", "lambert","chidalu" ];

function sendBirthday(sender, message, studentName){
    console.log(`${sender}: Hello ${studentName}, ${sender}, $[message]`)
}    
for (let item = 0; item < student.length + 1; item++) {
    sendBirthday("Firt bank", "wishes you a birthday happy birthday!", student[item]);

} 

function count(p) {
    for (let n =0; n <= p; n++) {
        console.log(n);
    }
}

count(10);
count(15);

function selectEven_Odd(p) {
    for (let n =0; n <= p; n++) {
        if(n % 2 == 0) {
            console.log(n + " is an even number")
        } else {
            console.log(n + " is an odd number")
        }
    }
}

selectEven_Odd(100)

const user = ["uzoma", "bullion van", "chima", "promise", "chioma", 
    "Amaka", "grace", "chika", "lambert","chidalu", "praise" ];

function searchUser() {
    // let searchItem = prompt("search user here");
    let searchItem = searchInput.value;
    let searchData = searchItem.toLowerCase();

    // console.log(searchItem);
    // console.log(searchData);
    if(user.includes(searchData)){
        // alert("user exist");
        resultElem.innerHTML = "user exists!"
        resultElem.style.color = "red"
    }else {
        // alert("not our user");
        resultElem.innerHTML = "not our user";
        resultElem.style.color = "blue"
    }
     
    
} 

searchUser()

let searchinput=document.getElementById("input")
let searchbtn=document.getElementById("btn")
let resultElem = document.querySelector("search-span")