import Peer from 'peer';

async function createPeerServer({host, port, path}) {
  const { PeerServer } = Peer;
  const peer = new PeerServer({
    host, 
    port,
    path
  });

  return peer;
}

export default createPeerServer;