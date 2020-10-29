import React, { useEffect, useState, useRef } from 'react'
import propTypes from 'prop-types'
import '../../assets/styles/Components/Notification/notification.css';

function Notification({icon, clearMessage, message}) {
    const isInitialMount = useRef(true);
    const [isVisible, setVisibility] = useState(false)
    
    useEffect(()=>{
        if(isInitialMount.current)
            isInitialMount.current = false
        else{
            if(message.length > 0){
                setVisibility(true)
                setTimeout(()=>{
                    setVisibility(false)
                    clearMessage()
                }, 5000)
            }
        }
    }, [message, clearMessage])
    
    return (
        <div className="notification" style={{bottom: isVisible ? '1rem': '-5rem'}}>
            <i className={icon}></i>
            <p className="notification-message">{message}</p>
        </div>
    )
}

Notification.propTypes = {
    icon: propTypes.string.isRequired,
    message: propTypes.string.isRequired,
    clearMessage: propTypes.func.isRequired
}

export default Notification

