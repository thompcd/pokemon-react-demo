import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokemon';
import { useLocation } from 'react-router-dom';

const Pokemon = () => {
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(location.pathname).then((data) => {
      setPokemon(data);
    });
  }, [location.pathname]);

  const { id, name, height, weight, base_experience } = pokemon;

  let s = location.pathname.split('/')
  let num = +(s[s.length - 1])

  const nextPokemon = () => {
    return "/pokemon/" + (num + 1)
  }
  const previousPokemon = () => {
    return "/pokemon/" + (num - 1)
  }

  return (
    <div
      className={`poke-card pokeCard--${
        pokemon.types && pokemon.types[0].type['name']
      }`}
    >
        <div className='poke-name'>
            <h3>NO. {id}</h3>
            <h2 className='pokemon-name'>{name}</h2>
        </div>
      <div className='poke-stats'>
        <h3>Base Stats</h3>
        <div>
          {pokemon.stats &&
            pokemon.stats.map((stat, index) => {
              return (
                <p key={index}>
                  {stat['stat']['name']}:
                  <span className='pokeCard__item'>
                    <strong>{stat.base_stat}</strong>
                  </span>
                </p>
              );
            })}
        </div>
      </div>

      <div className='poke-img'>
        <img
          className='sprite'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt='pokemon-pic'
        />
      </div>

      <div className='poke-info'>
        <h3>Abilities</h3>
        <ul className='abilities'>
            {pokemon.abilities &&
            pokemon.abilities.map((ability, index) => {
                return (
                    <li className='ability' key={index}>
                    {ability['ability']['name']}
                </li>
                );
            })}
        </ul>
        <ul className='types'>
            {pokemon.types &&
            pokemon.types.map((type, index) => {
                return (
                    <li className={`type ${type['type']['name']}`}
                    key={index}>
                    {type['type']['name']}
                </li>
                );
            })}
        </ul>
    </div>
      <div className='page-nav'>
        <a href={previousPokemon()}>Previous</a>
        <a href={nextPokemon()}>Next</a>
      </div>
    </div>
  );
};

export default Pokemon;