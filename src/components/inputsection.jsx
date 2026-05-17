export default function InputSection(){
    return(
        <section className="input-Sec">
            <div className="input-f">
                <input type="text" placeholder="e.g orange"/>
                <button>+ Add ingredient</button>
            </div>
            <div className="ingredients-con">
                <h1>Ingredients on hand:  </h1>
                <ul>
                <li>orange</li>
                <li>Annas</li>
                <li>milk</li>
                </ul>
            </div>
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