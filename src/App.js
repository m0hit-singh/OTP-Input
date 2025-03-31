import { useState, useRef, useEffect } from "react";
import "./styles.css";

const INPUT_SIZE = 4;
const Inputs = new Array(INPUT_SIZE).fill("");
export default function App() {
  const [inputArr, setInputArr] = useState(Inputs);
  const inputArrRef = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return false;
    const newArr = [...inputArr];
    const newValue = value.trim();
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && inputArrRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    console.log(e);
    if (!e.target.value && e.key === "Backspace") {
      inputArrRef.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    inputArrRef.current[0]?.focus();
  }, []);

  return (
    <div className="App">
      <h1>OTP INPUT</h1>
      <div className="input-group">
        {inputArr.map((val, index) => (
          <input
            key={index}
            className={`otp-input input-${index}`}
            type="text"
            value={val}
            pattern="[0-9]"
            required
            ref={(input) => (inputArrRef.current[index] = input)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
}
