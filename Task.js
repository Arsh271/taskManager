let count=1;


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




    wrapper.appendChild(label);
    wrapper.appendChild(input);
    

    document.getElementById("ToDo").appendChild(wrapper);



}