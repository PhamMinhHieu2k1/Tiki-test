import PropType from "prop-types";
import { Card } from "antd";

function BaseCard({ children, style = {} }) {
    return (
        <Card className="bg-white p-4 " bodyStyle={style}>
            {children}
        </Card>
    );
}

BaseCard.propTypes = {
    children: PropType.array,
    style: PropType.object,
};

export default BaseCard;
