import { useState } from "react";
import { generateRandomPassword } from "./utils/PasswordGenerator";
import "./App.css";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passWord, setPassWord] = useState("");

  const generatePassword = (length: number) => {
    try {
      const password = generateRandomPassword(length);
      setGeneratedPassword(password);
    } catch (error) {
      console.error("Error generating password:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <div className="card">
          <input
            type="number"
            step={1}
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="input length of password"
          />
          <button onClick={() => generatePassword(Number(passWord))}>
            Generate Password
          </button>
          <p>Generated Password: {generatedPassword}</p>
        </div>
      </div>
    </>
  );
}

export default App;
