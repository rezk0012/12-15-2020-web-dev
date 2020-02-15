//Book Data
let bookList = [
    {
        id: 1,
        title: 'Book 1',
        auther: 'John Doe',
        price: 24,
        isbn: '1555335',
    },
    {
        id: 2,
        title: 'Book 2',
        auther: 'Steve Smith',
        price: 37,
        isbn: '1555335'
    },
    {
        id: 3,
        title: 'Book 3',
        auther: 'Martin John',
        price: 75,
        isbn: '123547'
    },
    {
        id: 4,
        title: 'Book 4',
        auther: 'Sofia brown',
        price: 15,
        isbn: '8784566'
    },
    {
        id: 5,
        title: 'Book 5',
        auther: 'Gift ',
        price: 315,
        isbn: '5556213'
    },
]





//For - Loop through each item in the array and console.log it
// for (let i = 0; i < bookList.length; i++) {
//     console.log(bookList[i].title)
// }

//ES6 forEach
// bookList.forEach(function (item) {
//     console.log(item.title)
// }
// )

// ES6 forEach - Arrow Function
// bookList.forEach((itm, i) => console.log(i))


//Filter
// const cheapBooks = bookList.filter(function (item) {
//     if (item.price <= 50) {
//         return true;
//     }
// })


//Fiter
// const cheapBooks = bookList.filter(item => item.price <= 50)
// console.log(cheapBooks)


//Filter 

// const modifiedBooks = bookList.filter(item => item.id === 3);
// console.log(modifiedBooks);

// const books = bookList.map(item=> item.title);
// const authers = bookList.map(item => item.auther);
// const books = bookList.map(function (item) {
//     return { "Auther": item.auther, "price": item.price + 50, "Date":new Date().toLocaleTimeString()}
// }
// )

// console.log(books);


//Combine to Higher Order Functions.


// const books = bookList
//     .filter(book => book.price <= 50)
//     .map(book =>book.title)

// console.log(books);


// Sort - price sorting 

// const sortedBooks = bookList.sort( function(a,b){
//     if(a.price < b.price){
//         return 1;
//     }else{
//         return -1;
//     }
// })

// const sortedBooks = bookList.sort((a, b) => b.price - a.price)
// const sortedBooks = bookList.sort((a, b) => a.price < b.price ? 1 : -1)
// years = [1948, 2020, 1993, 1893, 2014, 1996];
// const sortedyears = years.sort((a, b) => b - a);  //desc Number
// const sortedyears = years.sort((a, b) => a - b);  //asec Numbers
// const sortedyears = years.sort();  //asec  

// const sortedBooks = bookList.sort((a,b)=> a.auther >b.auther? 1: -1)
// bookList = bookList.sort((a,b)=> a.title <b.title? 1: -1)
// console.log(sortedBooks);

//Reduce - Get the total price of all books 

// const years=[1984, 1678, 1365, 4566]; 

// const yearsTotal = years.reduce((total, year)=> total+year, 0)

// console.log(yearsTotal);

// const totalPrice = bookList.reduce((total, book) => total + book.price, 0)

// let total = 0;
// bookList.forEach(book => {
//     total += book.price;      //total = total + book.price
// })

// console.log(total)




//Adding new Book 

// let book= {
//     id:1000,
//     title: 'New Book', 
//     auther: 'Unkown', 
//     isbn:'xxxxxx',
//     price:0
// }


// bookList.unshift(book);   //Add To begining of the array 
// bookList.push(book);      //Add To end of the array 
// console.log(bookList); 





let subBookList;
deleteBook(bookList[1]);
function deleteBook(book) {
    const index = bookList.indexOf(book);
    bookList.splice(index, 1)
}

console.log(subBookList)

