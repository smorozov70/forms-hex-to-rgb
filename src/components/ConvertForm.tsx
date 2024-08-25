import React, { useState } from 'react';
import './ConvertForm.css';

interface ConvertFormProps {
  setBackgroundColor: (color: string) => void;
}

const isValidHex = (hex: string): boolean => /^#([0-9A-F]{3}){1,2}$/i.test(hex);

const hexToRgb = (hex: string): string | null => {
  if (!isValidHex(hex)) return null;

  let trimmedHex = hex.replace(/^#/, '');
  if (trimmedHex.length === 3) {
    trimmedHex = trimmedHex.split('').map(char => char + char).join('');
  }

  const bigint = parseInt(trimmedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};

const ConvertForm: React.FC<ConvertFormProps> = ({ setBackgroundColor }) => {
  const [hex, setHex] = useState<string>('');
  const [rgb, setRgb] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHex(value);
    if (isValidHex(value)) {
      const rgbValue = hexToRgb(value);
      setRgb(rgbValue);
      setBackgroundColor(value);
    } else {
      setRgb(null);
      setBackgroundColor('#f0f0f0');
    }
  };

  return (
    <div className="convert-form">
      <input
        type="text"
        value={hex}
        onChange={handleChange}
        placeholder="#FFFFFF"
        maxLength={7}
        className="hex-input"
      />
      {rgb ? <div className="rgb-output">{rgb}</div> : <div className="rgb-output error">ошибка!</div>}
    </div>
  );
};

export default ConvertForm;