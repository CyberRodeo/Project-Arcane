
const inp = document.getElementById('file-inp');


function backpage(){
    history.back();
}

function changeText(){
    if(inp.files.length > 0){
        var text = document.getElementById('text');
        // console.log('Logging text' + text);
        var name = inp.files[0].name;
        text.innerText = "You have chosen: \n" +name;
        // console.log('logging name' + name);
        // console.log('YO HO HO HO, YO  HO HO HO')
    }    
};
