import React from "react";


const DefinitionBlock = ({ type, def, example }) => {

  return (
    <div>
      <h4 id="part-of-speech">{type}</h4>
      <p id="definition">{def}</p>
      <p id='example'>{example}</p>
    </div>
  )
}

export default DefinitionBlock



