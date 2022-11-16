import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const GlowingStroke = ({width, height, radius, color1, color2}) => {
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
	const strokeDashoffset = interpolate(
		progress,
		[1, 10],
		[0, Number(circumference)]
	);
	const gId = `g-${color1}-${color2}`;
	return (
		<div style={{width: '900px', height: '100px'}}>
			<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
				<defs>
					<linearGradient id={gId}>
						<stop stopColor={color1} />
						<stop stopColor={color2} />
					</linearGradient>
				</defs>
				<rect
					width={width - 18}
					height={height - 18}
					x={8}
					y={6}
					rx={radius}
					ry={radius}
					stroke={`url(#${gId})`}
					fill="none"
					strokeDasharray={`7500 ${circumference}`}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					strokeWidth={5}
				/>
			</svg>
		</div>
	);
};
