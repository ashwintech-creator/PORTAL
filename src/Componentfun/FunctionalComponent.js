import React from "react";

function FunctionalEx1()
{
    const aps = {
      backgroundColor: 'lightblue',
      color: 'darkblue',
      padding: '10px',
      border: '1px solid blue',
      borderRadius: '5px',
    };
  
    const headings = {
      color: 'green',
  
    };
  
    const paragraphs = {
      color: 'darkblue',
      fontSize: '16px',
    };
  
    return (
      <div style={aps}>
        <h1 style={headings}>Inline Style in JSX Example</h1>
        <div>
          <p style={paragraphs}>This is a paragraph with inline styles applied.</p>
        </div>
      </div>
    );
  }

export default FunctionalEx1;