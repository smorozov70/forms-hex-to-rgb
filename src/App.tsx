import React, { useState } from 'react';
import './App.css';
import ConvertForm from './components/ConvertForm';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#f0f0f0');

  return (
    <div className="app" style={{ backgroundColor }}>
      <ConvertForm setBackgroundColor={setBackgroundColor} />
    </div>
  );
};

export default App;