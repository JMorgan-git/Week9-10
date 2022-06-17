const AnimalDesc = ({name, age, favFood, isFluff}) => {
    return (
        <>
        <h2>Hello I am : {name}</h2>
        <h4>My age is: {age}</h4>
        <h4>I love to eat: </h4>
        <ul>
          {favFood.map((food) => {
            return <li> {food}</li>
          })}
        </ul>
        <li>{favFood.item1}</li>
        <li>{favFood.item2} </li>
        <li>{favFood.item3}</li>
        <h4>Am i fluff?: {isFluff.toString()}</h4>
        </>
      );
}
 
export default AnimalDesc;