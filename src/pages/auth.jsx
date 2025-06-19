import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [formData, setFormData] = useState({
        member_first_name: '',
        member_last_name: '',
        member_email: '',
        member_primary_phone: '',
        marital_status: '',
        birth_date: '',
        gender: '',
    });
    const navigator = useNavigate();



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldName = name.replace('data[', '').replace(']', '');

        if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [fieldName]: checked ? '1' : '0' }));
        } else if (type === 'radio' && name === 'data[own_property]') {
            setIsOwner(value === '1');
            setFormData(prev => ({ ...prev, [fieldName]: value }));
        } else {
            setFormData(prev => ({ ...prev, [fieldName]: value }));
        }

        // For label animation
        if (value !== '' && type !== 'radio') {
            e.target.parentElement.classList.add('not-empty');
        } else if (type !== 'radio') {
            e.target.parentElement.classList.remove('not-empty');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigator("/details");

    };

    return (
        <div  >
            <form onSubmit={handleSubmit}>
                <h1>Okoa Chapchap</h1>
                <p style={{
                    margin: "20px 0 10px 0"
                }}></p>
                {/* Borrower Info */}
                <div className="row">
                    <div className="input-group-siblings">
                        <div className="input-group input-group-icon">
                            <input
                                type="text"
                                name="data[member_first_name]"
                                maxLength="45"
                                required
                                value={formData.member_first_name}
                                onChange={handleChange}
                            />
                            <div className="input-icon"><i className="fa fa-user"></i></div>
                            <div className="label">First Name</div>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="data[member_last_name]"
                                maxLength="45"
                                required
                                value={formData.member_last_name}
                                onChange={handleChange}
                            />
                            <div className="label">Last Name</div>
                        </div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input
                            id="email"
                            type="email"
                            name="data[member_email]"
                            maxLength="90"
                            required
                            value={formData.member_email}
                            onChange={handleChange}
                        />
                        <div className="input-icon"><i className="fa fa-envelope"></i></div>
                        <div className="label">Email Address</div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input
                            id="phone"
                            type="tel"
                            name="data[member_primary_phone]"
                            value={formData.member_primary_phone}
                            onChange={handleChange}
                        />
                        <div className="input-icon"><i className="fa fa-phone"></i></div>
                        <div className="label">Phone Number</div>
                    </div>
                    <div className="input-group input-group-icon not-empty">
                        <input
                            type="date"
                            name="data[birth_date]"
                            size="10"
                            maxLength="10"
                            value={formData.birth_date}
                            onChange={handleChange}
                        />
                        <div className="input-icon"><i className="fa fa-calendar-alt"></i></div>
                        <div className="label">Date Of Birth</div>
                    </div>
                    <div className="input-group input-group-icon">
                        <select
                            name="data[gender]"
                            required
                            value={formData.exit_strategy}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Other</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-chess"></i></div>
                        <div className="label">Select Gender</div>
                    </div>
                    <div className="input-group input-group-icon">
                        <select
                            name="data[marital_status]"
                            required
                            value={formData.exit_strategy}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="0">Single</option>
                            <option value="1">Married</option>
                            <option value="2">Divorced</option>
                            <option value="3">Widowed</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-chess"></i></div>
                        <div className="label">Marital Status</div>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="row">
                    <input id="submit" type="submit" value="Get Started" />
                </div>
            </form>
        </div>
    );
};

export default Auth;