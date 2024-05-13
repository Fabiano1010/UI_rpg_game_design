const command = document.querySelector('#promptInput');
const textArea = document.querySelector('#textArea');

command.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        var div = document.createElement('div');
        
        textArea.innerHTML+="<div>"+command.value+"</div>";
        command.value="";
    }
});