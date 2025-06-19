import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [formData, setFormData] = useState({
        user_id: "",
        property_state: '',
        education_level: '',
        employment_status: '',
        monthly_income: '',
        loan_purpose: '',
        desired_term: '',
    });
    const navigator = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldName = name.replace('data[', '').replace(']', '');

        if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [fieldName]: checked ? '1' : '0' }));
        } else {
            setFormData(prev => ({ ...prev, [fieldName]: value }));
        }

        if (value !== '' && type !== 'radio') {
            e.target.parentElement.classList.add('not-empty');
        } else if (type !== 'radio') {
            e.target.parentElement.classList.remove('not-empty');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigator("/options")
    };

    return (
        <div  >
            <form onSubmit={handleSubmit}>
                <h1>Okoa Chapchap</h1>
                <div className="row">
                    <p>We offer loans from Ksh 2,000 to 50,000 disbursed directly to M-Pesa</p>
                    <div className="input-group input-group-icon">
                        <input
                            className="currency"
                            type="text"
                            name="data[user_id]"
                            maxLength="14"
                            required
                            value={formData.user_id}
                            onChange={handleChange}
                        />
                        <div className="input-icon"><i className="fa fa-piggy-bank"></i></div>
                        <div className="label">National ID</div>
                    </div>

                    <div className="input-group input-group-icon">
                        <select
                            name="data[property_state]"
                            required
                            value={formData.property_state}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="Baringo">Baringo</option>
                            <option value="Bomet">Bomet</option>
                            <option value="Bungoma">Bungoma</option>
                            <option value="Busia">Busia</option>
                            <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
                            <option value="Embu">Embu</option>
                            <option value="Garissa">Garissa</option>
                            <option value="Homa Bay">Homa Bay</option>
                            <option value="Isiolo">Isiolo</option>
                            <option value="Kajiado">Kajiado</option>
                            <option value="Kakamega">Kakamega</option>
                            <option value="Kericho">Kericho</option>
                            <option value="Kiambu">Kiambu</option>
                            <option value="Kilifi">Kilifi</option>
                            <option value="Kirinyaga">Kirinyaga</option>
                            <option value="Kisii">Kisii</option>
                            <option value="Kisumu">Kisumu</option>
                            <option value="Kitui">Kitui</option>
                            <option value="Kwale">Kwale</option>
                            <option value="Laikipia">Laikipia</option>
                            <option value="Lamu">Lamu</option>
                            <option value="Machakos">Machakos</option>
                            <option value="Makueni">Makueni</option>
                            <option value="Mandera">Mandera</option>
                            <option value="Marsabit">Marsabit</option>
                            <option value="Meru">Meru</option>
                            <option value="Migori">Migori</option>
                            <option value="Mombasa">Mombasa</option>
                            <option value="Murang'a">Murang'a</option>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Nakuru">Nakuru</option>
                            <option value="Nandi">Nandi</option>
                            <option value="Narok">Narok</option>
                            <option value="Nyamira">Nyamira</option>
                            <option value="Nyandarua">Nyandarua</option>
                            <option value="Nyeri">Nyeri</option>
                            <option value="Samburu">Samburu</option>
                            <option value="Siaya">Siaya</option>
                            <option value="Taita-Taveta">Taita-Taveta</option>
                            <option value="Tana River">Tana River</option>
                            <option value="Tharaka-Nithi">Tharaka-Nithi</option>
                            <option value="Trans Nzoia">Trans Nzoia</option>
                            <option value="Turkana">Turkana</option>
                            <option value="Uasin Gishu">Uasin Gishu</option>
                            <option value="Vihiga">Vihiga</option>
                            <option value="Wajir">Wajir</option>
                            <option value="West Pokot">West Pokot</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-clock"></i></div>
                        <div className="label">Select County</div>
                    </div>
                    <div className="input-group input-group-icon">
                        <select
                            name="data[education_level]"
                            required
                            value={formData.education_level}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="1">Secondary</option>
                            <option value="2">Diploma & cert</option>
                            <option value="3">Bachelor Degree</option>
                            <option value="4">Master Degree</option>
                            <option value="5">PhD</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-clock"></i></div>
                        <div className="label">Level Of Education</div>
                    </div>

                    <div className="input-group input-group-icon">
                        <select
                            name="data[employment_status]"
                            required
                            value={formData.employment_status}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="1">Student</option>
                            <option value="2">Working</option>
                            <option value="3">Unemployed</option>
                            <option value="4">Self Employed</option>
                            <option value="5">Other</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-clock"></i></div>
                        <div className="label">Employment Status</div>
                    </div>

                    <div className="input-group input-group-icon">
                        <select
                            name="data[monthly_income]"
                            required
                            value={formData.monthly_income}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="1">0-1000</option>
                            <option value="2">10,000-25,000</option>
                            <option value="3">25,000-35,000</option>
                            <option value="4">35,000-50,000</option>
                            <option value="5">50,000+</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-clock"></i></div>
                        <div className="label">Monthly Income (KSH)</div>
                    </div>

                    <div className="input-group input-group-icon">
                        <select
                            id="loan_purpose"
                            name="data[loan_purpose]"
                            required
                            value={formData.loan_purpose}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="1">Personal</option>
                            <option value="2">Business</option>
                            <option value="3">Emergency</option>
                            <option value="4">Student</option>
                            <option value="5">Cash Out</option>
                            <option value="7">Bridge Loan</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-tag"></i></div>
                        <div className="label">Use of Funds</div>
                    </div>

                    <div className="input-group input-group-icon">
                        <select
                            name="data[desired_term]"
                            required
                            value={formData.desired_term}
                            onChange={handleChange}
                        >
                            <option value="" selected disabled></option>
                            <option value="1">6 Months</option>
                            <option value="2">12 Months</option>
                            <option value="3">18 Months</option>
                            <option value="4">24 Months</option>
                            <option value="5">36 Months</option>
                        </select>
                        <div className="input-icon"><i className="fa fa-clock"></i></div>
                        <div className="label">Desired Term</div>
                    </div>
                </div>

                <div className="row">
                    <input id="submit" type="submit" value="Submit Details" />
                </div>
            </form>
        </div>
    );
};

export default Details;