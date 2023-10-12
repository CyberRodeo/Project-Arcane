const text = document.getElementsByClassName('file-text');
const inputBtn = document.getElementsByClassName('upload-file');
const backbtn = document.getElementById('back-link');

// console.log(text, input, backbtn);


inputBtn.addEventListener('change', (e) => {
    alert('hi there!')
});

backbtn.addEventListener('click', (e) => {
    alert('the back link was clicked!')
});

// console.log('this inner text is' + input.innerText);
