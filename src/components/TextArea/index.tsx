import './index.scss' // Import the SCSS file for styling

const TextArea = ({textArea} : {textArea:any}) => {

  return <textarea className="text-area" placeholder="Paste your text here..." onChange={(e) => textArea(e)} autoFocus/> // Render a textarea element with the following properties:
  // - className: 'text-area' for styling purposes
  // - placeholder: 'Paste your text here...' as a placeholder text
  // - onChange event handler: invokes the 'textArea' function and passes the event object (e) when the textarea value changes
  // - autoFocus: automatically focuses the textarea when the component is mounted
}

export default TextArea
