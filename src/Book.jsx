


 
  
  const Book = ({books, handleMarks}) => {
    
    const {images, author, book_name, price} =books


    return (
        <div className=" border-[2px] border-blue-500 mt-5 p-5 rounded-xl">
            
              <img className=" h-[300px] w-[400px] mt-5" src={images} alt="" />
              <h1 className=" text-xl mt-5"> {author} </h1>
              <h1 className=" text-xl mt-5" > {book_name}  </h1>
              <p className=" text-xl mt-5"> ${price} </p>
              <button onClick={() => handleMarks(books) } className=" text-xl bg-blue-400 p-2 mt-3 rounded-xl text-white" >Bookmarks</button>


        </div>
    );
  };
  
  export default Book;