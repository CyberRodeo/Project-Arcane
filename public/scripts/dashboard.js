// const parentFiles = document.getElementsByClassName('parentFiles');
// const downloadBtn = document.getElementsByClassName('filesActions');

// const files = Array.from(parentFiles);
// const actions = Array.from(downloadBtn);

// console.log(actions);
// const fl = files.length;
// console.log(fl);

// function shows(s){
//     for(i = 0; i < actions.length; i++){
//         s[i].classlist.add('shows');
//         s[i].classlist.remove('hides');
//     };  
// };

// function hides(h){
//     for(i = 0; i < actions.length; i++){
//         h[i].classlist.add('hides');
//         h[i].classlist.remove('shows');
//     };
// };


// for(const Files of files){
//     Files.addEventListener('mouseenter', shows(actions), false);
//     Files.addEventListener('mouseleave', hides(actions), false);
// };

function redirect(){
    window.location.href = "/user/profile";
};

function editpage(){
    window.location.href = "/27482390648129074829407/edit"
}

function deletefile(){
    window.location.href = "/delete"
};