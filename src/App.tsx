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
      <div className='container'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((comp) => (
          <StudentScore studentNum={comp} scoreObject={scoreObject} key={comp} />
        ))}
      </div>
      <div className='container'>
        <button
          onClick={() => {
            console.log('Stringified Version', JSON.stringify(scoreObject.current));
            console.log('Plain Object Version', scoreObject.current);
            alert('Open the console to see the result.');
          }}>
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
