function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const numMax = 100;
const numMin = 1;
const numArray = [];
let numUtente = [];
let flag = false;
let btn = document.getElementById("submit");

setTimeout(function timeout(){
    alert("Click the play button!")
},0);

btn.addEventListener('click', () =>{
    if(numArray.length === 0){
        let i = 0;
        while(i < 5){
            let nums = getRandomNumber(numMin, numMax);
            if(!numArray.includes(nums)){
                numArray.push(nums);
                i++;
            }
        }
        console.log(numArray);
        
        let app = document.getElementById("app");
        console.log(app);
        for(let i = 0; i < numArray.length; i++){
            let text = numArray.join(" - ");
            app.innerHTML = text;
        }
    }
    // setTimeout(function disappear(){
    //     app.innerHTML = '';
    // }, 1000 * 28)
    setTimeout(function onclick(){
        for(let i = 0; i < 5; i++){
            numUtente[i] = parseInt(prompt("Inserisci i numeri appena visti"));
            console.log(numUtente);
        }
        for(let i = 0; i < numArray.length; i++){
            if(numArray[i] === numUtente[i]){
                flag = true;
            }
        }
        if(flag){
            alert("Complimenti hai inserito i numeri corretti");
            app.innerHTML=numArray;
        }else{
            alert("Peccato, non hai inserito tutti i numeri corretti");
            if(numArray !== numUtente){
                let textNumArray = numArray.join(" - ");
                app.innerHTML ="I numeri corretti sono: "+ textNumArray;
                app.innerHTML += '<br>';
                let textNumUtente =numUtente.join(" - ");
                app.innerHTML +="I numeri inseriti sono: "+textNumUtente;
            }
        }

    },1000)
})


