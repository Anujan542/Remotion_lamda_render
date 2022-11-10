import {
	interpolate,
	useCurrentFrame,
	AbsoluteFill,
	Sequence,
	useVideoConfig,
	spring,
} from 'remotion';

export const UnderlineEffect = ({color, lineAlign}) => {
	const {fps} = useVideoConfig();

	const frame = useCurrentFrame();

	const scale = interpolate(frame, [0, 50, 70], [0.8, 1.8, 10], {});

	const opacity = interpolate(frame, [0, 50, 100], [0.8, 15, 20], {});

	return (
		<AbsoluteFill>
			<div
				style={{
					display: 'flex',
					flex: 1,
					justifyContent: 'start',
					alignItems: 'center',
					marginBottom: `${lineAlign}rem`,
				}}
			>
				<div
					style={{
						display: 'flex',
						flex: 1,

						transform: `scale(${scale})`,
					}}
				>
					{[color].map((s) => {
						const progress = spring({
							frame,
							fps,
							config: {
								damping: 200,
							},
						});
						return (
							<div
								key={s}
								style={{
									backgroundColor: s,
									flex: 1,
									opacity: progress,

									border: `2px solid ${s}`,
									color,
								}}
							/>
						);
					})}
				</div>
			</div>

			<Sequence from={20}>
				<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
					<div
						style={{
							backgroundColor: `${color}`,
							height: '10%',
							width: '100%',
							transform: `scale(${opacity})`,
							//  MarginBottom: '-11.5rem',
						}}
					/>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
