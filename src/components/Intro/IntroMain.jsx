import {
	AbsoluteFill,
	interpolate,
	Img,
	useCurrentFrame,
	Sequence,
} from 'remotion';
import {SlideOpenEffect2} from '../Effects/SlideOpenEffect2';

import {SlideOpenEffect} from '../Effects/SlideOpenEffects';
import {UnderlineEffect} from '../Effects/UnderlineEffect';

import {DownLogo} from './DownLogo';
import {SubText} from './SubText';
import {Text} from './Text';
import {Underline} from './Underline';

export const IntroMain = ({logo, PrimaryColor, SecondaryColor, hashTag}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [-50, 100], [0, 4]);

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

				<Sequence from={50} durationInFrames={30}>
					<SlideOpenEffect2 color={SecondaryColor} />
				</Sequence>

				{/* Second Set */}
				<Sequence from={70} durationInFrames={110}>
					<DownLogo
						logo={logo}
						color={PrimaryColor}
						width={`${40}`}
						height={`${40}`}
					/>
				</Sequence>

				<Sequence from={75} durationInFrames={105}>
					<Underline alignTop={`${40}`} color={PrimaryColor} />
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					<Text
						titleColor={PrimaryColor}
						titleText="CONGRATULATIONS!"
						bottom={250}
						size="90px"
						fontWeight={900}
						time={1}
						marginLeft=""
						fontStyle=""
						background="white"
					/>
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					{hashTag && (
						<SubText
							titleColor={PrimaryColor}
							titleText={`#${hashTag}`}
							bottom={170}
							size="60px"
							fontWeight={400}
							time={2}
							marginLeft=""
							fontStyle=""
						/>
					)}
				</Sequence>

				<Sequence from={130} durationInFrames={50}>
					<UnderlineEffect lineAlign={-15.8} color={PrimaryColor} />
				</Sequence>

				<Sequence from={150} durationInFrames={30}>
					<SlideOpenEffect color={SecondaryColor} />
				</Sequence>
			</>
		</AbsoluteFill>
	);
};
