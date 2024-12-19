import './App.css'
import Card from "./components/card/index.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([])

    const handleGetData = async () => {
        try {
            const res = await axios.get('/api.json')
            setData(res?.data || [])

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        handleGetData()
    }, [])
    return (
        <div className={'app'}>
            <div className={'container'}>
                {data.map((el) => <Card key={el.id} {...el}/>)}
            </div>

        </div>
    )
}

export default App
