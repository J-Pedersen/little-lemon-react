import React from 'react';
import { useLocation } from 'react-router-dom';
import dining from '../assets/dining.png';
import '../components/styles/normalize.css';
import '../components/styles/thankyou.css';

function ThankYou() {
    const location = useLocation();
    const { state } = location;

    return (
        <>
            <section className="thankyou-section">
                <div className="accent-bar-top" />
                <div className='thankyou-column'>
                    <h1 className='thankyou-heading'>Thank You!</h1>
                    <h2 className='confirmed-message'>Your reservation is confirmed!</h2>
                </div>
                <img
                    src={dining}
                    alt="Couple Dining"
                    className="thankyou-image"
                />
                <div className='thankyou-column'>
                    <h2 className='booking-details'>Reservation Details</h2>
                    <p className='details-message'>Your reservation for {state.guests} guests is confirmed for {state.date} at {state.time}</p>
                    <p className='help-message'>If you require anything special please let us know we are happy to help!</p>
                </div>
                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default ThankYou;