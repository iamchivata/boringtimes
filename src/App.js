import React from 'react';
import { Twemoji } from 'react-emoji-render';
import './App.css';
import './bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            suggestion: []
        }
    }
    componentDidMount(e) {
        fetch("http://www.boredapi.com/api/activity")
            .then(res => res.json())
            .then(
                json => {
                    this.setState({
                        suggestion: json.activity
                    })
                }
            )
    }
    render() {
        return (
                <div className="container">

                    <div className="row">
                        <div className="centertext">
                            <p className="">{this.state.suggestion}</p>
                        </div>
                    </div>


                    <div className="byme">
                        <button onClick={(e) => this.componentDidMount(e)} className="col-xl col-8.5 whattodo btn btn-outline-light">Feeling bored? Click here <Twemoji text=":sunglasses:" /></button>
                        by<a href="https://twitter.com/chivaata_" target="blank"> <b className="name">shivatavakol</b></a>
                    </div>

                </div>
        )
    }
}

export default App;