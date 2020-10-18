import React from "react";

class Pokemon extends React.Component {

    componentDidMount() {
        this.props.handlePokemon()

    }

    render() {
        return (
            <div className="wrapper">
                <h2>React Engineer Challenge:</h2>
                {/* Pokemon1 */}
                <div className="pokemons">
                    <div>
                        <strong>Pokemon#: </strong>{this.props.pokemon.id}<br />
                        <strong>Name: </strong>
                        {this.props.pokemon.name}<br />
                        {this.props.pokemon5}<br />
                        <strong>Weight: </strong>
                        {this.props.pokemon.weight}<br />
                        <strong>Height: </strong>
                        {this.props.pokemon.height}<br />
                        <strong>Base Experience: </strong>
                        {this.props.pokemon.base_experience}<br />
                        <img height={150} width={150} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.id}.png`}
                            alt={"pokemon1"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokemon;