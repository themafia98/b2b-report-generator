import './App.css'
import {useCallback} from "react";
import styled from "@emotion/styled";
import {Builder} from "./components/builder/builder.tsx";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { AppNavBar } from "./components/builder/AppNavBar";
import { ReportsPage } from "./components/reports/ReportsPage";
import { HelpPage } from "./components/help/HelpPage.tsx";

const Button = styled.button`
  padding: 32px;
  background-color: #6366f1;
  font-size: 24px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(99,102,241,0.08);
  margin-top: 32px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background-color: #4338ca;
    color: #fff;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: #f7f8fa;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: #6366f1;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 32px;
  max-width: 600px;
  text-align: center;
`;

const Checklist = styled.ul`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 32px;
  list-style: none;
  padding: 0;
  max-width: 500px;
`;

const ChecklistItem = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Actions = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
`;

function Landing() {
    const navigate = useNavigate();
    const getStartedHandler = useCallback(() => {
        navigate('/builder');
    }, [navigate]);
    return (
        <Container>
            <Header>📄 B2B Report Generator</Header>
            <Description>
                Create professional service reports for your B2B clients in just a few clicks. Fill in your company and client details, add work items, and generate a ready-to-sign document.
            </Description>
            <Checklist>
                <ChecklistItem>✅ Step 1: Enter your company and client information</ChecklistItem>
                <ChecklistItem>✅ Step 2: Add work items and hours</ChecklistItem>
                <ChecklistItem>✅ Step 3: Review and generate your report</ChecklistItem>
                <ChecklistItem>✅ Step 4: Download or sign the document</ChecklistItem>
            </Checklist>
            <Actions>
                <Button onClick={getStartedHandler}>Create New Report</Button>
                <Button onClick={getStartedHandler}>Load Example</Button>
                <Button onClick={() => window.open('https://www.gov.pl/web/gov/podpisz-dokument-elektronicznie-wykorzystaj-podpis-zaufany', '_blank')}>View Help</Button>
            </Actions>
        </Container>
    )
}

function App() {
    return (
        <Router>
            <AppNavBar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/builder" element={<Builder />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/help" element={<HelpPage />} />
            </Routes>
        </Router>
    );
}

export default App
