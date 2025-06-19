import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Verify = () => {
    const [error, setError] = useState(null);
    const [mpesaText, setMpesaText] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const selectedPlan = location.state;


    useEffect(() => {
        error && setTimeout(() => {
            setError(null);
        }, 3000);
    }, [error]);


    const parseMpesaMessage = (message) => {
        const regex = /Ksh\s?([\d,]+\.\d{2})\s+paid to\s+(.+?)\.\s+on\s+(\d{1,2})\/(\d{1,2})\/(\d{2})\s+at\s+(\d{1,2}):(\d{2})\s+([APMapm]{2})/;
        const match = message.match(regex);

        if (!match) return null;

        const [
            _,
            amountStr,
            receiver,
            day,
            month,
            year,
            hourRaw,
            minutes,
            meridian,
        ] = match;

        const amount = parseFloat(amountStr.replace(',', ''));
        let hour = parseInt(hourRaw, 10);
        const minute = parseInt(minutes, 10);
        const yr = parseInt(`20${year}`, 10); // convert '25' to 2025
        const mm = parseInt(month, 10) - 1; // JavaScript months are 0-based
        const dd = parseInt(day, 10);

        if (meridian.toUpperCase() === 'PM' && hour !== 12) hour += 12;
        if (meridian.toUpperCase() === 'AM' && hour === 12) hour = 0;

        const dateTime = new Date(yr, mm, dd, hour, minute);

        return {
            amount,
            receiver: receiver.trim().toUpperCase(),
            datetime: dateTime,
        };
    };



    const verifyMpesaDetails = ({ amount, receiver, datetime }) => {
        const expectedReceiver = "MOBICOM INTERNATIONAL 1";
        const expectedAmount = selectedPlan.fees;
        const now = new Date();

        const diffMinutes = Math.abs((now - datetime) / (1000 * 60));

        return (
            receiver === expectedReceiver &&
            amount === expectedAmount &&
            diffMinutes <= 60
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsed = parseMpesaMessage(mpesaText);

        if (!parsed) {
            setError("Invalid M-Pesa message format.");
            return;
        }

        if (!verifyMpesaDetails(parsed)) {
            setError("M-Pesa details do not match or are too old.");
            return;
        }
        navigate("/success")
    };

    return (
        <div  >
            <form onSubmit={handleSubmit}>
                <h1>Verify Payment</h1>
                <p style={{
                    margin: "10px 0 10px 0"
                }}>
                    Paste your full M-Pesa confirmation message below then click VERIFY.
                </p>
                {/* Hidden fields */}
                <div className="row">
                    <div className="input-group">
                        <textarea
                            name="data[project_description]"
                            cols="30"
                            rows="6"
                            value={mpesaText}
                            onChange={(e) => { setMpesaText(e.target.value) }}
                        ></textarea>
                        <div className="input-icon"><i className="fa fa-pencil-alt"></i></div>
                        <div className="label">Paste Your Mpesa Message here...</div>
                    </div>
                </div>
                {
                    error && <p style={{
                        color: "red"
                    }}>{error}</p>
                }


                {/* Submit Button */}
                <div className="row">
                    <input id="submit" type="submit" value="VERIFY" />
                </div>
            </form >
        </div >
    );
};

export default Verify;