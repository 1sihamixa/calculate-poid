let One = document.getElementById("inputOne");
let Two = document.getElementById("inputTwo");
let sub = document.getElementById("submit");
let min = document.getElementById("mince");
let moy = document.getElementById("moyen");
let lar = document.getElementById("large");
let result = document.getElementById("res");
let obj = {};
sub.addEventListener("click",function(){
    if(min.checked){
        result.innerHTML = `${(One.value-100+Two.value/10)*0.9*0.9}`;
        document.getElementById("par").innerHTML= "votre poids ideal";
    }else if(moy.checked){
        result.innerHTML = `${(One.value-100+Two.value/10)*0.9}`;
        document.getElementById("par").innerHTML= "votre poids limite";
    }else{
        result.innerHTML = `${(One.value-100+Two.value/10)*0.9*1.1}`;
        document.getElementById("par").innerHTML= "votre poids large";
    }
obj[`${One.value} - ${Two.value}`] = result.innerHTML;
let js = JSON.stringify(obj);
localStorage.setItem("Data",js);
});

