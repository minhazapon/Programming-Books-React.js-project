import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";



const Books = ({handleMarks}) => {



    const [books, setBooks] = useState([])

    useEffect(() => {

     fetch('books.json')
     .then(res => res.json())
     .then(data => setBooks(data))


    }, [])





    return (
        <div>

         <h1 className=" text-2xl font-bold text-green-600 mt-5">Programming Books: {books.length} </h1>

         {

           books.map(books => <Book  key={books.id} books={books} 
           
            handleMarks={handleMarks}
           
           ></Book> )


         }
           
            
        </div>
    );
};

export default Books;