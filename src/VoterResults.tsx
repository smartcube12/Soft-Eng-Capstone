import React from 'react';
import './VoterResults.css';
import { useNavigate } from 'react-router-dom';

const VoterResults: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate between routes


    return (
        <div className="searched-container">
            <button className="back-button" onClick={() => navigate('/search-voter')}>
                Back to Search
            </button>
            <h2>Searched Voter Results</h2>
            <form>
            </form>
        </div>
    );
};

export default VoterResults;