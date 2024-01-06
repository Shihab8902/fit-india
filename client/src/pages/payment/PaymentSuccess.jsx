import { useParams } from "react-router-dom"

const PaymentSuccess = () => {

    const tran_id = useParams();
    console.log(tran_id);


    return (
        <div>PaymentSuccess</div>
    )
}

export default PaymentSuccess