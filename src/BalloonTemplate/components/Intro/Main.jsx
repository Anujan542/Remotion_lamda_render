import {
	AbsoluteFill,
	interpolate,
	Img,
	useCurrentFrame,
	Sequence,
} from 'remotion';

import {Underline} from '../../../components/Intro/Underline';
import {FadeTransition} from '../../../components/Effects/FadeTransition';
import Background from '../../assets/balloonback.png';
import {BalloonsEffects} from '../Balloon/BalloonsEffects';

import {BalloonText} from './BalloonText';
import {LogoDownBalloon} from './LogoDownBalloon';

export const IntroMainBalloon = ({
	PrimaryColor,
	logo,
	hashTag,
	SecondaryColor,
}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 330], [0, 4]);

	return (
		<AbsoluteFill style={{backgroundImage: `url(${Background})`}}>
			<FadeTransition type="in" duration={30}>
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

				<Sequence from={60} durationInFrames={10}>
					<BalloonsEffects
						primaryColor={PrimaryColor}
						secondaryColor={SecondaryColor}
					/>
				</Sequence>

				{/* Second Set */}
				<Sequence from={70} durationInFrames={110}>
					<LogoDownBalloon logo={logo} width={`${50}`} height={`${50}`} />
				</Sequence>

				<Sequence from={75} durationInFrames={105}>
					<Underline alignTop={`${42}`} color="white" />
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					<BalloonText
						titleColor="white"
						titleText="CONGRATULATIONS!"
						bottom={200}
						size="100px"
						fontWeight={400}
						time={1}
						marginLeft=""
						fontStyle=""
						background=""
					/>
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					{hashTag && (
						<BalloonText
							titleColor="white"
							titleText={`#${hashTag}`}
							bottom={120}
							size="70px"
							fontWeight={400}
							time={4}
							marginLeft=""
							fontStyle=""
							background=""
						/>
					)}
				</Sequence>

				<Sequence from={175} durationInFrames={30}>
					<BalloonsEffects
						primaryColor={PrimaryColor}
						secondaryColor={SecondaryColor}
					/>
				</Sequence>
			</FadeTransition>
		</AbsoluteFill>
	);
};
