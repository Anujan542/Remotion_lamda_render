import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const GlowingAnother = ({width, height, radius, color1, color2}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		frame,
		fps,
		config: {
			stiffness: 5,
		},
	});
	const circumference = width * 20 + height * 20;
	const strokeDashoffset = interpolate(progress, [1, 10], [0, circumference]);
	const gId = `g-${color1}-${color2}`;
	return (
		<div
			style={{
				width: '900px',
				height: '100px',
				marginLeft: '1rem',
				marginTop: '1rem',
			}}
		>
			<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
				<defs>
					<linearGradient id={gId}>
						<stop stopColor={color1} />
						<stop stopColor={color2} />
					</linearGradient>
				</defs>
				<rect
					width={width - 18}
					height={height - 48}
					x={14}
					y={18}
					rx={radius}
					ry={radius}
					stroke={`url(#${gId})`}
					fill="none"
					strokeDasharray={`6500 ${circumference}`}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					strokeWidth={4}
				/>
			</svg>
		</div>
	);
};
