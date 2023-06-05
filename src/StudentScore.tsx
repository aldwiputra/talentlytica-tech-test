import AspectScore from './AspectScore';
import './StudentScore.css';

function StudentScore(props: {
  studentNum: number;
  scoreObject: React.MutableRefObject<Record<string, Record<string, number>>>;
}) {
  return (
    <div className='componentWrapper'>
      <div className='profileWrapper'>
        <img src='/profile-placeholder.png' alt='profile photo placeholder' />
        <h4>Mahasiswa {props.studentNum}</h4>
      </div>

      {[1, 2, 3, 4].map((item) => (
        <AspectScore
          index={item}
          key={item}
          studentNum={props.studentNum}
          scoreObject={props.scoreObject}
        />
      ))}
    </div>
  );
}

export default StudentScore;
