import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./Order.scss";

function Order({ item }) {
    const { id, name, amount, price, img } = item;

    return (
        <li className="ordered__item" key={id}>
            <div className="ordered__order-info">
                <figure>
                    <img src={img} alt="" className="ordered__order-img" />
                    <figcaption>
                        <h4>
                            <Link to={`/san-pham/${id}`} className="text-current">
                                {name}
                            </Link>
                        </h4>
                        <p>x {amount}</p>
                    </figcaption>
                </figure>
                <div className="ordered__order-price hightlight">{price.toLocaleString()} VNĐ</div>
            </div>
        </li>
    );
}

Order.propTypes = {
    item: PropTypes.object,
};

export default Order;
