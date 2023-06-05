import { useRef } from 'react';
import './App.css';
import StudentScore from './StudentScore';

function App() {
  const scoreObject = useRef<Record<string, Record<string, number>>>({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  return (
    <>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <div className='scoresWrapper'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((comp) => (
          <StudentScore studentNum={comp} scoreObject={scoreObject} />
        ))}
      </div>
      <button
        onClick={() => {
          console.log(scoreObject.current);
        }}>
        Submit
      </button>
    </>
  );
}

export default App;
