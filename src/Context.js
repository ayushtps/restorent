import React, { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';

export let LoaderContext = createContext()

function Context(props) {
    const [loader, setloader] = useState(false);
    return (
        <>
            <LoaderContext.Provider value={{ loader: loader, setloader: setloader }}>
                <BrowserRouter>
                    <Routers />
                </BrowserRouter>
            </LoaderContext.Provider>
        </>
    )
}

export default Context