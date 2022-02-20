import React from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addHandler } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addHandler(e.target.elements[0].value);
      }}
    >
      <input type="text" placeholder="Add Todo..." />
      <input
        type="submit"
        value="Submit"
      />
    </form>
  );
};

InputTodo.propTypes = {
  addHandler: PropTypes.func.isRequired,
};

export default InputTodo;
