import React from "react";
import Card from "../../utilities/Card";
import units from "../../utilities/units"
import './List.css'

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
    <section id="list-section">
      <div className="container">
        <div className="list-container">
          <div className="list-unit">
            {units.map(createCard)}
            

          </div>
        </div>
        </div>
    </section>
  )
}

export default List;