import React from 'react';
import Header from '../header/Header';
import Convert from '../convert/Convert';
import * as currencies from '../../mock-data/currencies';

class Converter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            converter: 'Currency'
        };
        this.onConverterSelect = this.onConverterSelect.bind(this);
    }

    onConverterSelect(converter) {
        this.setState({ converter });
    }
    render() {
        let appConverters = ['Currency', 'Weight', 'Temperature', 'Time', 'Length'];
        return (
            <div>
                <Header converters={appConverters} onClick={this.onConverterSelect}/>
                <Convert converter={this.state.converter} currencies={currencies.CURRENCIES}/>
            </div>
        );
    }
}

export default Converter;