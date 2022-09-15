import React from 'react';
import propTypes from 'prop-types';

const Dialog = ({ children, title, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};
Dialog.propTypes = {
  title: propTypes.string,
  isOpen: propTypes.bool,
  onClose: propTypes.func.isRequired,
};

Dialog.defaultProps = {
  isOpen: false,
  title: 'Some text',
};
export default Dialog;
