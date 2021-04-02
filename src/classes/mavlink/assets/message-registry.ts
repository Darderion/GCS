import {MAVLinkMessage} from 'node-mavlink';
import {Heartbeat} from './messages/heartbeat';
import {ProtocolVersion} from './messages/protocol-version';
export const messageRegistry: Array<[number, new (system_id: number, component_id: number) => MAVLinkMessage]> = [
	[0, Heartbeat],
	[300, ProtocolVersion],
];