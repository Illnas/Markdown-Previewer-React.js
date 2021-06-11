import { useState } from "react";
import marked from "marked";



marked.setOptions({
  gfm: true,
  breaks: true
});


function App() {
  const [value, setValue] = useState(`
  # Heading
  ## Sub heading
  
  Single line code example \`const a = "Hello"\`



  Multi line code example:
  \`\`\`
    const random = () => {
      let rng = Math.floor(Math.random() * 1643);
      return rng;
    }
  \`\`\`
    
  Bold text example **bold**
  Link example: [links](https://www.freecodecamp.com)
  Block quote example"
   > Blockquote
 
  - List examplee

  ![Image](https://unsplash.com/photos/vm2cwMEiUFA "Image")
  `
);

  const collectMarkdown = () => {
    return {__html: marked(value)};
  }

  const onChange = (e) => {
    setValue(e.target.value);
  };


  
  return (
    <div className="main-container">
      <h1 className="heading">Markdown Previewer</h1>
      <div className="container">
      <textarea id="editor"  value={value} onChange={onChange}></textarea>
      <div id="preview" dangerouslySetInnerHTML={collectMarkdown()}></div>
      </div>
      
    </div>
  );
}

export default App;
