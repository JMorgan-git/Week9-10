const Hello = props => {
    return (
        <h1>Hello, {props.name}</h1>
    );
}
const PropComp = () =>{
    return(
        <>
            <Hello name="Chris"/>
            <Hello name="P."/>
            <Hello name="Bacon"/>
        </>
    );
}
export default PropComp;