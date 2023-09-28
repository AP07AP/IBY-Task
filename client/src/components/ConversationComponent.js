import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponent";
import { messagesList } from "../mockData";
import Picker from "emoji-picker-react";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  width: 100%;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ContactName = styled.span`
  font-size: 16px;
  color: black;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background: #e5ddd6;
`;
const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.4;
  cursor: pointer;
`;
const ConversationComponent=(props) =>{
  const { selectedChat } = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  
  const [messageList, setMessageList] = useState(messagesList);
  const onEmojiClick=(event,emojiObj)=>{
    setText(text+emojiObj)
  }
  // useEffect(() => {
  //   setMessageList(selectedChat.channelData.messages);
  // }, [selectedChat]);


  const onEnterPress = (event) => {
    // let channelId = selectedChat.channelData._id;
    if (event.key === "Enter") {

      const messages =[...messagesList]
      messages.push(
        {
         
            id: 0,
            messageType: "TEXT",
            text: "Hii",
            senderID: 0,
            addedOn: "12:40 PM",

          }
          );
          setMessageList(messages);
          setText("");
        }
        };
      
      // if (!messageList || !messageList.length) {
        // const channelUsers = [
        //   {
        //     email: userInfo.email,
        //     name: userInfo.name,
        //     profilePic: userInfo.imageUrl,
        //   },
        //   {
        //     email: selectedChat.otherUser.email,
        //     name: selectedChat.otherUser.name,
        //     profilePic: selectedChat.otherUser.profilePic,
          

        // const channelResponse = await httpManager.createChannel({
        //   channelUsers,
        // });
        // channelId = channelResponse.data.responseData._id;
      // }
      // refreshContactList();
      // const messages = [...messageList];
      // const msgReqData = {
      //   text,
      //   senderEmail: userInfo.email,
      //   addedOn: new Date().getTime(),
      // };
      // const messageResponse = await httpManager.sendMessage({
      //   channelId,
      //   messages: msgReqData,
      // });
      // messages.push(msgReqData);
      // setMessageList(messages);
      // setText("");
    // }
  // };
  return (
    <Container>
      <ProfileHeader>
        <ProfileInfo>
          <ProfileImage src={selectedChat.profilePic} />
        {selectedChat.name}
        </ProfileInfo>
      </ProfileHeader>
      <MessageContainer>
        {messageList.map((messageData) => (
          <MessageDiv isYours={messageData.senderID===0}>
            <Message isYours={messageData.senderID===0}>
              {messageData.text}
            </Message>
          </MessageDiv>
        ))}
      </MessageContainer>

      <ChatBox>
        <SearchContainer>
          {pickerVisible && (
            <Picker
              pickerStyle={{ position: "absolute", bottom: "60px" }}
              onEmojiClick={(event, emojiObj) => {
                setText(text + emojiObj.emoji);
                // togglePicker(false);
              }}
            />
          )}
          <EmojiImage
            src={"/data.svg"}
            onClick={() => togglePicker((pickerVisible) => !pickerVisible)}
          />
          <SearchInput
            placeholder="Type a message"
            value={text}
            onKeyDown={onEnterPress}
            onChange={(e) => setText(e.target.value)}
          />
        </SearchContainer>
      </ChatBox>
    </Container>
  );
};

export default ConversationComponent;