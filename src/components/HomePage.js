
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
const HomePage = () => {
  const [searchWord, setSearchWord] = useState('');
  const [wordData, setWordData] = useState(null);

  const handleSearch = async () => {
    if (searchWord.trim() !== '') {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
        if (response.ok) {
          const data = await response.json();
          setWordData(data[0]); // Assuming the API response is an array with one object
        } else {
          setWordData(null);
        }
      } catch (error) {
        console.error('Error fetching word data:', error);
        setWordData(null);
      }
    }
  };

  useEffect(() => {
    if (wordData) {
      console.log('Word data:', wordData); // You can log the data for further inspection
    }
  }, [wordData]);

  return (
    <div  className='container'>
        <div className='search-div'>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
        </div>

     <div className='wordInfo'>
      {wordData && (
          <div>
          {/* <h2>Search Results for "{searchWord}"</h2> */}
          <h3> {wordData.word}</h3>
          <p> {wordData.phonetic}</p>
            {wordData.phonetics.map((phonetic, index) => (
              <div key={index}>
                 
                <audio controls>
                  <source src={phonetic.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          
          {wordData.meanings.map((meaning, index) => (
            <div key={index}>
              <h3> {meaning.partOfSpeech}</h3>
              <ul>
                {meaning.definitions.map((definition, index) => (
                  <li key={index}>
                    <p> {definition.definition}</p>
                    {definition.synonyms && definition.synonyms.length > 0 && (
                      <p> {definition.synonyms.join(', ')}</p>
                    )}
                    {definition.antonyms && definition.antonyms.length > 0 && (
                      <p> {definition.antonyms.join(', ')}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      )}
      </div>
    </div>
  );
};

export default HomePage;