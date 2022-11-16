import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Underline = ({color, alignTop}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const config = useVideoConfig();

	const underscoreWidthRight = spring({
		from: 0,
		to: 3000,
		frame,
		fps,
		config: {mass: 10, damping: 500, stiffness: 300},
	});

	const underscoreWidthLeft = spring({
		from: 0,
		to: -1600,
		frame,
		fps,
		config: {mass: 10, damping: 500, stiffness: 300},
	});

	return (
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: `${alignTop}rem`,
					marginLeft: '20rem',
				}}
			>
				<svg
					viewBox={`0 0 ${config.width} ${config.height}`}
					width="100%"
					height="500px"
				>
					<g id="g10">
						<path
							transform="scale(0.2)"
							style={{
								fill: `${color}`,

								fillRule: 'nonzero',
								stroke: 'none',
							}}
							d={`m 464.206,251.535 h ${underscoreWidthRight} v 64.653 H 464.206 Z`}
						/>
					</g>
				</svg>
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginTop: `${alignTop}rem`,
					marginLeft: '22.5rem',
				}}
			>
				<svg
					viewBox={`0 0 ${config.width} ${config.height}`}
					width="100%"
					height="500px"
				>
					<g id="g10">
						<path
							transform="scale(0.2)"
							style={{
								fill: `${color}`,

								fillRule: 'revert',
								stroke: 'none',
							}}
							d={`m 464.206,251.535 h ${underscoreWidthLeft} v 64.653 H 464.206 Z`}
						/>
					</g>
				</svg>
			</AbsoluteFill>
		</>
	);
};
