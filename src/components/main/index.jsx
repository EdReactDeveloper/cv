import React, { Component } from 'react';
import SectionOne from './about';
import SectionTwo from './technologies';
import SectionThree from './portfolio';
import SectionFour from './experience'
class Main extends Component {
    render() {
        return (
            <main class="main">
           <SectionOne/>
            <SectionTwo />
            <SectionThree/>
            <SectionFour/>            
        </main>
        );
    }
}

export default Main;