import React, { useState } from 'react';
import './VotingBallotPage.css';
import { useNavigate } from 'react-router-dom';

const VotingBallotPage: React.FC = () => {
    // Define the types for ballot selections
    type SelectionGroup =
        | 'president'
        | 'vicePresident'
        | 'senate'
        | 'houseOfRepresentatives'
        | 'judges'
        | 'mayor'
        | 'measure1'
        | 'measure2'
        | 'measure3';

    // State to store user selections
    const [selections, setSelections] = useState<Record<SelectionGroup, string>>({
        president: '',
        vicePresident: '',
        senate: '',
        houseOfRepresentatives: '',
        judges: '',
        mayor: '',
        measure1: '',
        measure2: '',
        measure3: '',
    });

    // Navigation to redirect after submission
    const navigate = useNavigate();

    // Handle selection toggling
    const handleSelection = (group: SelectionGroup, value: string) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [group]: prevSelections[group] === value ? '' : value, // Toggle selection
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting selections:', selections);
        try {
            // Send the ballot selections to the backend
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/Ballot`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selections),
            });

            if (response.ok) {
                console.log('Ballot submitted successfully');
                navigate('/'); // Redirect to home page
            } else {
                console.error('Failed to submit ballot');
            }
        } catch (error) {
            console.error('Error submitting ballot:', error);
        }
    };

    return (
        <div className="ballot-container">
            <h2>Voting Ballot</h2>
            <form onSubmit={handleSubmit}>
                <div className="ballot-columns">
                    {/* Left column - Candidates */}
                    <div className="ballot-column candidates-column">
                        <div className="ballot-section">
                            <h3>President</h3>
                            <button
                                type="button"
                                className={`vote-button ${selections.president === 'candidate1' ? 'selected' : ''}`}
                                onClick={() => handleSelection('president', 'candidate1')}
                            >
                                Candidate 1
                            </button>
                            <button
                                type="button"
                                className={`vote-button ${selections.president === 'candidate2' ? 'selected' : ''}`}
                                onClick={() => handleSelection('president', 'candidate2')}
                            >
                                Candidate 2
                            </button>
                        </div>

                        <div className="ballot-section">
                            <h3>Vice President</h3>
                            <button
                                type="button"
                                className={`vote-button ${selections.vicePresident === 'candidate1' ? 'selected' : ''}`}
                                onClick={() => handleSelection('vicePresident', 'candidate1')}
                            >
                                Candidate 1
                            </button>
                            <button
                                type="button"
                                className={`vote-button ${selections.vicePresident === 'candidate2' ? 'selected' : ''}`}
                                onClick={() => handleSelection('vicePresident', 'candidate2')}
                            >
                                Candidate 2
                            </button>
                        </div>

                        <div className="ballot-section">
                            <h3>Senate</h3>
                            <button
                                type="button"
                                className={`vote-button ${selections.senate === 'candidate1' ? 'selected' : ''}`}
                                onClick={() => handleSelection('senate', 'candidate1')}
                            >
                                Candidate 1
                            </button>
                            <button
                                type="button"
                                className={`vote-button ${selections.senate === 'candidate2' ? 'selected' : ''}`}
                                onClick={() => handleSelection('senate', 'candidate2')}
                            >
                                Candidate 2
                            </button>
                        </div>

                        {/* Add more sections for House of Representatives, Judges, Mayor */}
                    </div>

                    {/* Right column - Ballot Measures */}
                    <div className="ballot-column measures-column">
                        <h3>Ballot Measures</h3>

                        <div className="measure">
                            <p>Measure 1: Description of measure</p>
                            <button
                                type="button"
                                className={`vote-button ${selections.measure1 === 'for' ? 'selected' : ''}`}
                                onClick={() => handleSelection('measure1', 'for')}
                            >
                                For
                            </button>
                            <button
                                type="button"
                                className={`vote-button ${selections.measure1 === 'against' ? 'selected' : ''}`}
                                onClick={() => handleSelection('measure1', 'against')}
                            >
                                Against
                            </button>
                        </div>

                        <div className="measure">
                            <p>Measure 2: Description of measure</p>
                            <button
                                type="button"
                                className={`vote-button ${selections.measure2 === 'for' ? 'selected' : ''}`}
                                onClick={() => handleSelection('measure2', 'for')}
                            >
                                For
                            </button>
                            <button
                                type="button"
                                className={`vote-button ${selections.measure2 === 'against' ? 'selected' : ''}`}
                                onClick={() => handleSelection('measure2', 'against')}
                            >
                                Against
                            </button>
                        </div>

                        {/* Add more ballot measures as needed */}
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default VotingBallotPage;
