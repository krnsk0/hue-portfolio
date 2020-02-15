import PropTypes from 'prop-types';
import '../styles/main.css';

const Layout = props => {
  return <>{props.children}</>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
