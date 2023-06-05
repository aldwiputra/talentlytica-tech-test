import { useEffect, useRef } from 'react';

export default function AspectScore(props: {
  index: number;
  studentNum: number;
  scoreObject: React.MutableRefObject<Record<string, Record<string, number>>>;
}) {
  const selectElement = useRef<HTMLSelectElement>(null);
  const scoreAspectString = `aspek_penilaian_${props.index}`;
  const studentNumString = `mahasiswa_${props.studentNum}`;

  useEffect(() => {
    props.scoreObject.current[scoreAspectString][studentNumString] = Number(
      selectElement.current?.value
    );
  });

  return (
    <div>
      <select
        name={`aspek-penilaian-${props.index}`}
        className='scoreInput'
        ref={selectElement}
        onChange={(event) => {
          props.scoreObject.current[scoreAspectString][studentNumString] = Number(
            event.target.value
          );
        }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </select>
    </div>
  );
}
