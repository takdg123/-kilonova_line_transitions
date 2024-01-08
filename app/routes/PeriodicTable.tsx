import React from "react";
import data from "./PeriodicTableJSON.json";
import elementList from "./AvailableElementJSON.json"

const colorMap = {
  "noble gas": "#FFBC42",
  "alkaline earth metal": "#EC674E",
  "diatomic nonmetal": "#D81159",
  "alkali metal": "#8F2D56",
  "transition metal": "#58586B",
  "post-transition metal": "#218380",
  "actinide": "#674aaf",
  "lanthanide": "#4AABAF",
  "metalloid": "#73D2DE",
  "polyatomic nonmetal": "#D81159",
};

const PeriodicTable = (props) => {
    const handleElementClick = (symbol) => {
      if (elementList.available_elements.includes(symbol)){
        props.onElementClick(symbol);
      }
    };

  return (
    <div className="periodic-table">
      {data.elements.map((element) => {
        return (
        <div
          className={elementList.available_elements.includes(element.symbol)?"element":"disable"}
          key={element.name}
          style={{
            gridRow: element.ypos,
            gridColumn: element.xpos,
            borderColor: colorMap[element.category],
            background: (elementList.available_elements.includes(element.symbol)? (props.elements.includes(element.symbol) ? colorMap[element.category] : "white"):"gray"),
            cursor: elementList.available_elements.includes(element.symbol) ? "pointer" : "not-allowed",
          }}
          onClick={() => handleElementClick(element.symbol)}
        >
          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
        </div>
      )})}
    </div>
  );
};

export default PeriodicTable;