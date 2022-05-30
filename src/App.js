import './App.css';
import CVForm from './components/CVForm';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({});
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [workData, setWorkData] = useState({});

  const updateData = (dataType, newData) => {
    if(dataType == 'personal') return setPersonalData({...personalData, ...newData});
    if(dataType == 'education') return setEducationData({...educationData, ...newData});
    if(dataType == 'work') return setWorkData({...workData, ...newData});
    if(dataType == 'form') return setFormData({...formData, ...newData});
  }

  const handleChange = (dataType, e) => {
    const newData = Object.fromEntries([
      [e.target.id, e.target.value]
    ]);

    updateData(dataType, newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = Object.fromEntries([
      ['personalData', {...personalData}],
      ['educationData', {...educationData}],
      ['workData', {...workData}],
    ])

    updateData('form', newData);
  }

  return (
    <div className="App">
      <CVForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
