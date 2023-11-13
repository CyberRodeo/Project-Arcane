
const inp = document.getElementById('file-inp');


function backpage(){
    history.back();
}

function changeText(){
    if(inp.files.length > 0){
        var text = document.getElementById('text');
        var name = inp.files[0].name;
        text.innerText = "You have chosen: \n" +name;
    }    
};
