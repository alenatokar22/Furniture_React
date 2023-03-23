import { FaTrash } from "react-icons/fa";
import Count from "./Count";

const Order = (props) => {
  const { count, id, increase, decrease, changeValue } = props;
  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt={props.item.title} />
      <h2>{props.item.title}</h2>
      <b>{props.item.price}$</b>
      <FaTrash className="delete-icon" onClick={() => onDelete(id)} />
      <Count
        count={count}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    </div>
  );
};

export default Order;
