import { getAll, remove } from './db.js';

const table = document.querySelector('table.table');

const generateTable = (tableRows = []) => {
    const keys = Object.keys(tableRows[0]);

    // Thead
    const thead =document.createElement('thead');
    table.appendChild(thead)

    const tr =document.createElement('tr');
    thead.appendChild(tr);

    keys.forEach( keys => {
        const th =document.createElement('th');
        tr.appendChild(tr);
        th.innerText = keys;
    });

    // Tbody
    const tbody =document.createElement('tbody');
        table.appendChild(tbody);
        
        keys.forEach( keys => {
            const td =document.createElement('td');
            tr.appendChild(td);
            th.innerText = row[keys];
});
const td =document.createElement('td');
tr.appendChild(td);

const btnGroup = document.createElement('div');
td.appendChild(btnGroup);
btnGroup.classList.add('btn-group');

const deleteBtn = document.createElement('button');
btnGroup.appendChild(deleteBtn);
deleteBtn.classList.add('btn','btn-danger');
deleteBtn.innerHTML = '<i class= "fa fa-trash"></i>';
deleteBtn.addEventListener('click', () =>{
    if (confirm('Biztos hogy törli a sort?')){
        await remove(row.id);
        tr.parentElement.removeChild
    }

})

getAll().then( data => generateTable(data) );