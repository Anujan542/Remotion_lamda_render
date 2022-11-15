import {AbsoluteFill, Audio, Sequence, OffthreadVideo} from 'remotion';

import Background from '../../assets/chalk.png';
import {ChalkText} from '../ChalkboardIntro/ChalkText';
import {DownLogo} from '../ChalkboardIntro/DownLogo';

import {Text} from './Text';

import StageLogo from '../../../BalloonTemplate/assets/blackLogo.mp4';

export const ChalkOutroMain = ({logo, hashTag, institutionsName}) => {
	return (
		<AbsoluteFill style={{backgroundImage: `url(${Background})`}}>
			<Audio
				volume={1}
				src="https://cliperagoprod.blob.core.windows.net/assets/Post%20Roll%20Sound%20Design.mp3"
				startFrom={0}
				endAt={150}
			/>
			<Sequence durationInFrames={180}>
				<DownLogo logo={logo} width={`${35}`} height={`${35}`} />
			</Sequence>
			<Sequence from={10} durationInFrames={170}>
				<Text
					titleColor="white"
					titleText="CONGRATULATIONS, YOU DID IT!"
					bottom={340}
					size="80px"
					fontWeight={900}
					time={2}
					marginLeft=""
					fontStyle=""
				/>
			</Sequence>
			<Sequence from={10} durationInFrames={170}>
				<ChalkText
					titleColor="white"
					titleText={`#${hashTag}`}
					bottom={260}
					size="65px"
					fontWeight={900}
					time={2}
					marginLeft=""
					fontStyle=""
				/>
			</Sequence>

			<Sequence from={10} durationInFrames={170}>
				<div>
					<ChalkText
						titleColor="white"
						titleText={`${institutionsName}`}
						bottom={30}
						size="30px"
						fontWeight={500}
						time={3}
						marginLeft=""
						fontStyle=""
					/>
				</div>
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
