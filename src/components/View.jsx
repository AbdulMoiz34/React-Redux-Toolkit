import { useSelector } from "react-redux";

const View = () => {
    const data = useSelector(state => state.auth);
    console.log(data);
    return (
        <div> <br /><br /><br />
            <span>Customer Name:</span>
            <span>{data.customerDetails}</span> <br /><br />
            <span>Price:</span>
            <span>{data.price}</span> <br /><br /><br />
            <span>Order:</span>
            <span>{data.order}</span>
        </div>
    )
}

export default View;