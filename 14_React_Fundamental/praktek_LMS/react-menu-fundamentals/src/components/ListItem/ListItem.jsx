import PropTypes from 'prop-types';
import StyledListItem from './ListItem.styled';

function ListItem(props) {
  return (
    <>
        <StyledListItem>
        <div className='item'>
            <h3>{props.name}</h3>
            <p style={{fontWeight:"bold"}}>Rp {props.price} </p>
            <p>{props.description}</p>
        </div>
        </StyledListItem>
    </>
  )
}

ListItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  };

export default ListItem;