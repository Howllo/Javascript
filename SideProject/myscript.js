let counter = 0;
let hasMessageHappen = false;
let criticalMoment = 10;
let currentClassTag = "";
let savedColor = "";

function buttonClick() {
    alertTooHigh();
    counter = counter + 1;
    document.getElementById("num").innerText = counter;

    const selectOption = document.querySelector("select");

    if(counter === criticalMoment){
        let options = selectOption.options;
        for(let opt of options){
            if(parseInt(opt.value) === criticalMoment){
                opt.disabled = true;
                break;
            }
        }
    }
}

function alertTooHigh(){
    if(!hasMessageHappen && counter >= criticalMoment){
        alert('You are getting too high!');
        hasMessageHappen = true;

        if(document.getElementById("num").classList.length == 0){
            changeCriticalColorManual("0");
        }
    }
}

function changeCritical(in_data) {
    criticalMoment = parseInt(in_data);
    changeCriticalColorManual(savedColor);
    if(in_data > criticalMoment){
        hasMessageHappen = false;
    }
}

function changeCriticalColorManual(color_in){
    savedColor = color_in.toLowerCase();
    const docElement = document.getElementById("num");

    if(docElement.classList.length > 0){
        docElement.classList.remove(currentClassTag);
    }

    if(counter < criticalMoment){
        return;
    }

    if(savedColor === "0"){
        currentClassTag = "counter-text-zero";
    } else if (savedColor === "1") {
        currentClassTag = "counter-text-one";
    } else if (savedColor === "2"){
        currentClassTag = "counter-text-two";
    } else {
        currentClassTag = "counter-text-three";
    }

    document.getElementById("num").classList.add(currentClassTag);
}