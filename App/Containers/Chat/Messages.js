import React from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Text,
  BackHandler,
} from 'react-native';
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  Composer,
} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import io from 'socket.io-client';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      userName: '',
      userPhoto: '',
      recieverId: '',
      messages: [],
    };
  }

  //styling chat bubbles
  renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#009299',
          },
          left: {
            backfroundColor: '#aaa',
          },
        }}
      />
    );
  };

  //syling input bar
  renderInputToolbar = props => {
    return (
      <>
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: '#111',
            borderTopWidth: 0,
            marginHorizontal: 10,
            marginLeft: '12%',
            borderRadius: 80,
          }}
          textInputProps={{
            style: {
              color: '#fff',
              flex: 1,
              alignItems: 'center',
              paddingHorizontal: 20,
            },
            multiline: false,
            returnKeyType: 'go',
            onSubmitEditing: () => {
              if (props.text && props.onSend) {
                let text = props.text;
                props.onSend({text: text.trim()}, true);
              }
            },
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            marginLeft: '4%',
            marginBottom: '1%',
            bottom: 0,
          }}
          onPress={this.handleChoosePhoto}>
          <Icon
            name="google-analytics"
            style={{
              color: '#009299',
            }}
            size={32}
          />
        </TouchableOpacity>
      </>
    );
  };

  //styling send button
  renderSend = props => {
    return (
      <>
        <Send {...props}>
          <Icon
            name="send"
            style={{
              color: '#009299',
              marginRight: '0%',
              marginBottom: '30%',
            }}
            size={32}
          />
        </Send>
      </>
    );
  };

  //choose photo fromgallery or camera
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log('Image Uri: ');
        console.log(source);
        let axiosConfig = {
          headers: {
            Authorization: 'Client-ID ead116aab30174c',
          },
          timeout: 8000,
        };

        let formData = new FormData();
        formData.append('image', source.uri);
        ToastAndroid.show('Uploading...', ToastAndroid.LONG);

        //upload to imgur
        axios
          .post('https://api.imgur.com/3/image', formData, axiosConfig)
          .then(res => {
            if (res.status === 200) {
              console.log(res.status);
              let {data} = res;
              // this.setState({imageURL: data.data.link});
              const id = this.state.messages.length + 1;
              let imageMsg = [
                {
                  _id: id,
                  text: '',
                  createdAt: new Date(),
                  user: {
                    _id: this.state.userId,
                    name: this.state.userName,
                    avatar: this.state.userPhoto,
                  },
                  image: data.data.link,
                },
              ];

              this.onSend(imageMsg);
              imageMsg = [];
            } else {
              ToastAndroid.show(
                'Uploading failed. Try again',
                ToastAndroid.SHORT,
              );
            }
          });
      }
    });
  };

  componentDidMount() {
    //handle physical back press
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );

    this.setState({
    //  userId: this.props.navigation.getParam('senderId', ''),
     // userName: this.props.navigation.getParam('senderName', ''),
     // userPhoto: this.props.navigation.getParam('senderPhoto', ''),
     // recieverId: this.props.navigation.getParam('userId', ''),
    });

    //get previous messages
    this.getMessages();

    //initializing socket connectios
    this.socket = io('http://192.168.1.16:4000/api/');
    this.socket.connect();
    this.socket.on('incommingMessage', () => {
      console.log('called');
      this.getMessages();
    });
  }

  getMessages = async () => {
    try {
      let response = await axios.get(
        'http://192.168.1.16:4000/api/chats' +
        '/chats/6065d78ee7101b2b584a765a/60b0c7026699d7727c4b82f7'
      //  this.props.navigation.getParam('senderId', '') +

       // this.props.navigation.getParam('userId', ''),
      );
      if (response.status === 200) {
        this.setState(previousState => ({
          messages: GiftedChat.append([], response.data),
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    this.props.navigation.goBack(); // works best when the goBack is async
    return true;
  };

  componentWillMount() {}

  async onSend(messages = []) {
    await this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    //notify new message
    this.socket.emit('newMessage', 'sent');

    try {
      let formData = {
        sender: '6065d78ee7101b2b584a765a',
        reciever:'60b0c7026699d7727c4b82f7',
        messages: this.state.messages,
      };
      let response = await axios.post(
        'http://192.168.1.16:4000/api/chats' + '/chats/',
        formData,
      );
      if (response.status === 200) {
        console.log(response.data);
        this.socket.emit('newMessage', 'sent');
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {navigation} = this.props;
    return (
      <>
        <StatusBar backgroundColor="#111" barStyle="light-content" />

        <View style={{backgroundColor: '#222', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              height: '8%',
              width: '100%',
              backgroundColor: '#111',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: '4%',
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon
                name="arrow-back"
                size={32}
                style={{color: '#009299'}}
              />
            </TouchableOpacity>
            <Text
              name="home"
              style={{
                flex: 1,
                fontSize: 18,
                color: '#f2f2f2',
                textAlign: 'center',
              }}>

            </Text>
            <Icon name="home" size={32} style={{opacity: 0, flex: 1}} />
          </View>
          <GiftedChat
            listViewProps={{
              style: {
                backgroundColor: '#222',
              },
            }}
            alwaysShowSend={true}
            messages={this.state.messages}
            renderBubble={this.renderBubble}
            renderInputToolbar={this.renderInputToolbar}
            renderSend={this.renderSend}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: this.state.userId,
              name: this.state.userName,
              avatar: this.state.userPhoto,
            }}
          />
          <View
            style={{
              height: '1%',
              width: '100%',
            }}
          />
        </View>
      </>
    );
  }
}

export default Messages;
