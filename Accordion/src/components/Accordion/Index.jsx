//single selesction
// multiple selection
import data from "./Data";
import "./Styles.css";

import { useState } from "react";
export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelecion, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    

  function handleSingleSelection(getCurrentId) {
    
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
    
    function handleMultiSelection(getCurrentId) {
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
        
        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);
        
        setMultiple(cpyMutiple);

    }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelecion)}>
        Create Multiple selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  handleMultiSelection()
                    ? dataItem.id
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>

                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
