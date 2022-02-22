import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

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
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addHandler: PropTypes.func.isRequired,
};

export default InputTodo;
