const files = document.getElementsByClassName("parentFiles");
const fileActionsD = document.getElementById("downloadAction");

console.log(files);

console.log(files.length);

function event(){
    console.log('hovered!!!');
};
for(i=0;i <= files.length; i++){
   files[i].addEventListener('mouseenter', event());
}

// function hover(){
//     files.addEventListener("mouseenter", console.log('Files have been hovered on!'));
// };

// hover();


function redirect(){
    window.location.href = "/user/profile";
};
