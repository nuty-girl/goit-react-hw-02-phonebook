import React from 'react';
import T from 'prop-types';
import shortid from 'shortid';

const filterInputId = shortid.generate();

const Filter = ({ value, onChangeFilter }) => (
  <label htmlFor={filterInputId}>
    Find contacts by name
    <input
      id={filterInputId}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.propTypes = {
  value: T.string,
  onChangeFilter: T.func.isRequired,
};

Filter.defaultProps = {
  value: '',
};
export default Filter;
