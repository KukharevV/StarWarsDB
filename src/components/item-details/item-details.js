import React, { Component } from 'react';
import './item-details.css'
import Spinner from '../spinner';

const Record = ({ item, field, label }) => {

  return (
    <li className='list-group-item'>
      <span>{label}: </span>
      <span>{item[field]}</span>
    </li>
  );

};

export {
  Record
};

class ItemDetails extends Component {

  state = {
    item: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {

    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }

  }

  updateItem() {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          loading: false
        });
      });
  }

  render() {

    const { item, loading } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>
    }

    const { name } = this.state.item;

    const itemView = (
      <div className='item-details col-md-12 jumbotron'>
        <img className='item-img float-left'
          src={this.props.getImageUrl(item)}
          alt='character' />
        <ul className='list-group'>
          <li className='list-group-item'>
            <h4>{name}</h4>
          </li>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? itemView : null;

    return (
      <React.Fragment>
        {spinner}
        {content}
      </React.Fragment>
    );
  }
}

export default ItemDetails;