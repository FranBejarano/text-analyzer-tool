import { useState, useEffect } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {

  const [characters, setCharacters] = useState<Event | any>([]) // State variable to store the number of characters in the text area
  const [words, setWords] = useState<Event | any>([]) // State variable to store the number of words in the text area
  const [sentences, setSentences] = useState<Event | any>([]) // State variable to store the number of sentences in the text area
  const [paragraphs, setParagraphs] = useState<Event | any>([]) // State variable to store the number of paragraphs in the text area
  const [pronounsCount, setPronounsCount] = useState<Event | any>([]) // State variable to store the count of pronouns in the text area
  const [minutes, setMinutes] = useState<Event | any>([]) // State variable to store the estimated reading time in minutes
  const [longestWord, setLongestWord] = useState<Event | any>([]) // State variable to store the longest word in the text area

  const textArea = async (e:React.FormEvent<HTMLInputElement>) => { // Event handler for text area input
    countCharacters(e) // Call the function to count the number of characters
    countWords(e) // Call the function to count the number of words
    countSentences(e) // Call the function to count the number of sentences
    countParagraphs(e) // Call the function to count the number of paragraphs
    searchLongestWord(e) // Call the function to find the longest word
  }

  const countCharacters = async (e:React.FormEvent<HTMLInputElement>) => { // Function to count the number of characters in the text area
    const letters = await e?.currentTarget.value
    const value = letters?.length
    setCharacters({ value })
  }

  const countWords = async (e:React.FormEvent<HTMLInputElement>) => { // Function to count the number of words in the text area
    const concepts = e?.currentTarget.value.split(/[\s]+/)
    countPronouns(concepts) // Call the function to count the pronouns
    const value = concepts?.length
    readingTime(value, e) // Call the function to calculate the estimated reading time
    setWords({ value })
    if (e?.currentTarget.value === '') {
      setWords(0)
    }
  }

  const countSentences = async (e:React.FormEvent<HTMLInputElement>) => { // Function to count the number of sentences in the text area
    const phrases = await e?.currentTarget.value.split(/[.?!;]/)
    const value = phrases?.length - 1
    setSentences({ value })
    if (e?.currentTarget.value === '') {
      setSentences(0)
    }
  }
  
  const countParagraphs = async (e:React.FormEvent<HTMLInputElement>) => { // Function to count the number of paragraphs in the text area
    const newLines = await e?.currentTarget.value.split(/[\n]+/)
    const value = newLines?.length
    setParagraphs({ value })
    if (e?.currentTarget.value === '') {
      setParagraphs(0)
    }
  }
  
  const countPronouns = (concepts: any[]) => { // Function to count the number of pronouns in the text area
    let value = 0
    concepts.forEach(aWord => {
      let singleWord = aWord.toLowerCase().replace(/[^\w\s]/gi, '')
      if (pronouns.includes(singleWord)) {
        value += 1
      }
    })
    setPronounsCount({value})
  }

  const readingTime = (wordsCount: number, e:React.FormEvent<HTMLInputElement>) => { // Function to calculate the estimated reading time
    const value =  Math.floor(wordsCount / 255) + 1;
    setMinutes({ value });
    if (e?.currentTarget.value === '') {
      setMinutes('-')
    }
  }

  const searchLongestWord = async (e:React.FormEvent<HTMLInputElement>) => { // Function to find the longest word in the text area
    let value = ''
    const concepts = await e?.currentTarget.value.split(/[\s]+/)
    concepts.forEach(aWord => {
      let singleWord = aWord.toLowerCase().replace(/[^\w\s]/gi, '')
      if (singleWord.length > value.length) {
        value = singleWord       
      }
      setLongestWord({value})
    })
  }

  useEffect(() => {
  }, []);
  
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div className="small-container">
        <div className="main-app">
          <ResultBox characters={characters} words={words} sentences={sentences} paragraphs={paragraphs} pronounsCount={pronounsCount} /> {/* Render the ResultBox component with the calculated statistics */}
          <TextArea textArea={textArea} /> {/* Render the TextArea component and pass the textArea event handler */}
          <BottomResultBox minutes={minutes} longestWord={longestWord} /> {/* Render the BottomResultBox component with the calculated statistics */}
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </>
  )
}

export default App
