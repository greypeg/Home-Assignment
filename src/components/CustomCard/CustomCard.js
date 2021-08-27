import { Card } from 'react-bootstrap';
import "./CustomCard.css"
const CustomCard = ({children,nameClass,...rest}) => {
    return (
            <Card className={`custom-card ${nameClass}`} {...rest}>
                {children}
            </Card>
    );
};

export default CustomCard;
