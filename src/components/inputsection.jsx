import {useState} from "react"
export default function InputSection(){
    const [dataList , setList]= useState(JSON.parse(localStorage.getItem("ing"))||[])
    localStorage.setItem("ing",JSON.stringify(dataList))
    function addIngredient(formData){
        const newIng= formData.get("ing-in")
        if(newIng){
            setList(prevData=>[...prevData,newIng])
        }
    }   
    const listOfIng = dataList.map((ing, i)=><li key={i}>{ing}</li>)
    return(
        <section className="input-Sec">
            <form className="input-f" action={addIngredient}>
                <input type="text" placeholder="e.g orange" name="ing-in" autoComplete="off"/>
                <button>+ Add ingredient</button>
            </form>
            {dataList.length>0?<div className="ingredients-con">
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