import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int){
        pokemons(limit: $limit, offset: $offset){
            results{
                id
                name
                dreamworld
                artwork
            }
        }
    }
`
export const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!){
        pokemon(name: $name) {
            id
            name
            moves {
                move {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
        }
    }
`