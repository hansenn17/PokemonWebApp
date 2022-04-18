/** @jsxImportSource @emotion/react */
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Pokemons from './component/pokemons';
import PokemonDetail from './component/pokemonDetail';
import { PokemonsProvider } from './context/pokemonContext';
import MyPokemon from './component/myPokemon';
import Navbar from './component/navbar';
import NotFound from './component/notFound';
import { AppWrapper, HeaderWrapper, ContentWrapper } from './style'

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-pokeapi.graphcdn.app/"
  })

  return (
    <AppWrapper>
      <ApolloProvider client={client}>
        <PokemonsProvider>
          <Router>
            {window.location.pathname !== '/not-found' && <HeaderWrapper><Navbar /></HeaderWrapper>}
            <ContentWrapper>
              <Routes>
                <Route path='/' element={<Pokemons />} />
                <Route path='/detail/:pokemon' element={<PokemonDetail />} />
                <Route path='/my-pokemon' element={<MyPokemon />} />
                <Route path='*' element={<Navigate replace to={"/not-found"} />}></Route>
                <Route path='/not-found' element={<NotFound />}></Route>
              </Routes>
            </ContentWrapper>
          </Router>
        </PokemonsProvider>
      </ApolloProvider>
    </AppWrapper>
  );
}

export default App;
