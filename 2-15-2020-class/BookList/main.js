//DATA 

const Headers = ['Title', 'Author', 'Price', 'ISBN', 'Date'];
let rows = [
    {

        title: 'Book 1',
        author: 'John Doe',
        price: 24,
        isbn: '1555335',
        date: new Date('4-12-1996').toLocaleDateString()
    }, {

        title: 'Book 2',
        author: 'Steve Smith',
        price: 37,
        isbn: '1555338',
        date: new Date('6-19-1997').toLocaleDateString()
    },
    {
        title: 'Book 3',
        author: 'Martin John',
        price: 75,
        isbn: '123547',
        date: new Date('3-16-2000').toLocaleDateString()
    }, {

        title: 'Book 4',    //book.title  or book["title"]   if myvar = "title"   book[myvar]
        author: 'Sofia brown',
        price: 15,
        isbn: '8784566',
        date: new Date('7-1-2012').toLocaleDateString()
    },
    {

        title: 'Book 5',
        author: 'Gift ',
        price: 315,
        isbn: '5556212',
        date: new Date('7-1-2012').toLocaleDateString()
    }
]



document.addEventListener('DOMContentLoaded', loadTable);

function loadTable() {
    //Fill Table header
    let temp = '';
    Headers.forEach(th => {
        temp += `
     <th>
        <a class="btn header-toggle" id="${th.toLowerCase()}">${th}
        <i class="fa fa-arrow-up"></i>
        </a>
     </th>
     `;
    });
    temp += `
    <th>
        <a class="btn" id="action">Action
        </a>
     </th>
    `
    $('#tableHeader').innerHTML = temp;
    fillTableBody(rows);

}


//Fill the Table Rows
function fillTableBody(arr) {
    let temp = '';
    arr.forEach(td => {
        temp += `
     <tr id="${td.isbn}">
        <td>${td.title}</td>
        <td>${td.author}</td>
        <td>${td.price}</td>
        <td>${td.isbn}</td>
        <td>${td.date}</td>
        <td>
           <a class="btn"><i class="fa fa-heart"></i></a>
           <a class="btn btn-danger text-light"><i class="fa fa-trash"></i></a>
        </td>
     </tr>`;
    })

    $('#table-body').innerHTML = temp;


    // Page is loaded and ready to listen to events 
    $$(".header-toggle").forEach(el => el.addEventListener('click', toggle));
    $$(".fa-trash").forEach(el => el.addEventListener('click', deleteBook));
    $('#add-page').addEventListener('click', addForm);
    $('#addForm').addEventListener('submit', addbook);
}



function addForm() {
    if ($('#add-page').innerText === '+ ADD BOOK') {
        $('.table-striped').style.display = 'none';
        $('#form-card').style.display = 'block';
        $('#add-page').innerText = 'Book List';
    } else {
        $('.table-striped').style.display = 'table';
        $('#form-card').style.display = 'none';
        $('#add-page').innerText = '+ ADD BOOK';
    }

}


function addbook(e) {
    e.preventDefault();
    console.log('ADD BOOK')
    newBook = {
        "title":$('#title').value,
        "author":$('#author').value,
        "price": parseFloat($('#price').value),
        "isbn":$('#isbn').value,
        "date": new Date().toLocaleDateString()
    }

    rows.push(newBook);
    $('#title').value = $('#author').value = $('#price').value = $('#isbn').value = '';
    fillTableBody(rows);
    $('.table-striped').style.display = 'table';
    $('#form-card').style.display = 'none';
    $('#add-page').innerText = '+ ADD BOOK';

}


function $(el) {
    return document.querySelector(el)
}
function $$(el) {
    return document.querySelectorAll(el)
}


function deleteBook(e) {
    let el;
    if (e.target.tagName == 'A') {
        el = e.target.parentElement.parentElement

    } else {
        el = e.target.parentElement.parentElement.parentElement;

    }

    rows = rows.filter(book => book.isbn != el.id);
    fillTableBody(rows);

}



function toggle(e) {
    let el;
    let header;
    if (e.target.tagName == 'A') {
        el = e.target.firstElementChild;
        header = e.target.id
    } else {
        el = e.target;
        header = e.target.parentElement.id;

    }

    if (el.className == 'fa fa-arrow-up') {
        el.className = 'fa fa-arrow-down';

        rows = rows.sort((a, b) => a[header] > b[header] ? 1 : -1)
        fillTableBody(rows);
    }
    else {
        el.className = 'fa fa-arrow-up';
        rows = rows.sort((a, b) => a[header] < b[header] ? 1 : -1)
        fillTableBody(rows);
    }
}


