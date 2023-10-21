let button = document.querySelector(".button2");
let task= document.querySelector(".show");
let icon =document.querySelector(".show .input-tasgel .i-tas");
let body = document.querySelector("body")
let spinner = document.querySelector(".top")
let task2 =document.querySelector(".show3")
let button2 =document.querySelector(".buttons .button1")
let icon2 =document.querySelector(".show3 .input-tasgel3 .i-tas3 ")
let navicon=document.querySelector(".toogle i")
let nav = document.querySelector(".responsive-nav")
function show(){
    if(task.style.opacity='0'){
        task.style.opacity='1';
        task.style.zIndex = "auto";
        body.style.backgroundColor('rgba(0, 0, 0, 0.4)')
    }
    else{
        task.style.opacity='0';
        body.style.backgroundColor('white')

    }} 
    function show2(){
        if(task2.style.opacity='0'){
            task2.style.opacity='1';
            task.style.zIndex = "auto";
            body.style.backgroundColor('rgba(0, 0, 0, 0.4)')
        }
        else{
            task2.style.opacity='0';
            body.style.backgroundColor('white')
        }}  


        function print2(){
            if( task2.style.opacity='1'){
                task2.style.opacity='0';
            }else{
                task2.style.opacity='0';
            }
            }

    function print(){
    if( task.style.opacity='1'){
        task.style.opacity='0';
    }else{
        task.style.opacity='0';
    }
    }
    window.addEventListener("scroll", function(){
        let x = window.scrollY;
        if (x > 500) {
            spinner.style.opacity =1
        }else{
            spinner.style.opacity =0

        }
     
     })
     function navaction(){
        if (nav.style.height == 0) {
            nav.style.height = nav.scrollHeight + "px";
        } else {
            nav.style.height = null;
        }
     }
     navicon.addEventListener("click", navaction);
     button.addEventListener("click", show ,print)
     button.addEventListener("dblclick",print)
     button.addEventListener("click",print2)
     icon.addEventListener("click", print)
     icon2.addEventListener("click", print2)
     button2.addEventListener("click", print)
     button2.addEventListener("click", show2)

   
   