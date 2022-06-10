import PropTypes from "prop-types";
import SliderTab from "./SliderTab";

function TabContainer({ tabList }) {
    return (
        <ul className="flex">
            {tabList.map((tab, i) => (
                <SliderTab {...tab} key={i} />
            ))}
        </ul>
    );
}

TabContainer.propTypes = {
    tabList: PropTypes.array,
};

export default TabContainer;
