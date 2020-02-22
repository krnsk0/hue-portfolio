import PropTypes from 'prop-types';

const Layout = props => {
  return <>{props.children}</>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
