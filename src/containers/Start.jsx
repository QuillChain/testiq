import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Session } from '../utils/storage'

class Start extends React.Component {

    state = {
        player: "player"
    }

    setNameOfPlayer = (event) => {
        this.setState({ player: event.target.value })
    }

    clicked = () => {
        Session.set("onlinePlayer", this.state.player)
        this.props.startPressed();
    }

    render() {
        return (
            <div>
                <div className="App-brandname">
                    <i className="fas fa-graduation-cap"></i>
                    <h1>IQ Test Free
                    </h1>
                    <h3>
                        IQ Booster Game
                        </h3>    
                </div>
                {/* <Input text="Insert your name" onInputChange={this.setNameOfPlayer} /> */}
                <p>
                    Press to start the game
                </p>
                <Button isClicked={this.clicked}>Easy</Button>
                <Button isClicked={this.clicked}>Hard</Button>
            </div>
        )
    }
}
export default Start;