import React from 'react';
import Header from '../header/Header';

class Converter extends React.Component {

    render() {
        let appConverters = ['Currency', 'Weight', 'Temperature', 'Time', 'Length'];
        return (
            <div>
                <Header converters={appConverters}/>
            </div>
        );
    }
}

export default Converter;