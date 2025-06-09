import { useState } from 'react'
import './App.css'

function App() {
  const [v1, setV1] = useState(null)
  const [v2, setV2] = useState(null)
  const [mode, setMode] = useState(null)
  const [showResult, setShowResult] = useState(false);
  const [showResultButton, setShowResultButton] = useState(false); // Show the result button only after a level button is clicked
  const [inputValue, setInputValue] = useState('');
  const [vResut, setVResut] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false); // Track if next question button should be enabled
  // Track which level button is active
  const [activeLevel, setActiveLevel] = useState(null);

  const handleButton1 = () => {
    const random = Math.floor(Math.random() * 9) + 1
    setV1(10)
    setV2(random)
    setMode(1)
    setShowResult(false);
    setShowResultButton(true);
    setVResut(10 - random);
    setInputValue('');
    setUserAnswer('');
    setActiveLevel(1);
  }

  const handleButton2 = () => {
    const v1Random = Math.floor(Math.random() * 7) + 3 // 3~9
    let v2Random = Math.floor(Math.random() * (v1Random - 1)) + 1 // 1~(v1-1)
    setV1(v1Random)
    setV2(v2Random)
    setMode(2)
    setShowResult(false);
    setShowResultButton(true);
    setVResut(v1Random - v2Random);
    setInputValue('');
    setUserAnswer('');
    setActiveLevel(2);
  }

  const handleButton3 = () => {
    let s1 = Math.floor(Math.random() * 10) // 0~9
    let s2 = Math.floor(Math.random() * 9) // 0~8
    let possibleS3 = []
    for (let i = 1; i <= 9; i++) {
      if (s2 + i < 10) possibleS3.push(i)
    }
    let s3 = possibleS3[Math.floor(Math.random() * possibleS3.length)]
    const v1Val = s1 * 10 + s2;
    setV1(v1Val)
    setV2(s3)
    setMode(3)
    setShowResult(false);
    setShowResultButton(true);
    setVResut(v1Val + s3);
    setInputValue('');
    setUserAnswer('');
    setActiveLevel(3);
  }

  const handleButton4 = () => {
    let v1Random, v2Random
    while (true) {
      v1Random = Math.floor(Math.random() * 89) + 10 // 10~98
      v2Random = Math.floor(Math.random() * 9) + 1   // 1~9
      if (v1Random + v2Random < 100) break
    }
    setV1(v1Random)
    setV2(v2Random)
    setMode(4)
    setShowResult(false);
    setShowResultButton(true);
    setVResut(v1Random + v2Random);
    setInputValue('');
    setUserAnswer('');
    setActiveLevel(4);
  }

  const handleButton5 = () => {
    let v1Random, v2Random
    while (true) {
      v1Random = Math.floor(Math.random() * 98) + 1 // 1~98
      v2Random = Math.floor(Math.random() * 98) + 1 // 1~98
      if (v1Random + v2Random < 100) break
    }
    setV1(v1Random)
    setV2(v2Random)
    setMode(5)
    setShowResult(false);
    setShowResultButton(true);
    setVResut(v1Random + v2Random);
    setInputValue('');
    setUserAnswer('');
    setActiveLevel(5);
  }

  const handleButton6 = () => {
    let s1 = Math.floor(Math.random() * 9) + 1; // 1~9
    let s2 = Math.floor(Math.random() * 9) + 1; // 1~9
    let possibleS3 = [];
    for (let i = 1; i <= 9; i++) {
      if (s2 >= i) possibleS3.push(i);
    }
    let s3 = possibleS3[Math.floor(Math.random() * possibleS3.length)];
    const v1Val = s1 * 10 + s2;
    setV1(v1Val);
    setV2(s3);
    setMode(6);
    setShowResult(false);
    setShowResultButton(true);
    setVResut(v1Val - s3);
    setInputValue('');
    setUserAnswer('');
    setActiveLevel(6);
  };

  const handleButton7 = () => {
    let v1Random, v2Random;
    while (true) {
      v1Random = Math.floor(Math.random() * 98) + 2; // 2~99
      v2Random = Math.floor(Math.random() * 98) + 1; // 1~98
      if (v1Random > v2Random) break;
    }
    setV1(v1Random);
    setV2(v2Random);
    setMode(7);
    setShowResult(false);
    setShowResultButton(true);
    setVResut(v1Random - v2Random);
    setInputValue('');
    setUserAnswer('');
    setActiveLevel(7);
  };

  const handleButtonResult = () => {
    setShowResult(true);
    setInputValue('');
    //setUserAnswer('');
    setShowResultButton(false); // Optionally, you can remove this line if you want the button to always show
    setNextEnabled(true); // Enable next question button
    if (userAnswer === String(vResut)) {
      if (mode === 1 || mode === 2) setScore(prev => prev + 1);
      else if (mode === 3 || mode === 4) setScore(prev => prev + 2);
      else if (mode === 5) setScore(prev => prev + 3);
      else if (mode === 6) setScore(prev => prev + 2);
      else if (mode === 7) setScore(prev => prev + 3);
      setShowCorrect(true);
      setTimeout(() => setShowCorrect(false), 1000);
    } else {
      setShowWrong(true);
      setTimeout(() => setShowWrong(false), 1500);
    }
  };

  // Next question handler: triggers the current active level's handler
  const handleNextQuestion = () => {
    if (activeLevel === 1) handleButton1();
    else if (activeLevel === 2) handleButton2();
    else if (activeLevel === 3) handleButton3();
    else if (activeLevel === 4) handleButton4();
    else if (activeLevel === 5) handleButton5();
    else if (activeLevel === 6) handleButton6();
    else if (activeLevel === 7) handleButton7();
    setNextEnabled(false);
  };

  return (
    
    <div style={{ textAlign: 'center', marginTop: '3rem', position: 'relative' }}>
      <div style={{ position: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#1976d2' }}>
        累積分數: {score}
      </div>
      <h1>        
        {v1 === null || v2 === null
          ? '數學大挑戰'
          : mode === 1 || mode === 2
            ? `${v1} = ${v2} + ?`
            : mode === 6 || mode === 7
              ? `${v1} - ${v2} = ?`
              : `${v1} + ${v2} = ?`}
      </h1>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          value={inputValue}
          onChange={e => {
            const val = e.target.value;
            if (/^\d*$/.test(val)) {
              setInputValue(val);
              setUserAnswer(val); // Save to userAnswer for correction check
            }
          }}
          disabled={!showResultButton || showResult}
          placeholder="請輸入數字"
          style={{ fontSize: '1.2rem', padding: '0.5rem', marginTop: '1rem', marginRight: '1rem', width: '120px' }}
        />
        <button
          onClick={handleButtonResult}
          disabled={!showResultButton || !inputValue}
          style={{ marginTop: '1rem', marginRight: '1rem' }}
        >
          回答
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={!nextEnabled}
          style={{ marginTop: '1rem' }}
        >
          下一題
        </button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={handleButton1}
          style={{
            marginRight: '1rem',
            background: activeLevel === 1 ? '#1976d2' : '',
            color: activeLevel === 1 ? 'white' : '',
            border: activeLevel === 1 ? '2px solid #1976d2' : ''
          }}
        >
          Level 1 - 基礎
        </button>
        <button
          onClick={handleButton2}
          style={{
            marginRight: '1rem',
            background: activeLevel === 2 ? '#1976d2' : '',
            color: activeLevel === 2 ? 'white' : '',
            border: activeLevel === 2 ? '2px solid #1976d2' : ''
          }}
        >
          Level 2 - 基礎
        </button>
        <button
          onClick={handleButton3}
          style={{
            marginRight: '1rem',
            background: activeLevel === 3 ? '#1976d2' : '',
            color: activeLevel === 3 ? 'white' : '',
            border: activeLevel === 3 ? '2px solid #1976d2' : ''
          }}
        >
          Level 3 - 加法
        </button>
        <button
          onClick={handleButton4}
          style={{
            marginRight: '1rem',
            background: activeLevel === 4 ? '#1976d2' : '',
            color: activeLevel === 4 ? 'white' : '',
            border: activeLevel === 4 ? '2px solid #1976d2' : ''
          }}
        >
          Level 4 - 加法
        </button>
        <button
          onClick={handleButton5}
          style={{
            marginRight: '1rem',
            background: activeLevel === 5 ? '#1976d2' : '',
            color: activeLevel === 5 ? 'white' : '',
            border: activeLevel === 5 ? '2px solid #1976d2' : ''
          }}
        >
          Level 5 - 加法
        </button>
        <button
          onClick={handleButton6}
          style={{
            marginRight: '1rem',
            background: activeLevel === 6 ? '#1976d2' : '',
            color: activeLevel === 6 ? 'white' : '',
            border: activeLevel === 6 ? '2px solid #1976d2' : ''
          }}
        >
          Level 6 - 減法
        </button>
        <button
          onClick={handleButton7}
          style={{
            background: activeLevel === 7 ? '#1976d2' : '',
            color: activeLevel === 7 ? 'white' : '',
            border: activeLevel === 7 ? '2px solid #1976d2' : ''
          }}
        >
          Level 7 - 減法
        </button>
      </div>
      {showResult && v1 !== null && v2 !== null && (
        <div style={{ marginTop: '1.5rem', fontSize: '1.5rem', color: userAnswer === String(vResut) ? '#4caf50' : '#d32f2f' }}>
          {mode === 1 || mode === 2
            ? `${v1} = ${v2} + [${vResut}]`
            : mode === 6 || mode === 7
              ? `${v1} - ${v2} = [${vResut}]`
              : `${v1} + ${v2} = [${vResut}]`}
        </div>
      )}
      <div style={{ position: 'absolute', top: 60, right: 40, zIndex: 1000 }}>
        {showCorrect && (
          <div style={{ background: '#4caf50', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontSize: '1.3rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
            答對了!!好棒!
          </div>
        )}
        {showWrong && (
          <div style={{ background: '#D9B300', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontSize: '1.3rem', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
            再試看看喔！
          </div>
        )}
      </div>
    </div>
  )
}

export default App
