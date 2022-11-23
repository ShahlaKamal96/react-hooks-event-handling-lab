// Code Keypad Component Here

function Keypad() {
    return (
        <div>
            <input type="password" onChange={(e) => console.log(`Entering password...${e.target.value}`)} />
        </div>
    )
}

export default Keypad;