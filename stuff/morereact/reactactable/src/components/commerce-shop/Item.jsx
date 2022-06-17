import Image from "./Image";
import SubTitle from "./SubTitle";

const Item = ({data}) => {
    return ( 
        <>
            <SubTitle subTitle={data.subTitle}/>
            <Image imageUrl={data.imageUrl} imageTitle={data.imageTitle}/>
        </>
     );
}
 
export default Item;