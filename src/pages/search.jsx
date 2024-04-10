import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Heading,
  TextField,
  View,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const Search = ({ onSearchChange }) => {

  const { signOut } = useAuthenticator();


  return (
  <div>
    <Heading>Nom Nom Next</Heading>
    <div>
      <div class="search-container">
        <form action="/search" method="get">
          <input type="text" placeholder="Search..." name="search"></input>
          <button type="submit">Search</button>
          <select name="category">
            <option value="">All Categories</option>
            <option value="Vegan">Vegan</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Dairy-Free">Dairy-Free</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Asian</option>
            <option value="American">American</option>
          </select>
        </form>
      </div>
      <View>
      <div className="App-header">
          <nav>
            <Link to="/post" className="link-style"><button className="button-post">Post</button></Link>
            <Link to="/account" className="link-style"><button className="button-signout">Account Details</button></Link>
            <button className="button-signout" onClick={signOut}>Sign Out</button>
          </nav>
        </div>
        </View>
    </div>
    </div>
  )
}

export default withAuthenticator(Search);
