import AnimalImage from "./AnimalImage";
import AnimalDesc from "./AnimalDesc";

const Animal = ({data}) => {
    return ( 
        <>
            <AnimalImage imageUrl={data.imageUrl} imageTitle={data.imageTitle}/>
            <AnimalDesc name={data.name} age={data.age} favFood={data.favFood} isFluff={data.isFluff}/>
        </>
     );
}
 //name image age favourite food (isSomething bool)
 //pass data to animal comp prop
 //stretch create array of objects pass index as prop
export default Animal;