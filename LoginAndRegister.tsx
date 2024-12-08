import React, { useState } from 'react';
import './LoginAndRegister.css';
import { useNavigate } from 'react-router-dom';

const LoginRegisterPage: React.FC = () => {
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        idNumber: '',
        city: '',
        zipCode: '',
    });

    // Update state as the user types
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Send registration data to backend
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/Voter`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Registration successful');
                navigate('/voting-ballot'); // Redirect to the ballot page
            } else {
                console.error('Failed to register');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className="container">
            <div className="info-section">
                <div className="info-content">
                    <h2>VOTER INFORMATION</h2>
                    <button className="info-button" onClick={() => navigate('/voter-information')}>
                        Already Registered?
                    </button>
                </div>
            </div>
            <div className="form-section">
                <form onSubmit={handleRegister}>
                    <div className="form-content">
                        <h2>REGISTER FORM</h2>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="firstName" 
                                placeholder="First Name" 
                                value={formData.firstName} 
                                onChange={handleInputChange} 
                                required 
                            />
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                value={formData.lastName} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <input 
                            type="text" 
                            name="idNumber" 
                            placeholder="ID Number" 
                            value={formData.idNumber} 
                            onChange={handleInputChange} 
                            required 
                        />
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="city" 
                                placeholder="City" 
                                value={formData.city} 
                                onChange={handleInputChange} 
                                required 
                            />
                            <input 
                                type="number" 
                                name="zipCode" 
                                placeholder="Zip Code" 
                                value={formData.zipCode} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </div>
                        <div className="checkbox">
                            <label>
                                Please review the <a href="https://sos.nebraska.gov/elections/voter-id" className="terms-link" target="_blank" rel="noopener noreferrer">Voter ID Information</a>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default LoginRegisterPage;
