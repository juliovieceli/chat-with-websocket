import 'dotenv/config';
import { server } from './http'

import './websocket/ChatService'
server.listen(3333, () => console.log('server running on port 3333'));