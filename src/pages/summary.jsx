import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Summary = () => {
    const location = useLocation();
    const selectedPlan = location.state;
    const navigate = useNavigate();

    const tillRef = useRef();

    const copyToBoard = (e) => {
        e.preventDefault();
        const tillText = tillRef.current?.innerText;
        if (tillText) {
            navigator.clipboard.writeText(tillText)
                .then(() => alert('Till number copied!'))
                .catch((err) => console.error('Copy failed:', err));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/verify", { state: selectedPlan });
    };

    return (
        <div  >
            <form onSubmit={handleSubmit}>
                <h1>Okoa Chapchap</h1>
                <h3>Loan Summary</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1em",
                    border: "1px solid #e5e5e5",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    gap: "5px",
                    color: "black"
                }}>
                    <p >Selected Limit: Ksh {selectedPlan.limit}</p>
                    <p>Service Fees: Ksh {selectedPlan.fees}</p>
                    <p>Interest Rate: 6.8%</p>
                    <p>Interest Applied: Ksh {Math.round((selectedPlan.limit * 6.8) / 100).toFixed(2)}</p>
                    <p>Disbursable to M-Pesa: Ksh {selectedPlan.limit - Math.round((selectedPlan.limit * 6.8) / 100).toFixed(2)}</p>
                </div>
                <h3>How To Pay</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "1em",
                    border: "1px solid #e5e5e5",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    gap: "5px",
                    color: "black"
                }}>
                    <p><span style={{ fontWeight: "bold" }}>Go To Mpesa:</span> M-Pesa Menu</p>
                    <p> <span style={{ fontWeight: "bold" }}>Lipa na M-Pesa:</span> Buy Goods & Services</p>
                    <p><span style={{ fontWeight: "bold" }}>Enter Till Number: </span><span style={{
                        fontWeight: "bolder",
                        fontSize: "18px",
                        color: "green"
                    }} ref={tillRef}>5881981</span> <span style={{
                        background: "green",
                        padding: "3px",
                        color: "white",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }} onClick={copyToBoard}>Copy Till</span></p>
                    <p><span style={{ fontWeight: "bold" }}>Enter Amount: </span> Ksh {selectedPlan.fees}</p>
                    <p><span style={{ fontWeight: "bold" }}>Complete Payment</span>: Enter M-Pesa PIN</p>
                </div>
                {/* Submit Button */}
                <div className="row">
                    <input id="submit" type="submit" value="Verify" />
                </div>
            </form>
        </div>
    );
};
export default Summary;