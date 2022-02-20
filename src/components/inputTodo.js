import React from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addHandler } = props;
  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        addHandler(e.target.elements[0].value);
      }}
    >
      <input type="text" placeholder="Add Todo..." className="input-text" />
      <input type="submit" value="Submit" className="input-submit" />
    </form>
  );
};

InputTodo.propTypes = {
  addHandler: PropTypes.func.isRequired,
};

export default InputTodo;
