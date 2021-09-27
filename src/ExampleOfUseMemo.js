import React,{useState,useMemo} from 'react'

function ExampleOfUseMemo() {
    const [length, set_length] = useState(3);
    const [name, set_name] = useState('John Doe');
  
    return (
      <>
       <h1>From Example Of useMomo  component</h1>
        <input value={name} onChange={e => set_name(e.target.value)} />
        <NameDisplay name={name}/>
        <hr />
        <input value={length} onChange={e => set_length(Number(e.target.value))} />
        <FibDisplay length={length} />
      </>
    );
  }
  
  function FibDisplay({length}) {
    const numbers = useMemo(() => {
      console.log('Calculating numbers...');
      const result = [1, 1];
      for (let i = 2; i < length; i++) {
        result[i] = result[i - 1] + result[i - 2];
      }
      return result;
    }, [length]);
  
    return <p>{length} numbers of the fibonacci sequence: {numbers.join(', ')}</p>;
  }
  
  const NameDisplay = React.memo(function ({name}) {
    console.log('Rerendering name...');
    return <p>Your name is {name}</p>;
  });

export default ExampleOfUseMemo
