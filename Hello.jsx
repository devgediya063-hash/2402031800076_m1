import './App.css'

function Hello(){
    function getName(yourname){
        return yourname;
    }

    function handleClick(){
        alert("Button was Clicked.")

    }
    const handleInput = (event) =>console.log("Value : ", event.target.value)



    const name ="YahuBaba"
    const name1 = "Sanchit"

    
    const handleMouseOver = () =>console.log("Mouse Over")
    const handleDoubleClick = () =>console.log("Double Click")

    return(
        <>
        <h1>Hello{getName(name)}</h1>
        <h2>Bye {getName(name1)}</h2>

        <P onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Silver Oak University</P>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=> alert("Hello from Inline function")}>Say Hello</button>
        <br />
        <input type="text" onChange={handleInput} placeholder="Type Something" />

        </>
    )
}

export default Hello