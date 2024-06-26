import PropTypes from 'prop-types';
import ListItem from "../ListItem/ListItem";

function List(props) {
    const title = props.title;
    const items = props.items;

    const itemList = items.map((item) => {
        return (
            <ListItem 
            key={item.id} 
            name={item.name} 
            description={item.description} 
            price={item.price}
            />
        );
    });
  return (
    <>
        <h3>{title}</h3>
        {itemList}
    </>
  )
}

List.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name : PropTypes.string,
            description : PropTypes.string,
            price : PropTypes.number,
    })),
  };



export default List;