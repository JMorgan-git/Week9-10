import Child from "./Child";
import DestructuredChild from "./DestructuredChild";

const Parent = () => {

    //creating data in Parent so it can be passed down the hierarcy as prop
    let data = "I am living on the Parent"

    return ( 
        <>
            <Child propData={data}/>
            <DestructuredChild propData={data}/>
        </>
     );
}
 
export default Parent;