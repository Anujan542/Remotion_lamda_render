import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Transition = ({type, children, show}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const progress = spring({
		config: {
			damping: 80,
		},
		fps: videoConfig.fps,
		frame: type === 'in' ? frame : Math.max(0, frame - show),
	});

	const percent = interpolate(
		progress,
		[0, 1],
		type === 'in' ? [300, 0] : [0, 1000]
	);

	return (
		<AbsoluteFill
			style={{
				transform: `translateY(${type === 'in' ? percent : 0 - percent}%)`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
