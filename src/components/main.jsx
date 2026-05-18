import InputSection from "./inputsection.jsx";
import ResultsSection from "./resultsSection.jsx";
import "../styles/main.css";
import { useState } from "react";
export default function Main() {
  const [dataList, setList] = useState(
    JSON.parse(localStorage.getItem("ing")) || [],
  );

  localStorage.setItem("ing", JSON.stringify(dataList));

  function addIngredient(formData) {
    const newIng = formData.get("ing-in");
    if (newIng) {
      setList((prevData) => [...prevData, newIng]);
    }
  }

  return (
    <main>
      <InputSection dataList={dataList} addIngredient={addIngredient}/>
      <ResultsSection dataList={dataList}/>
    </main>
  );
}
