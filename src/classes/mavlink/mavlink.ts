
import { MAVLinkModule, MAVLinkMessage } from '@ifrunistuttgart/node-mavlink';
import { messageRegistry } from './assets/message-registry';

const mavLink = new MAVLinkModule(messageRegistry);
