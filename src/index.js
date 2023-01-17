// Since React 18:
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { App } from './App.jsx'

const container = document.getElementById('app')

const root = createRoot(container)
// createRoot(container!) if you use TypeScript

const client = new ApolloClient({
  uri: 'https://petgram-server-surimi-surimidiaz.vercel.app/graphql',
  cache: new InMemoryCache()
})

root.render(
  <ApolloProvider client={client}>
    <App tab='home' />
  </ApolloProvider>)

// root.render(<App tab="home" />);

// ------------------------------------------------------------------

// según el Curso, deberíamos escribir:

// import ReactDOM from "react-dom";
// ReactDOM.render("Hello, World!", document.getElementById("app"))

// ...pero al compilar recibimos el siguiente error:

// "ReactDOM.render is no longer supported in React 18. Use createRoot
// instead. Until you switch to the new API, your app will behave as
// if it’s running React 17."

// La solución de https://reactjs.org/link/switch-to-createroot es:

// Until React 17:

// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);
