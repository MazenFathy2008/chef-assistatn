import gt from '../ai.js';
import {useState} from"react"
export default function resultssection({ dataList }) {
	const [respon,setRespons] = useState()
	async function res() {
		const data = await gt()
		console.log(data)
		setRespons(data)
	}
  return (
    <section className="results-sec">
			{dataList.length >= 4 ? (
            <div className="ready-con">
              <div>
                <span>Ready for a recipe?</span>
                <span className="s2">
                  Generate a recipe from your list of ingredients
                </span>
              </div>
	
              <button onClick={res}>Get recipe</button>
            </div>
          ) : undefined}

      <h1>That's Your recipe 👨‍🍳</h1>
      <section>
				{respon}
        {/* <h3>There is no recipe yet.</h3> */}
      </section>
    </section>
  );
}
