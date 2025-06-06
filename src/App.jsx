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
  };

  const handleButtonResult = () => {
    setShowResult(true);
    if (userAnswer === String(vResut)) {
      if (mode === 1 || mode === 2) setScore(prev => prev + 1);
      else if (mode === 3 || mode === 4) setScore(prev => prev + 2);
      else if (mode === 5) setScore(prev => prev + 3);
      else if (mode === 6) setScore(prev => prev + 2);
      else if (mode === 7) setScore(prev => prev + 3);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 20, right: 40, fontSize: '1.2rem', fontWeight: 'bold', color: '#1976d2' }}>
        分數: {score}
      </div>
      <h1>
        {v1 === null || v2 === null
          ? 'Hello World'
          : mode === 1 || mode === 2
            ? `${v1} = ${v2} + ?`
            : mode === 6 || mode === 7
              ? `${v1} - ${v2} = ?`
              : `${v1} + ${v2} = ?`}
      </h1>
      {/* Only show input when a level button is clicked (mode is set) */}
      {showResultButton && (
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
          placeholder="請輸入數字"
          style={{ fontSize: '1.2rem', padding: '0.5rem', marginTop: '1rem' }}
        />
      )}
      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleButton1} style={{ marginRight: '1rem' }}>
          Level 1 - 基礎
        </button>
        <button onClick={handleButton2} style={{ marginRight: '1rem' }}>
          Level 2 - 基礎
        </button>
        <button onClick={handleButton3} style={{ marginRight: '1rem' }}>
          Level 3 - 加法
        </button>
        <button onClick={handleButton4} style={{ marginRight: '1rem' }}>
          Level 4 - 加法
        </button>
        <button onClick={handleButton5} style={{ marginRight: '1rem' }}>
          Level 5 - 加法
        </button>
        <button onClick={handleButton6} style={{ marginRight: '1rem' }}>
          Level 6 - 減法
        </button>
        <button onClick={handleButton7}>Level 7 - 減法</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {showResultButton && (
          <button onClick={handleButtonResult}>顯示答案</button>
        )}
      </div>
      {showResult && v1 !== null && v2 !== null && (
        <div style={{ marginTop: '1.5rem', fontSize: '1.5rem', color: userAnswer !== String(vResut) ? '#d32f2f' : '#1976d2' }}>
          {mode === 1 || mode === 2
            ? `${v1} = ${v2} + [${vResut}]`
            : mode === 6 || mode === 7
              ? `${v1} - ${v2} = [${vResut}]`
              : `${v1} + ${v2} = [${vResut}]`}
        </div>
      )}
    </div>
  )
}

export default App
