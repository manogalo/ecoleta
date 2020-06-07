import React, { useState, useEffect } from 'react';
import './toast.css';
import {FiX} from 'react-icons/fi';
import PropTypes from 'prop-types';

const Toast = (props) => {

    Toast.defaultProps = {
        position: 'bottom-right'
    }

    Toast.propTypes = {
        toastList: PropTypes.array.isRequired,
        position: PropTypes.string
    }

    const { toastList, position } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    return (
        <div className={`notification-container ${position}`}>
            {list.map((toast, i) => 
                <div key={i} className={`notification toast ${position}`} style= {{ backgroundColor: toast.backgroundColor }}>
                    <button><FiX /></button>
                    <div className="notification-image">
                        <img src={toast.icon} alt="" />
                    </div>
                    <div>
                        <p className="notification-title">{toast.title}</p>
                        <p className="notification-message">{toast.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Toast;