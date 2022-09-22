import React, {useState, useEffect} from 'react';
import { Box, TextField, Button } from '@mui/material';
import './App.scss';
import LogicComponent from "./components/LogicComponent";

function App() {
  const [messageList, setMessageList] = useState<any>([]);
  const [text, setText] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = (e: any)=> {
      e.preventDefault();
      setMessageList((prevState: any[]) => [...prevState, {
          id: giveLastId(prevState),
          text: text,
          author: author
      }])
  }

  function giveLastId(array: any[]) {
      return array.length ? array[array.length - 1].id + 1 : 0;
  }

  useEffect(() => {
      setTimeout(() =>{
          botAnswer();
      },1500)
  }, [botAnswer, messageList])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  function botAnswer():void {
      const lastAuthor = messageList[messageList.length - 1];
      if (lastAuthor && lastAuthor.author){
          setMessageList((prevState: any[]) => [
              ...prevState, {
                id: giveLastId(prevState),
                    text: `Сообщение автора ${lastAuthor.author} отправлено`
                }
              ]
          )
          setText('')
          setAuthor('')
      }
  }

  return (
    <div className="App">
        <header className="App-header">

        </header>
        <div className="App-leftSidebar">
            <LogicComponent />
        </div>
        <div className="App-mainContent">
            <Box component="form" className="form" onSubmit={handleSubmit}>
                <TextField className="form-input" autoFocus={true} value={text} onChange={(e)=> setText(e.target.value)} placeholder={"Введите сообщение"} variant="outlined" />
                <TextField className="form-input" value={author} onChange={(e)=> setAuthor(e.target.value)} placeholder={"Кто вы?"} variant="outlined" />
                <Button className="form-button" type='submit' variant="outlined">Добавить сообщение</Button>
            </Box>
            {messageList.map((message: { id:number; text: string; author: string; }) =>{
                return(

                    <div className="quote" key={message.id}>
                        <p className="text">{message.text}</p>
                        <p className="author">{message.author}</p>
                    </div>
                )
            })}
        </div>
        <div className="App-footer">

        </div>
    </div>
  );
}

export default App;
