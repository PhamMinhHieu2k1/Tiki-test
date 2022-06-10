import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SliderTab({ content, to }) {
    return (
        <li className="px-4 py-2 flex-auto text-center hover:bg-white">
            <Link to={to} className="text-black hover:text-blue-500">
                {content}
            </Link>
        </li>
    );
}

SliderTab.propTypes = {
    content: PropTypes.string,
    to: PropTypes.string,
};

export default SliderTab;
