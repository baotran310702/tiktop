import Header from '~/layout/components/Header';
import PropTypes from 'prop-types';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node,
};

export default HeaderOnly;
