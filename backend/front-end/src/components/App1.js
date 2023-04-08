import React, { useEffect, useState } from 'react';
// import './App.css';
function App1() {
  const [URL, setURL] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=LwI5Js0ZNB49XrYCtPvwEamPfqgyYKCAQWDnndgx');
      const data = await response.json();
      setURL(data.url);
    };
    fetchData();
  }, []);
  return (
    <div className="App1" height="50" width="50">
      {
        URL ?
          <div>
            
            < img src={URL} alt="blank" style={{ width: '90%', height: '90%', marginTop: '40px' }} />
         <p style={{textAlign: 'center', fontSize: '20px'}}>Image of the day</p>
          </div>
          :
          <p>Loading...</p>
      }
    </div>

  );
}

export default App1;