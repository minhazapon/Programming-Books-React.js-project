import Marks from "./Marks";




const Bookmarks = ({marks}) => {
    return (
        <div>
               <h1 className=" text-xl text-blue-500 mt-5 font-bold bg-blue-300 p-5 rounded-xl"> Bookmarks: </h1>

               {

                 marks.map(marks => <Marks key={marks.id} marks={marks} ></Marks> )


               }


        </div>
    );
};

export default Bookmarks;