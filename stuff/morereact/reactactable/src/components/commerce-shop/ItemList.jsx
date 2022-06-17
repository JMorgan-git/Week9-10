import Item from "./Item";

const ItemList = () => {
    //Item list renders an item with different data props

    const dataObject = [
        {
            subTitle:"Item number 1",
            imageUrl:"https://picsum.photos/350/350",
            imageTitle:"image 1"
        },
        {
            subTitle:"Item number 1",
            imageUrl:"https://picsum.photos/340/350",
            imageTitle:"image 1"
        },
        {
            subTitle:"Item number 1",
            imageUrl:"https://picsum.photos/330/350",
            imageTitle:"image 1"
        }
    ];
    return ( 
        <>
            <Item data={dataObject[0]}/>
            <Item data={dataObject[1]}/>
            <Item data={dataObject[2]}/>
        </>
     );
}
 
export default ItemList;