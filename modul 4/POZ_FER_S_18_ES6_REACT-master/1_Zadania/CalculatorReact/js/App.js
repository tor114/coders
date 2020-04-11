import React, {useState} from 'react';

const App = () => {

  const [n1, setN1] = useState([...new Array(8)].map(() => 0));
  const [n2, setN2] = useState([...new Array(8)].map(() => 0));
  const [res, setRes] = useState([...new Array(9)].map(() => 0));

  function increment(listNumber, index) {
    if(listNumber === 1) {
      n1[index] = n1[index] === 9 ? 0 : n1[index] + 1;
      setN1([...n1]);
    } else {
      n2[index] = n2[index] === 9 ? 0 : n2[index] + 1;
      setN2([...n2]);
    }
    const tempRes = [...res.map((el, i) => [0,...n1][i] + [0,...n2][i])];
    while (tempRes.filter(n => n>=10).length) {
      for (let i = 0; i < tempRes.length; i++) {
        if (tempRes[i] >= 10) {
          tempRes[i] -= 10;
          tempRes[i - 1] += 1;
        }
      }
    }
    setRes([...tempRes]);
  }

  return (<>
    <div style={{paddingLeft: '20px'}}>{n1.map(
      (n, i) => <button key={i} onClick={() => increment(1, i)}>{n}</button>
    )}</div>
    <div style={{paddingLeft: '20px'}}>{n2.map(
      (n, i) => <button key={i} onClick={() => increment(2, i)}>{n}</button>
    )}</div>
    <hr/>
    <div>{res.map((n,i) => <button key={i}>{n}</button>)}</div>
  </>);
};

export default App;