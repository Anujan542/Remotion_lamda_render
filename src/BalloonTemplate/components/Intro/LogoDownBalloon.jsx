import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const LogoDownBalloon = ({logo, width, height}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame,
		config: {
			mass: 10,
			damping: 200,
		},
	});

	const opacity = interpolate(progress, [0, 0.5], [-1000, -150], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<div
				style={{
					display: 'flex',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Img
					style={{
						display: 'block',
						transform: `translateY(${opacity}px)`,
						lineHeight: 1.1,
						maxWidth: `${width}%`,
						maxHeight: `${height}%`,
					}}
					src={logo}
				/>
			</div>
		</>
	);
};
