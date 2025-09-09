let count=0;


function addTask(){
        count++;
    
    let wrapper=document.createElement("div");


    let label=document.createElement("label");
    label.innerText= count+".";
    //document.getElementById("inputArea").appendChild(label);



    let input=document.createElement("input");
    input.type="text";
    input.placeholder="Enter Task";
    // document.getElementById("inputArea").appendChild(input).style.background="lightblue";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";



    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(checkbox); 

    document.getElementById("ToDo").appendChild(wrapper);



}