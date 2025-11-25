import { useDispatch } from "react-redux";
import { updateVal } from "../store/auth";

const Order = () => {

    const dispatch = useDispatch();
    return (
        <input type="text"
            onChange={(e) => dispatch(updateVal({ value: e.target.value, field: "order" }))}

            placeholder="Enter Order." />
    )
}

export default Order;