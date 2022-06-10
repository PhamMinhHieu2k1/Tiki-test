import PropTypes from "prop-types";
import Loading from "./Loading";

function LoadingPlaceholder({ isLoading = true, LoadingComponent = <Loading />, children }) {
    return <>{isLoading ? LoadingComponent : children}</>;
}

LoadingPlaceholder.propTypes = {
    isLoading: PropTypes.bool,
    LoadingComponent: PropTypes.node,
    children: PropTypes.object,
};

export default LoadingPlaceholder;
