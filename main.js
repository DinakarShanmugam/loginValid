

document.querySelector("#but").addEventListener("click",fun);
function fun(){
  var validRegex = /[a-z]+[0-9]*@[a-z]+.com/;
  let b=document.querySelector(".b2").value;
  let a=document.querySelector(".b1").value;
  console.log(a+" "+b)
  if (!a.match(validRegex)) {
    alert("Invalid email address!");
  }
  var passw= /.*[A-Z]+[0-9]+[@#$%!^&*]+.*/;
  if(!b.match(passw)){
  alert('Invalid password');
  }
}

