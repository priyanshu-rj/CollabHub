import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home.css'
const Home = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value]);

    return (
   
        <div className="container">
          <h1> Video Call Room </h1>
             <div className='other' >
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter room code"
            />
            <button  className="button"onClick={handleJoinRoom}>Join</button>
            </div> 
            <p>develop by priyanshu</p>
        </div>
       
    );
};

export default Home;

