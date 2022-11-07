import {Composition} from 'remotion';
import {ClassicMain} from './ClassicMain';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={ClassicMain}
				durationInFrames={2055}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
