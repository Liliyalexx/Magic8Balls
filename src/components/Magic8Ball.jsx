import React, { useState } from 'react';

const responses = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Dont count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];
  const Magic8Ball = () => {
    const [response, setResponse] = useState('');
  
    const getResponse = () => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      setResponse(responses[randomIndex]);
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Magic 8 Ball</h1>
        <div 
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: 'pink',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            fontSize: '20px',
            textAlign: 'center',
            padding: '10px',
          }}
        >
          {response || 'Ask a question'}
        </div>
        <button 
          onClick={getResponse} 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
          }}
        >
          Shake the 8 Ball
        </button>
      </div>
    );
  };
  
  export default Magic8Ball;