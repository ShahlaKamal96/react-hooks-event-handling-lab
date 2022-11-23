// Code EyesOnMe Component Here
function EyesOnMe() {

    return (
        <div>
            <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes On Me</button>
        </div>
    )
}
export default EyesOnMe;