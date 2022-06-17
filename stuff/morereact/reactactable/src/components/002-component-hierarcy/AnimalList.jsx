import Animal from "./Animal";
const AnimalList = () => {

    const dataObject = [
        {
            name:"Lion",
            imageUrl:"https://th.bing.com/th/id/OIP.z8z4FwIq24fadxwidp1A9AHaEK?pid=ImgDet&rs=1",
            imageTitle:"image 1",
            age: "5",
            favFood: {
                item1: "Meat from floor",
                item2: "Meat from sky",
                item3: "Meat from water"
                },
            isFluff: true
        },
        {
            name:"Cow",
            imageUrl:"https://th.bing.com/th/id/R.dc0896ffdae82dece89f39f3334c4fac?rik=bzS%2b87ii97QpKQ&riu=http%3a%2f%2fi2.wp.com%2fblog.hathix.com%2fwp-content%2fuploads%2f2011%2f12%2fcow1.png&ehk=n45XWpuCryp%2fAUiC1gUkcB9eeV1Mj%2fZZDNe5sDn%2fk00%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            imageTitle:"image 2",
            age: "43",
            favFood: {
                item1: "Green plant",
                item2: "Red plant",
                item3: "Blue plant"
                },
            isFluff: true
        },
        {
            name:"Frog",
            imageUrl:"https://2.bp.blogspot.com/-fRI8PQNKsdI/TymAKcR7MMI/AAAAAAAAAJk/S8zujjSYA40/s1600/frog1.jpg",
            imageTitle:"image 3",
            age: "15",
            favFood: {
                item1: "Dry dirt",
                item2: "Wet dirt",
                item3: "Moist dirst"
                },
            isFluff: false
        }
    ];



    return ( 
        <>
            {
            dataObject.map((animals) => {
                return <div className="animal"><Animal data={animals}/></div>
            })
            }
            {/* <Animal data={dataObject[0]}/>
            <Animal data={dataObject[1]}/>
            <Animal data={dataObject[2]}/> */}
        </>
    );
}
  //name image age favourite food (isSomething bool)
export default AnimalList;