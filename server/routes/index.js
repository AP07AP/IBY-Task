const applyRoutes = (app)=>{
    app.get("/", (req, res) => res.send(`API running fine`));
//create user, login, channel, search-user, channel-list, send-message
app.post('/user', Validation.validateCreateUser,  Controller.createUser);

app.get('/search-user', Validation.validateSearchUser, Controller.searchUser);

app.post('/channel', Validation.validateCreateChannel, Controller.createChannel);

app.get('/channel-list', Validation.validateGetChannelList, Controller.getChannelList);

app.post('/message', Validation.validateAddMessage, Controller.sendMessage);
};

export default applyRoutes;