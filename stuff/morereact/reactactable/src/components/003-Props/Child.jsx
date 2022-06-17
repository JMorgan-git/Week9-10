const Child = (props) => {
    console.log(props);
    let data = props.propData;

    // jsx allows html in js
    //when in html use {} to break back into js

    //let data = "Test Text"; testing variable by creating in child

    return ( 
        <>
            <h2>The text is: {data}</h2>
            <h2>Text but different code: {props.propData}</h2>
        </>
     );
}
 
export default Child;