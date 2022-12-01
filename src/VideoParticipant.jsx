import {
	// DelayRender,
	// ContinueRender,
	Composition,
	// GetInputProps,
} from 'remotion';
// Import {useEffect, useState, useCallback} from 'react';
import {ClassicParticipantMain} from './ParticipantsComponents/ClassicTemplates/ClassicParticipantMain';
// Import {getVideoMetadata} from '@remotion/media-utils';
// import {encode} from 'base-64';

export const RemotionParticipantVideo = () => {
	// Const [handle] = useState(() => delayRender());
	// const [totalTime, setTotalTime] = useState(1);
	// console.log(totalTime);
	// const [remotionDetails, setRemotionDetails] = useState(null);

	// Const {id} = getInputProps();

	return (
		<>
			<Composition
				id="HelloWorld"
				component={ClassicParticipantMain}
				durationInFrames={1004}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
