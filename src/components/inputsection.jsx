export default function InputSection({ dataList, addIngredient }) {
  const listOfIng = dataList.map((ing, i) => <li key={i}>{ing}</li>);
  return (
    <section className="input-Sec">
      <form className="input-f" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g orange"
          name="ing-in"
          autoComplete="off"
        />
        <button>+ Add ingredient</button>
      </form>
      {dataList.length > 0 ? (
        <>
          <div className="ingredients-con">
            <h1>Ingredients on hand: </h1>
            <ul>{listOfIng}</ul>
          </div>
        </>
      ) : (
        <h1 className="empty-list">There is no ingredients 🥱</h1>
      )}
    </section>
  );
}
