import Navbar from './Components/navbar';
import Searchbar from './Components/Searchbar';
import Booklist from './Components/Booklist';
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar/>
      <Searchbar search={handleSearch}/>
      <Booklist searchTerm={searchTerm}/>
    </>
  );
}

export default App;
