import { useState, useEffect } from 'react';

const Challenge = props => {
    const [v, setV] = useState(0)
    const [lv, setLV] = useState(0);

    useEffect(() => {
        const saved = window.localStorage.getItem("test") || 0;
        setLV(saved);
        window.localStorage.setItem("test", parseInt(saved) + 1);
    }, [])


    return <div>
        <h1>Here is the challenge page</h1>
        <p>Pretend it's all pretty and has options like in the mockups.</p>
        <p>Session state: {v} <button onClick={() => setV(v => v + 1)}>+++</button></p>
        <p>Local Storage state: {lv} </p>
    </div>
}
export default Challenge;