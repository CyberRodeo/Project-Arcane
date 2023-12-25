const files = document.getElementsByClassName("files");
const fileActionsD = document.getElementById("downloadAction");

console.log(files);

console.log(files.length);

function hoverEvent(){
    console.log('hovered!!!');
};


for(i=0;i <= files.length; i++){
   files[i].addEventListener('mouseenter', ()=>{
        fileActionsD.classList.add('hide');
        fileActionsD.classList.remove('show');
        console.log('hovered!');
   });

   files[i].addEventListener('mouseleave', ()=>{
        fileActionsD.classList.add('show');
        fileActionsD.classList.remove('hide');
        console.log('hovered out!');
   });
}


function redirect(){
    window.location.href = "/user/profile";
};
