import React from 'react';
import './Definition.css';
import DefinitionBlock from "./DefinitionBlock";

const Definitions = ({ definitions }) => {

  return (
    <div id="definition-block">
      {definitions.definitions.map((def, i) => {
        return (
          <DefinitionBlock 
            type={def.type}
            def={def.definition}
            example={def.example}
            />
        )
      })}
    </div>
  )
}

export default Definitions