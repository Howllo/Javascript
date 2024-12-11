let counter = 0;
let currentSelected = "";

function constructLi(value){
    const liElement = document.createElement("li");
    liElement.textContent = value;
    liElement.id = `li-${counter}`;
    liElement.className = "unselect";

    liElement.addEventListener("click", (e) =>{
        const liElement = e.target;

        liElement.className = "select";
        
        if(currentSelected.length > 0 && currentSelected != liElement.id){
            document.getElementById(currentSelected).className = "unselect";
        }

        currentSelected = liElement.id;
        document.getElementById("selected-box").value = liElement.innerText;
    });

    ++counter;

    return liElement;
}

function addToList(){
    const addItemBox = document.getElementById('add-box');

    if(addItemBox.value.length === 0){
        return;
    }

    const liElement = constructLi(addItemBox.value);
    const list = document.querySelector("#myUL");
    list.appendChild(liElement);

    addItemBox.value = "";
}

function deleteElementList(){
    if(currentSelected.length === 0){
        return;
    }

    document.getElementById(currentSelected).remove();
    currentSelected = "";
    document.getElementById("selected-box").value = "";
}

function editElementList(){
    if(currentSelected.length === 0){
        return;
    }

    const editElement = document.getElementById(currentSelected);
    const editBoxContent = document.getElementById("edit-box");
    const selectBoxContent = document.getElementById("selected-box")

    editElement.innerText = editBoxContent.value;

    editBoxContent.value = "";
    selectBoxContent.value = "";
}