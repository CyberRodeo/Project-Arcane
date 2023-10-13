const text = document.getElementsByClassName('file-text');
const inp = document.getElementById('file-inp');


function backpage(){
    history.back();
}

function changeText(event){
    if(event.target.length > 0){
        const name = inp.files[0].name;
        text.innerHtml = name;
    }
};
