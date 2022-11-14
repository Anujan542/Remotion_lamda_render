import {
	AbsoluteFill,
	staticFile,
	Audio,
	Sequence,
	OffthreadVideo,
} from 'remotion';
import React from 'react';

export const ClassicNoLowerThirdIndividual = ({volume, speed}) => {
	return (
		<AbsoluteFill>
			<Sequence from={20}>
				<Audio volume={1} src={staticFile('voice.wav')} />
			</Sequence>
			<OffthreadVideo
				volume={volume}
				playbackRate={speed}
				src="https://clippingplatformstaging.blob.core.windows.net/assets/previews/live_clip.mp4"
			/>
		</AbsoluteFill>
	);
};
