const list = document.querySelector('.memos');
const addForm = document.querySelector('.add');
const alertmsg = document.getElementById('alertmsg');
const search = document.querySelector('.search input');

const saveMemo = memoText => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${memoText}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
    list.innerHTML += html;
}

list.addEventListener('click',e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const memo = addForm.add.value;
    console.log(memo);
    if(memo.length){
        alertmsg.classList.add('hidden');
        saveMemo(memo);
        addForm.add.value = '';
    }
    else{
        alertmsg.classList.remove('hidden');
    }
})

const filterMemo = memo => {

    Array.from(list.children)
    .filter((memotext) => !memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.add('filtered'));


    Array.from(list.children)
    .filter((memotext) => memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.remove('filtered'))

}

search.addEventListener('keyup', e => {
    const searchText = search.value;
    filterMemo(searchText);
});
