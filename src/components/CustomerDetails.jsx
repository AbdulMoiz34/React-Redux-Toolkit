import { useDispatch } from "react-redux";
import { updateVal } from "../store/auth";

const CustomerDetails = () => {
    const dispatch = useDispatch();
    return (
        <input type="text"
            onChange={(e) => dispatch(updateVal({ value: e.target.value, field: "customerDetails" }))}
            placeholder="Customer Details" />
    )
}

export default CustomerDetails;