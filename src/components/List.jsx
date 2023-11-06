import React from "react";
import Card from "../redux/Card";
import units from "../redux/units"

function createCard(contact) {
  return <Card 
  key={contact.key}
  brand={contact.brand}
  img={contact.imgUrl}
  model={contact.model}
  />
}


function List() {
  return (
    <div id="list-section">
        <div className="list-container">
          <div className="list-unit">
            {units.map(createCard)}
            

          </div>
        </div>
    </div>
  )
}

export default List;