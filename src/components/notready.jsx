import React from 'react';
import Heading from '../components/UI/heading'; 

const notReady = () => {
    return (
        <div className="not__found-wrapper">
            <Heading 
            span="page is not ready" main="yet"
            />    
        </div>
    );
};

export default notReady;