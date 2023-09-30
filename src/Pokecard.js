import React, { Component } from 'react';
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render() {
        let n = this.props.id
        const zerofilled = ('000' + n).slice(-3);
        console.log(zerofilled)
        let imgSrc = `${POKE_API}${zerofilled}.png`;
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>EXP: {this.props.exp}</div>
            </div>
        )
    }
}



export default Pokecard;