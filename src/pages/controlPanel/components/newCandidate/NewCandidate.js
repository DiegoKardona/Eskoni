import React from "react";

import "./NewCandidate.scss";

const NewCandidate = props => {
  return (
    <div id="new-candidate">
      <h3>Añadir representante</h3>
      <form onSubmit={props.handleSubmit}>
        <div id="candidate-content">
          <div
            id="new-candidate-photo"
            style={{
              backgroundImage: props.data.candidatePhoto
                ? `url("${props.data.candidatePhoto}")`
                : `url("https://png.pngtree.com/element_origin_min_pic/16/08/26/1957c027f589662.jpg")`
            }}
          >
            <form id="candidate-photo-form" onSubmit={props.handlePhoto}>
              <div id="candidate-photo-input">
                <h4 id="select-candidate-photo">Seleccionar imagen</h4>
                <input
                  id="photo-input"
                  name="candidatePhoto"
                  onChange={props.handleChange}
                  type="file"
                />
              </div>
              <progress
                id="photo-progress"
                value={props.data.photoProgress}
                max="100"
              />
              <button
                className="button"
                style={{ color: "white" }}
                type="submit"
              >
                Agregar
              </button>
            </form>
          </div>
          <input
            id="candidate-name-input"
            name="candidateName"
            value={props.data.candidateName}
            onChange={props.handleChange}
            type="text"
            placeholder="Nombre del representante"
          />
          <button id="add-candidate" className="button primary">
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCandidate;
