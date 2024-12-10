// import { useEffect, useState } from 'react';
import { MswProvider } from './components/pages/MswWrapper';
import './App.css';
import { ChatHome } from './components/pages/ChatHome';
function App() {
  // // const [currentId, setCurrentId] = useState(0);

  // useEffect(() => {
  //   // 예시를 위한 코드 입니다. (지우셔도 무방합니다.)
  //   fetch('/chats')
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <>
      <div>
        <MswProvider>
          <ChatHome />
        </MswProvider>
      </div>
    </>
  );
}

export default App;
