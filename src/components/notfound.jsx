import React from 'react';
import Heading from '../components/UI/heading'; 

const notFound = () => {
    return (
        <div className="not__found-wrapper">
            <Heading 
            span="page is not found" main="404"
            />    
        </div>
    );
};

export default notFound;