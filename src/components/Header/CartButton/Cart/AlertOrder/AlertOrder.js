import styles from './AlertOrder.module.css';
import Container from '../../../../UI/Container/Container';
import ButtonRed from '../../../../UI/Button/ButtonRed';

const AlertOrder = (props) => {
    return(
        <Container>
            <p className={styles.text}>{props.message}</p>
            <ButtonRed onClick={props.onClick}>Close</ButtonRed>
        </Container>
    );
};

export default AlertOrder;