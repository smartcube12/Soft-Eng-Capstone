import React from 'react';
import './SearchVoter.css';
import { useNavigate } from 'react-router-dom';

const SearchVoter: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate between routes

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/voter-results');
        
    };

    return (
        <div className="my-search-container">
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Registration
            </button>
            <h2>Search Voter</h2>
            <form onSubmit={handleRegister}>
                <label>
                    Voter ID:
                    <input type="text" placeholder="Enter Voter ID" required />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" required />
                </label>
                <button type="submit" className="my-search-button">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchVoter;
