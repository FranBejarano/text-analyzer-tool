import './index.scss' // Import the SCSS file for styling

const BottomResultBox = ({ minutes, longestWord } : { minutes:any, longestWord:any }) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:', // Title for average reading time
      value: minutes.value? `~${minutes.value}` : '-', // Display the value if it exists, otherwise display a dash
    },
    {
      title: 'Longest word:', // Title for longest word
      value: longestWord.value? longestWord.value : '-', // Display the value if it exists, otherwise display a dash
    },
  ]

  return (
    <div className="bottom-result-bar"> {/* Container for the bottom result bar */}
      {/* Map over each item in the bottomResultBar array */}
      {bottomResultBar.map(({ title, value }) => ( 
        <div className="result-box" key={title}> {/* Container for each result box */}
          <span className="box-title">{title}</span> {/* Display the title */}
          <span className="box-value">{value}</span> {/* Display the value */}
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
