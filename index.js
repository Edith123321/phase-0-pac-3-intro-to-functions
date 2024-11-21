// Follow along with the examples here
function sayHello (){
    console.log("hello");
}

sayHello();

function sayHelloTo (firstname){
    console.log(`Hello ${firstname}`)
}
sayHelloTo("Edith")

function say (greeting, firstname) {
    console.log(`${greeting}, ${firstname}} !`)
}

say("Habibi, Edith")

function sayMe(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }

  sayMe()