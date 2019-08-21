import React from 'react';
import './item-list.css';
import PropTypes from 'prop-types';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderItem } = props;
  
  const items = data.map(item => {
    const { id } = item;
    
    const label = renderItem(item);

    return (
      <li key={id}
        className='list-group-item item-list-li'
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  });

  return (
    <ul className='list-group mb-5'>
      {items}
    </ul>
  );
}

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;