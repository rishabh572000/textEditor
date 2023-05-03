import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className="App">

<ReactQuill
  value={value}
  onChange={setValue}
  
  style={{height:'100px'}}
  modules={{
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, {'font': []}],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  }}
  theme="snow"
  placeholder="Write something..."
/>
    </div>
  );
}

export default App;
