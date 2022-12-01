// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> HelloWorld out/video.mp4

import {registerRoot} from 'remotion';
// Import {RemotionVideo} from './Video';
import { RemotionParticipantVideo } from './VideoParticipant';

registerRoot(RemotionParticipantVideo);
