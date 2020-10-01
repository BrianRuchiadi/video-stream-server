import createPeerServer from './modules/server.js';

async function startPeerServer(host, port, path) {
  if (!host || !port) { return; }

  const onhost = (host) ?? 'localhost';
  const onport = (port) ?? '9900';
  const onpath = (path) ?? '/stream';

  await createPeerServer({
    host: onhost, 
    port: onport, 
    path: onpath
  });

  console.log(`Peer Server is started! ${onhost}:${onport}${onpath}`);
}

export default startPeerServer;