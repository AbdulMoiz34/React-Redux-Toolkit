import { useDispatch } from "react-redux";
import { updateVal } from "../store/auth";

const Price = () => {
    const dispatch = useDispatch();

    return (
        <input type="text"
            onChange={(e) => dispatch(updateVal({ value: e.target.value, field: "price" }))}
            placeholder="Enter price." />
    )
}

export default Price;