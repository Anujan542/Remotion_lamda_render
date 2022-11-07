import {
	AbsoluteFill,
	interpolate,
	Img,
	useCurrentFrame,
	Sequence,
} from 'remotion';

import {SlideOpenEffect} from '../Effects/SlideOpenEffects';

import {DownLogo} from './DownLogo';

export const IntroMain = ({logo, PrimaryColor}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 100], [0, 4]);

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<>
				{/* First Set */}
				<Sequence durationInFrames={60}>
					<AbsoluteFill
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							width: '100%',
							borderRadius: '50%',
							transform: `scale(${opacity})`,
						}}
					>
						{logo && <Img src={logo} />}
					</AbsoluteFill>
				</Sequence>

				<Sequence from={40} durationInFrames={30}>
					<SlideOpenEffect color={PrimaryColor} />
				</Sequence>

				{/* <Sequence from={50} durationInFrames={30}>
					<SlideOpenEffect2 color={SecondaryColor} />
				</Sequence> */}

				{/* Second Set */}
				<Sequence from={70} durationInFrames={110}>
					<DownLogo
						logo={logo}
						color={PrimaryColor}
						width={`${50}`}
						height={`${50}`}
					/>
				</Sequence>

				{/* <Sequence from={75} durationInFrames={105}>
					<Underline
						alignTop={`${27}`}
						color={
							name === 'Classic' ||
							name === 'Classic (No Lower Third)' ||
							name === 'No Lower Third' ||
							name === 'Classic Color Border' ||
							name === 'Bar' ||
							name === 'Bars' ||
							name === 'Bars - No Year' ||
							name === 'Black Bar' ||
							name === 'Text Only'
								? PrimaryColor
								: 'black'
						}
					/>
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					<Text
						titleColor={
							name === 'Classic' ||
							name === 'Classic (No Lower Third)' ||
							name === 'No Lower Third' ||
							name === 'Classic Color Border' ||
							name === 'Bar' ||
							name === 'Bars' ||
							name === 'Bars - No Year' ||
							name === 'Black Bar' ||
							name === 'Text Only'
								? PrimaryColor
								: 'black'
						}
						titleText="CONGRATULATIONS!"
						bottom={200}
						size="62px"
						fontWeight={900}
						time={1}
						marginLeft={''}
						fontStyle={''}
						background={
							name === 'Classic' ||
							name === 'Classic (No Lower Third)' ||
							name === 'No Lower Third' ||
							name === 'Classic Color Border' ||
							name === 'Bar' ||
							name === 'Bars' ||
							name === 'Bars - No Year' ||
							name === 'Black Bar' ||
							name === 'Text Only'
								? 'white'
								: PrimaryColor
						}
					/>
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					{hashTag && (
						<SubText
							titleColor={
								name === 'Classic' ||
								name === 'Classic (No Lower Third)' ||
								name === 'No Lower Third' ||
								name === 'Classic Color Border' ||
								name === 'Bar' ||
								name === 'Bars' ||
								name === 'Bars - No Year' ||
								name === 'Black Bar' ||
								name === 'Text Only'
									? PrimaryColor
									: 'black'
							}
							titleText={`#${hashTag}`}
							bottom={130}
							size="35px"
							fontWeight={400}
							time={2}
							marginLeft={''}
							fontStyle={''}
						/>
					)}
				</Sequence>

				<Sequence from={130} durationInFrames={50}>
					<UnderlineEffect
						lineAlign={-11.5}
						color={
							name === 'Classic' ||
							name === 'Classic (No Lower Third)' ||
							name === 'No Lower Third' ||
							name === 'Classic Color Border' ||
							name === 'Bar' ||
							name === 'Bars' ||
							name === 'Bars - No Year' ||
							name === 'Black Bar' ||
							name === 'Text Only'
								? PrimaryColor
								: SecondaryColor
						}
					/>
				</Sequence>

				<Sequence from={150} durationInFrames={30}>
					<SlideOpenEffect
						color={
							name === 'Classic' ||
							name === 'Classic (No Lower Third)' ||
							name === 'No Lower Third' ||
							name === 'Classic Color Border' ||
							name === 'Bar' ||
							name === 'Bars' ||
							name === 'Bars - No Year' ||
							name === 'Black Bar' ||
							name === 'Text Only'
								? SecondaryColor
								: 'black'
						}
					/>
				</Sequence> */}
			</>
		</AbsoluteFill>
	);
};
