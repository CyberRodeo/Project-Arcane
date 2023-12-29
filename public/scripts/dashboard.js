const files = document.getElementsByClassName("files");
const fileActions = document.getElementsByClassName("actionsBtn");

console.log(files, fileActions);

for(i = 0; i <= files.length; i++){
    files[i].addEventListener('mouseenter', ()=>{
        fileActions[i].classlist.add('hide');
    });
};

function redirect(){
    window.location.href = "/user/profile";
};
