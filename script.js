let boxes = document.querySelectorAll(".box");
let outPut = document.getElementById("output-box");
let delet = document.getElementById("delet");
let enter = document.getElementById("enter");
let On = document.getElementById("On");
let clean = document.getElementById("clean");


let sample = 0;
let arr = [];
let n1="";
let n2="";
let oprator ="";
let c=0;

boxes.forEach(box => {
    box.addEventListener("click", function() {
        sample = box.innerText;
        if (sample != "x" && sample != "On" && sample != "Off" && sample != "=")  {
                  if(sample == "+" || sample == "-" || sample =="*" || sample =="/"){
                    oprator=sample;
                    if(c==0){
                      c=1;
                    }
                    else{
                      c=0;
                    }
                  }
                  else if(c==0){
                    n1+=sample;
                    console.log("n1="+n1);
                  
                  }
                  else if(c==1){
                    n2 +=sample;
                    console.log("n2="+n2)
                  }

            arr.push(sample);
            outPut.innerText = arr.join('');

       
           
        }

        enter.addEventListener("click",function(){
         outPut.innerText = calculate(parseFloat(n1),parseFloat(n2),oprator);
      

        });


       

    });
});

delet.addEventListener("click", function() {
    arr.pop();
    outPut.innerText = arr.join('');
    outPut.scrollLeft=outPut.scrollWidth// Scroll to the right
});

/*

enter.addEventListener("click",function(){
if(oprator=="+"){
  outPut.innerText = Number(n1.join('')) + Number(n2.join(''));
}
else if(oprator =="-"){
  outPut.innerText = Number(n1.join('')) - Number(n2.join(''));

}
else if(oprator == "*"){
  outPut.innerText = Number(n1.join('')) * Number(n2.join(''));

}
else if(oprator == "/"){
  outPut.innerText = Number(n1.join('')) / Number(n2.join(''));

}

n1=[];
n2=[];
arr=[];
})*/



let btn =0;
On.addEventListener("click",function(){
  if(btn==0){
  document.body.classList.add("animated");
  On.innerText="Off";
  }
  else{
    document.body.classList.remove("animated");
    On.innerText="On";
  }
  if(btn==0){
    btn=1;
  }
  else{
    btn=0;
  }
});

clean.addEventListener("click",function(){
outPut.innerText= " ";
arr=[];
n1="";
n2="";


})

function calculate(n1,n2,oprator){
  switch(oprator){
    case "+": return n1+n2;
    case "-": return n1-n2;
    case "*":return n1*n2;
    case "/": return n1/n2;
  }
}