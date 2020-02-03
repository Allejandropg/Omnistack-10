import socketio from 'socket.io-client';

const socket = socketio('http://192.168.15.30:3333',{
  autoConnect: false,
});
function subscribeToNewDevs(subcribeFunction){
  socket.on('new-dev', sibcribeFunction);
}

function connect(latitude, longitude, techs){
  socket.io.opts.query = {
    latitude, longitude, techs
  }
  socket.connect();

  socket.on('message', text => {
    console.log('messageSocket', text)
  })
}

function disconnect(){
  if(socket.connect){
    socket.disconnect();
  }
}

export {
  subscribeToNewDevs,
  connect,
  disconnect
};