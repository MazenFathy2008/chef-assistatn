import data from "../data.js"
export default function InputSection(){
    function handelSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIng= formData.get("ing-in")
        if(newIng){
            event.currentTarget.reset()
            data.push(newIng)
            localStorage.setItem("ing",JSON.stringify(data))
        }
    }
    const listOfIng = data.map(ing=><li>{ing}</li>)
    return(
        <section className="input-Sec">
            <form className="input-f" onSubmit={(event)=>{handelSubmit(event)}}>
                <input type="text" placeholder="e.g orange" name="ing-in"/>
                <button>+ Add ingredient</button>
            </form>
            {data.length>0?<div className="ingredients-con">
                <h1>Ingredients on hand:  </h1>
                <ul>
                {listOfIng}
                </ul>
            </div>
            :
            <h1 className="empty-list">There is no ingredients 🥱</h1>}
            
            <div className="ready-con">
                <div>
                    <span>Ready for a recipe?</span>
                    <span className="s2">Generate a recipe from your list of ingredients</span>
                </div>
                <button>Get a recipe </button>
            </div>
        </section>
    )
}