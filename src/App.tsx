import React, {useState, useEffect} from 'react';
import './App.scss';

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
      }
  }

  return (
    <div className="App">
      <header className="App-header">
          <form className="form" onSubmit={handleSubmit}>
              <input value={text} type="text" onChange={(e)=> setText(e.target.value)} placeholder={"Введите сообщение"}/>
              <input value={author} type="text" onChange={(e)=> setAuthor(e.target.value)} placeholder={"Кто вы?"}/>
              <button type='submit'>Добавить сообщение</button>
          </form>
          {messageList.map((message: { text: string; author: string; }) =>{
              return(
                  <div className="quote">
                      <p className="text">{message.text}</p>
                      <p className="author">{message.author}</p>
                  </div>
              )
          })}
      </header>
    </div>
  );
}

export default App;
