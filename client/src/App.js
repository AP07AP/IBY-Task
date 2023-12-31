
import React, {useState} from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";
import { getByPlaceholderText } from "@testing-library/react";

const Container = styled.div`
display: flex;
height: 100vh;
width: 100%;
flex-direction: row;
// align-items: center;
background: #f8f9fb;

`;
const ChatPlaceholder = styled.img`
width: 240px;
height: 240px;
border-radius: 50%;
object-fit: contain;

`;

const Placeholder = styled.div`
 flex:3;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-size: 15px;
 color: rgba(0,0,0,0.45);
 gap: 10px;
 span{
  font-size: 32px;
  // align:center;
  color: #525252;
 }
`;

function App() {
  const [selectedChat, setChat]=useState()
  return (
    <Container>
      <ContactListComponent 
      setChat={setChat}/>
      {selectedChat?(<ConversationComponent selectedChat={selectedChat}/>):(<Placeholder>
            <ChatPlaceholder src="/welcome-placeholder.jpeg" />
            <span>Keep your phone connected</span>
            Whatsapp Connects to your phone to sync messages....
        </Placeholder>
        )}
    </Container>
  );
}

export default App;
