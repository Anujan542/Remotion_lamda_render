// Import {useEffect, useState} from 'react';
import {AbsoluteFill, OffthreadVideo, Sequence} from 'remotion';

export const ClassicIndividual = ({logo, volume, speed, videoHasGraphics}) => {
	// Const [height, setHeight] = useState(100);
	// useEffect(() => {
	// 	const imgContainer = document.getElementById('image');
	// 	if (imgContainer) {
	// 		const heightContainer = imgContainer.offsetHeight;
	// 		if (heightContainer > 0) {
	// 			setHeight(heightContainer + 10);
	// 		}
	// 	}
	// }, [height]);

	return (
		<AbsoluteFill>
			{/* <Sequence from={20}>
				<Audio volume={volume} src={voice} />
			</Sequence> */}

			<Sequence>
				<OffthreadVideo src="https://clippingplatformstaging.blob.core.windows.net/assets/previews/live_clip.mp4" />
			</Sequence>
		</AbsoluteFill>
	);
};
