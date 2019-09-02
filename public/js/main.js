var  lc=document.querySelector('#logincontainer');
var  rc=document.querySelector('#registercontainer');
var rc1=document.querySelector('#register-tab');
var lc1=document.querySelector('#login-tab');
var rc2=document.querySelector('.registerlink');
var lc2=document.querySelector('.loginlink');

rc1.addEventListener('click',function(){
    registeractive();
})
lc1.addEventListener('click',function(){
    loginactive();
})
rc2.addEventListener('click',function(){
    registeractive();
})
lc2.addEventListener('click',function(){
    loginactive();
})


//document.querySelector("#register-tab").addEventListener("click",function(){
   // this.classList.toggle("active");
//})
//document.querySelector("#login-tab").addEventListener("click",function(){
   // this.classList.toggle("active");
//})

function loginactive(){
    lc.style.display="block";
    rc.style.display="none";
    lc1.classList.add("active");
    rc1.classList.remove("active");
}
function registeractive(){
    lc.style.display="none";
    rc.style.display="block";
    rc1.classList.add("active");
    lc1.classList.remove("active");

}

