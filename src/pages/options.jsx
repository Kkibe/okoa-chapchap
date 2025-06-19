import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Options = () => {
    const [formData, setFormData] = useState("0"); // Default value can be "0"
    const navigate = useNavigate();

    const data = [{
        limit: 2600,
        fees: 130,
        value: "0"
    }, {
        limit: 4920,
        fees: 180,
        value: "1"
    }, {
        limit: 6760,
        fees: 250,
        value: "2"
    }, {
        limit: 9815,
        fees: 320,
        value: "3"
    }, {
        limit: 12500,
        fees: 370,
        value: "4"
    }];

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedItem = data.find(item => item.value === formData);
        navigate("/summary", { state: selectedItem });
    };

    return (
        <div  >
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Okoa Chapchap</h1>
                    <div className="input-group">
                        <p>Dear customer, you qualify for a loan of up to Ksh 14,500. Choose your savings plan to continue the loan application.</p>
                    </div>
                    {
                        data.map(item => {
                            return (<div className="input-group input-group-icon">
                                <input
                                    type="radio"
                                    name="data[own_property]"
                                    value={item.value}
                                    id={`owner-${item.value}`}
                                    checked={formData === item.value}
                                    onChange={(e) => setFormData(e.target.value)}
                                />
                                <label htmlFor={`owner-${item.value}`}>Loan limit: {item.limit}</label>
                                <div className="input-icon">{item.fees}</div>
                            </div>);
                        })
                    }
                </div>

                {/* Submit Button */}
                <div className="row">
                    <input id="submit" type="submit" value="Proceed" />
                </div>
            </form>
        </div>
    );
};

export default Options;
