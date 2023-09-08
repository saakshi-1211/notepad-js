const title=document.querySelector(".title");
const notepad= document.querySelector(".textarea");
const save=document.querySelector(".save");
const reset=document.querySelector(".reset");

title.value=localStorage.getItem('first');
notepad.value =localStorage.getItem('note') ;

save.addEventListener('click', function(){
    const first=title.value;
    const note=notepad.value;
    localStorage.setItem('first', first);
    localStorage.setItem('note', note);
});

reset.addEventListener('click', function(){
    title.value='';
    notepad.value='';
    localStorage.removeItem('first');
    localStorage.removeItem('note');
});