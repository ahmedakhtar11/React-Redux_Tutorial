import React, { Component } from 'react'
import './App.css';

import { connect } from "react-redux";
import * as actionCreators from "./actions/actions.js"
import Pokemon from "./component/pokemon.js";

class App extends Component {
    componentDidMount() {
        this.props.loadCharmander()

    }

    render() {

        return (
            <div>
               {this.props.name} 

               <br/>
               <br/>
               <strong>Pokemon#: </strong>{this.props.pokemon.id}<br />
                        <strong>Name: </strong>
                        {this.props.pokemon.name}<br />
                        <strong>Weight: </strong>
                        {this.props.pokemon.weight}<br />
                        <strong>Height: </strong>
                        {this.props.pokemon.height}<br />
                        <strong>Base Experience: </strong>
                        {this.props.pokemon.base_experience}<br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(App);