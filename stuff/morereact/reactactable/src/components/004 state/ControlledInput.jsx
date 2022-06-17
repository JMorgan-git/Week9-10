const ControlledInput = ({setData}) => {
    return ( 
        <input type="text" placeholder="enter text" onChange={((event) => setData(event.target.value))}/>
     );
}
 
export default ControlledInput;