export enum MavDataStream {
	MAV_DATA_STREAM_ALL = 0, // Enable all data streams
	MAV_DATA_STREAM_RAW_SENSORS = 1, // Enable IMU_RAW, GPS_RAW, GPS_STATUS packets.
	MAV_DATA_STREAM_EXTENDED_STATUS = 2, // Enable GPS_STATUS, CONTROL_STATUS, AUX_STATUS
	MAV_DATA_STREAM_RC_CHANNELS = 3, // Enable RC_CHANNELS_SCALED, RC_CHANNELS_RAW, SERVO_OUTPUT_RAW
	MAV_DATA_STREAM_RAW_CONTROLLER = 4, // Enable ATTITUDE_CONTROLLER_OUTPUT, POSITION_CONTROLLER_OUTPUT, NAV_CONTROLLER_OUTPUT.
	MAV_DATA_STREAM_POSITION = 6, // Enable LOCAL_POSITION, GLOBAL_POSITION/GLOBAL_POSITION_INT messages.
	MAV_DATA_STREAM_EXTRA1 = 10, // Dependent on the autopilot
	MAV_DATA_STREAM_EXTRA2 = 11, // Dependent on the autopilot
	MAV_DATA_STREAM_EXTRA3 = 12, // Dependent on the autopilot
	MAV_DATA_STREAM_ENUM_END = 13, // 
}