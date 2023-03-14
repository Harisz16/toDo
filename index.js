'use strict';
//dom
const btnAdd = document.querySelector('.searchBtn');
const input = document.querySelector('.searchbox');
const tododiv = document.querySelector('.toDos');
const done = document.querySelector('.done');
const tb = document.querySelector('.tbb');
const tr = document.querySelector('.trr');
const box = document.querySelector('.box');
btnAdd.addEventListener('click', () => {
  const html = `<tr>
  <div class="list" >
          <input type="checkbox" class="box" name="" id="" />
          <label for="" class="todo">${input.value}</label>
        </div></tr>`;
  tb.insertAdjacentHTML('afterbegin', html);
  console.log(input.value);
});
tododiv.addEventListener('click', e => {
  e.target;
  console.log(e.target.parentElement.innerHTML);
  //console.log(e.target);
  if (e.target.classList.contains('box')) {
    const link = e.target;

    e.target.parentElement.setAttribute('id', 'sd');
    let el = e.target.parentElement.innerHTML;
    tr.insertAdjacentHTML('afterbegin', el);
    // $('#sd').detach().appendTo('#er');
    el = '';
  }
});
done.addEventListener('click', e => {
  e.target;
  console.log(e.target.parentElement.innerHTML);
  //console.log(e.target);
  if (e.target.classList.contains('box')) {
    const link = e.target;

    e.target.parentElement.setAttribute('id', 'sd');
    let el = e.target.parentElement.innerHTML;
    tb.insertAdjacentHTML('afterbegin', el);
    el = '';
    // $('#sd').detach().appendTo('#er');
  }
});
