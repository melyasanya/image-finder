import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
