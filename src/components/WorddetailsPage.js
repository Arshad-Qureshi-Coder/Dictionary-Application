import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WordDetailsPage = ()=>{
    const {word} = useParams();
    const wordData = useSelector((state)=>state.wordData);

    // Find the word data based on the selected word
    const selectedWorddata = wordData.find((data) => data.word === word);
    // const selectedWorddata = wordData.filter((data) => data.word === word)[0];
    if (!selectedWorddata) {
        return <div>
            Word not found
        </div>;
    }

    return (
        <div>
            <div className='wordinfo'>
                  {wordData && (
                      <div>
                      {/* <h2>Search Results for "{searchWord}"</h2> */}
                      <h3> {wordData.word}</h3>
                      <p> {wordData.phonetic}</p>
                        {wordData.phonetics.map((phonetic, index) => (
                          <div key={index}>
                            
                            <audio controls>
                              <source src={phonetic.audio} type="audio/mpeg" />
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
    )
}

export default WordDetailsPage;