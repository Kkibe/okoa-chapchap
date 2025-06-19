import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [terms, setTerms] = useState(false);
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (terms) {
            navigator("/auth");
        } else {
            alert("Accept terms of agreement to continue")
        }
    };

    return (
        <div  >
            <form onSubmit={handleSubmit}>
                <h1>Okoa Chapchap</h1>
                <div className="row">
                    <h3>What we offer:</h3>
                    <div className="input-group-siblings">
                        <div className="input-group">
                            <input
                                type="text"
                                disabled
                            />
                            <div className="input-icon"><i className="fa fa-user"></i></div>
                            <div className="label">Instant Disbursement to Your M-PESA.</div>
                        </div>
                    </div>
                    <div className="input-group-siblings">
                        <div className="input-group">
                            <input
                                type="text"
                                disabled
                            />
                            <div className="input-icon"><i className="fa fa-user"></i></div>
                            <div className="label">Low Interest Rates Of 6.8%.</div>
                        </div>
                    </div>
                    <div className="input-group-siblings">
                        <div className="input-group">
                            <input
                                type="text"
                                disabled
                            />
                            <div className="input-icon"><i className="fa fa-user"></i></div>
                            <div className="label">Flexible repayment period.</div>
                        </div>
                    </div>
                </div>


                {/* Terms and Conditions */}
                <div className="row">
                    <h3>Terms and Conditions</h3>
                    <div className="input-group">
                        <input type="hidden" name="data[terms_agreement]" value="0" />
                        <input
                            id="terms"
                            type="checkbox"
                            name="data[terms_agreement]"
                            checked={terms}
                            onChange={(e) => { setTerms(e.target.value) }}
                        />
                        <label htmlFor="terms">
                            I accept the terms and conditions for signing up to this service, and acknowledge the Terms and Conditions..
                            <i className="fa fa-check"></i>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="row">
                    <input id="submit" type="submit" value="Start Loan Application" />
                </div>
            </form>
        </div>
    );
};

export default Home;