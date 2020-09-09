import React from 'react';
import UpperContainer from '../components/UpperContainer';
import ModalContainer from '../components/ModalContainer';
import Footer from '../components/Footer';

// export const ModalContext = createContext()

const Main = () => {

    // const windowSz = {width: window.innerWidth, height: window.innerHeight}
    // const showWarning = () => {
    //     if (windowSz.width > 551 && windowSz.width < 800 )
    // }

    return (
        // {

        // }
        <>
            <UpperContainer />
            <ModalContainer />
            <Footer />
        </>
    )
}

export default Main;