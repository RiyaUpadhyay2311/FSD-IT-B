
// function Book(props){

// // }

// const image = React.createElement("img",{
//     src:"https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
//     width:"154",
//     height:"150",
//     alt: "book-image"
    
// },null);

// const h4 = React.createElement("h4",null,"Price: 325/-");

// const child = React.createElement("div",
//      {className:"card"},image,h4);

//      const parent= document.getElementById("root");

//      const root = ReactDOM.createRoot(parent);

//     root.render(child);



function Book(props){
    const image=React.createElement("img",
       {
           src: props.image,
           width: 150,
           height: 150,
           alt: "Book Image"
       }
    );
    const h4=React.createElement("h4",null,`Price: ${props.price}`);
    const child=React.createElement("div",{className: "card"},image,h4);
    return (child);
   }
   const books=[{
       image: "https://media.istockphoto.com/id/1000158336/photo/chemistry-education-concept-open-books-with-text-chemistry-and-formulas-and-textbooks-flasks.jpg?s=1024x1024&w=is&k=20&c=60oWSfQPkLgP5ok9PZmfZI7ZbXOW63nYWelYo-zJ_WU=",
       price: 235
   },{
       image: "https://media.istockphoto.com/id/1044168372/vector/mathematics.jpg?s=612x612&w=0&k=20&c=02J5s_9nIBV_T4B7ng_6qo2wMfZQne-w8xNHm8XSzqo=",
       price: 245
   },{
       image: "https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=",
       price: 335
   }];
   const parent=document.getElementById("root");
   const root=ReactDOM.createRoot(parent);
   
  
   const bookElements = books.map(book =>
    React.createElement(Book, {
      image: book.image,
      price: book.price
    })
  );
  
  root.render(React.createElement('div', null, bookElements));