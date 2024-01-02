const files = document.getElementsByClassName('parentFiles');
const filesActions = document.getElementsByClassName('filesActions');

console.log(files[0]);
const fl = files.length;
console.log(fl);

function shows(){
    filesActions.classlist.add('shows');
    filesActions.classlist.remove('hides');
    console.log('hovered out!');
};

function hides(f){
    filesActions.classlist.add('hides');
    filesActions.classlist.remove('shows');
    console.log('hovered in!');
}

// for(i = 0; i <= fl; i++){
//     files[i].addEventListener('mouseenter', shows);
//     files[i].addEventListener('mouseleave', hides);
// }


files.addeventlistener('mouseenter', shows());
files.addeventlistener('mouseleave', hides());