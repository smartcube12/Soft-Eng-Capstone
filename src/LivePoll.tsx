import React, { useState } from 'react';
import './LivePoll.css';
import { useNavigate } from 'react-router-dom';

interface IVote {
    [key: string]: number;
}

const LivePoll: React.FC = () => {
    const navigate = useNavigate(); // Hook to navigate between routes

    const [trackVotes, setVotes] = useState<IVote>({
        HOR1:0,
        HOR2:0,
        Judge1:0,
        Judge2:0,
        Mayor1:0,
        Mayor2:0,
        Measure1_For:0,
        Measure1_Against:0,
        Measure2_For:0,
        Measure2_Against:0,
        Measure3_For:0,
        Measure3_Against:0,
        President1:0,
        President2:0, 
        Senate1:0,
        Senate2:0,
        VicePresident1:0,
        VicePresident2:0}); //placeholders

    return (
        <div className="my-poll-container">
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Search
            </button>
            <h2>Live Poll</h2>
            <form>
                <div className ="my-choice">
                {Object.keys(trackVotes).map((choice) => (
                    <div key={choice}
                    className = "my-choice">
                <label>{choice}</label>
                {}
                <span>{trackVotes[choice as keyof IVote]} votes</span>
                </div>
                ))}
                </div>
            </form>
        </div>
    );
};

export default LivePoll;
