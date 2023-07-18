import './index.scss' // Import the SCSS file for styling

const ResultBox = ( {characters, words, sentences, paragraphs, pronounsCount} : {characters:any, words:any, sentences:any, paragraphs:any, pronounsCount:any}) => {
  
  const resultBar = [
    {
      title: 'Words', // Title for words count
      value: words.value? words.value : 0, // Display the value if it exists, otherwise display 0
    },
    {
      title: 'Characters', // Title for characters count
      value: characters.value? characters.value : 0, // Display the value if it exists, otherwise display 0
    },
    {
      title: 'Sentences', // Title for sentences count
      value: sentences.value? sentences.value : 0, // Display the value if it exists, otherwise display 0
    },
    {
      title: 'Paragraphs ', // Title for paragraphs count
      value: paragraphs.value? paragraphs.value : 0, // Display the value if it exists, otherwise display 0
    },
    {
      title: 'Pronouns', // Title for pronouns count
      value: pronounsCount.value? pronounsCount.value : 0, // Display the value if it exists, otherwise display 0
    },
  ]

  return (
    <div className="result-bar"> {/* Container for the result bar */}
      {/* Map over each item in the resultBar array */}
      {resultBar.map(({ title, value }) => ( 
        <div className="result-box" key={title}> {/* Container for each result box */}
          <span className="box-title">{title}</span> {/* Display the title */}
          <span className="box-value">{value}</span> {/* Display the value */}
        </div>
      ))}
    </div>
  )
}

export default ResultBox
