const files = document.getElementsByClassName('parentFiles');
const actions = document.getElementsByClassName('download');

console.log(actions);
const fl = files.length;
console.log(fl);

function shows(){
    actions.classlist.add('shows');
    actions.classlist.remove('hides');
    console.log('hovered out!');
};

function hides(){
    actions.classlist.add('hides');
    actions.classlist.remove('shows');
    console.log('hovered in!');
}

for(i = 0; i <= fl; i++){
    files[i].addEventListener('mouseenter', shows());
    files[i].addEventListener('mouseleave', hides());
}


files.addeventlistener('mouseenter', shows());
files.addeventlistener('mouseleave', hides());