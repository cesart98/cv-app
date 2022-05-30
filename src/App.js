import './App.css';
import CVForm from './components/CVForm';
import { useState } from 'react';

function App() {
  const [formData, setformData] = useState({});
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [workData, setWorkData] = useState({});

  const handleChange = (dataType, e) => {
    function updateData() {
      if(dataType == 'personal') { setPersonalData({...personalData, ...newData}) };
      if(dataType == 'education') { setEducationData({...educationData, ...newData}) };
      if(dataType == 'work') { setWorkData({...workData, ...newData}) };
    }
    const newData = Object.fromEntries([
      [e.target.id, e.target.value]
    ]);

    updateData();
  }

  return (
    <div className="App">
      <CVForm handleChange={handleChange}/>
    </div>
  );
}

export default App;
