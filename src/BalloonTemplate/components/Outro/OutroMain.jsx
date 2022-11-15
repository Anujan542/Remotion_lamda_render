import {AbsoluteFill, Audio, Sequence, OffthreadVideo} from 'remotion';
import {FadeTransition} from '../../../components/Effects/FadeTransition';

import Background from '../../assets/balloonback.png';
import {BalloonsEffects} from '../Balloon/BalloonsEffects';
import {LogoDownBalloon} from '../Intro/LogoDownBalloon';

import {BalloonLastText} from './BalloonLastText';

import StageLogo from '../../assets/blackLogo.mp4';

export const BalloonOutroMain = ({
	logo,
	color,
	hashTag,
	SecondaryColor,
	institutionsName,
}) => {
	return (
		<AbsoluteFill style={{backgroundImage: `url(${Background})`}}>
			<Audio
				volume={1}
				src="https://cliperagoprod.blob.core.windows.net/assets/Post%20Roll%20Sound%20Design.mp3"
				startFrom={0}
				endAt={150}
			/>
			<FadeTransition type="in" duration={40}>
				<Sequence durationInFrames={180}>
					<LogoDownBalloon
						logo={logo}
						color={color}
						width={`${30}`}
						height={`${30}`}
					/>
				</Sequence>
				<Sequence from={10} durationInFrames={170}>
					<BalloonLastText
						titleColor="white"
						titleText="CONGRATULATIONS, YOU DID IT!"
						bottom={360}
						size="100px"
						fontWeight={400}
						time={0}
						marginLeft=""
						fontStyle=""
					/>
				</Sequence>
				<Sequence from={10} durationInFrames={170}>
					{hashTag && (
						<BalloonLastText
							titleColor="white"
							titleText={`#${hashTag}`}
							bottom={245}
							size="60px"
							fontWeight={400}
							time={0}
							marginLeft=""
							fontStyle=""
						/>
					)}
				</Sequence>

				<Sequence from={10} durationInFrames={170}>
					<div>
						<BalloonLastText
							titleColor="white"
							titleText={`${institutionsName}`}
							bottom={25}
							size="35px"
							fontWeight={300}
							time={0}
							marginLeft=""
							fontStyle=""
						/>
					</div>
				</Sequence>
			</FadeTransition>

			<Sequence from={175} durationInFrames={10}>
				<BalloonsEffects primaryColor={color} secondaryColor={SecondaryColor} />
			</Sequence>
			<Sequence from={180} durationInFrames={170}>
				<OffthreadVideo src={StageLogo} />
				<Audio
					volume={1}
					src="https://cliperagoprod.blob.core.windows.net/assets/Post%20Roll%20Sound%20Design.mp3"
					startFrom={160}
				/>
			</Sequence>
		</AbsoluteFill>
	);
};
