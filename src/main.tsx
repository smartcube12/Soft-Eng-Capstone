import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginRegisterPage from './LoginAndRegister';
import VoterInformationPage from './VoterInformationPage';
import VotingBallotPage from './VotingBallotPage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchVoter from './SearchVoter.tsx';
import VoterResults from './VoterResults.tsx';
import LivePoll from './LivePoll.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginRegisterPage />} />
                <Route path="/voter-information" element={<VoterInformationPage />} />
                <Route path="/voting-ballot" element={<VotingBallotPage />} />
                <Route path="/search-voter" element={<SearchVoter />} />
                <Route path="/voter-results" element={<VoterResults />} />
                <Route path="/live-poll" element={<LivePoll />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
