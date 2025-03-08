import { WebSocketServer } from 'ws';
import jwt, { JwtPayload } from "jsonwebtoken";
const { JWT_SECRET } = require("@repo/backend-common");


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, request) {
  ws.on('error', console.error);

  // ws://localhost:3000?token=123232
  // ["ws://localhost:3000","token=123232"]
  const url = request.url;
  if (!url){
    return;
  }
  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || "";
  const decoded = jwt.verify(token, JWT_SECRET);
  
  if(!decoded || !(decoded as JwtPayload).userId){
    ws.close();
    return;
  }

  ws.on('message', function message(data) {
    ws.send('pong');
    console.log('received: %s', data);
  });

  ws.send('something');
});