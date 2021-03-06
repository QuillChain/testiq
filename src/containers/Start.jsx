import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Session } from '../utils/storage'
import { BiCool,BiLaugh } from "react-icons/bi";

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
                    <h1>IQ WILL UP TO 200+
                    </h1>
                    <h3>
                    JUST BY PLAY IQ BOOSTER GAME
                        </h3>    
                </div>
                {/* <Input text="Insert your name" onInputChange={this.setNameOfPlayer} /> */}
                <p>
                    Press to start the game
                </p>
                <Button isClicked={this.clicked}><BiLaugh/> Easy</Button>
                <Button isClicked={this.clicked}><BiCool/> Hard</Button>
            </div>
        )
    }
}
export default Start;