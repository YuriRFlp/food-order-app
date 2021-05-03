import Backdrop from '../UI/Backdrop/Backdrop';
import ReactDOM from 'react-dom';

const Cart = () => {
    return ReactDOM.createPortal(
        <Backdrop><p>cart ok</p></Backdrop>,
        document.getElementById('cart-root')
    )
}

export default Cart;