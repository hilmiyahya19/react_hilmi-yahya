import PropTypes from 'prop-types';

const Modal = ({ children }) => {
    return (
        <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50`}>
            <div className="bg-white rounded-lg p-8">{children}</div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired
};

export default Modal;