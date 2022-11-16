import {AbsoluteFill, Audio, OffthreadVideo} from 'remotion';

export const StageClipLogo = () => {
	return (
		<AbsoluteFill>
			<OffthreadVideo src="https://cliperagoprod.blob.core.windows.net/assets/stage.mp4" />
			<Audio
				volume={1}
				src="https://cliperagoprod.blob.core.windows.net/assets/Post%20Roll%20Sound%20Design.mp3"
				startFrom={160}
			/>
		</AbsoluteFill>
	);
};
