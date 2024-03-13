


const Marks = ({marks}) => {
    const {title} = marks;  
 
    return (
        <div>
             
              <h1 className=" text-xl font-bold bg-blue-500 mt-5 text-white p-3"> {title} </h1>

        </div>
    );
};

export default Marks;