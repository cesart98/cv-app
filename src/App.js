import './App.css';
import CVForm from './components/CVForm';
import { useState } from 'react';

function App() {
  const [formData, setformData] = useState({});
  const [personalData, setpersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [workData, setworkData] = useState({});

  return (
    <div className="App">
      <CVForm />
    </div>
  );
}

export default App;
