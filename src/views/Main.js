import React from 'react';
import UpperContainer from '../components/UpperContainer';
import ModalContainer from '../components/ModalContainer';
import Footer from '../components/Footer';

// export const ModalContext = createContext()

const Main = () => {

    return (
        <>
            <UpperContainer />
            <ModalContainer />
            <Footer />
        </>
    )
}

export default Main;