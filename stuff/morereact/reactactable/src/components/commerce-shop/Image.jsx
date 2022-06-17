//imageUrl is the prop we will pass in
const Image = ({imageUrl, imageTitle}) => {
    return ( 
        <>
            <img src={imageUrl} alt={imageTitle} width="350px"/>
        </>
     );
}
 
export default Image;