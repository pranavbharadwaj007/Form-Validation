console.log("hello world 0");
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
let validn=false;
let valide=false;
let validp=false;


console.log(name,email,phone);
name.addEventListener('blur',()=>{
    console.log("name is blurr");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,15}$/;
    let str=name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('it matched');
        name.classList.remove('is-invalid');
        validn=true;
    }
    else{
        console.log('no match');
        name.classList.add('is-invalid');
        validn=false;
    }
})
email.addEventListener('blur',()=>{
    console.log("email is blurr");
    console.log("name is blurr");
    let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-z]){2,7}$/;
    let str=email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('e mail it matched');
        email.classList.remove('is-invalid');
        valide=true;
    }
    else{
        console.log('e mail no match');
        email.classList.add('is-invalid');
        valide=false;
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurr");
    console.log("name is blurr");
    let regex = /^[0-9]{10}$/;
    let str=phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log('phone it matched');
        phone.classList.remove('is-invalid');
        validp=true;
    }
    else{
        console.log('phone no match');
        phone.classList.add('is-invalid');
        validp=false;
    }
})

let submit=document.getElementById('sbmt');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("u clicked");
    if(validp && validn&&valide){

        let success=document.getElementById('success');
        success.classList.add('show');
        fail.classList.remove('show');
      
        
    }
    else{
        let fail=document.getElementById('fail');
        fail.classList.add('show');
        success.classList.remove('show');
    
    }
})
