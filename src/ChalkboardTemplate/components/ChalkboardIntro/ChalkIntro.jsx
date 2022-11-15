import {
	AbsoluteFill,
	interpolate,
	Img,
	useCurrentFrame,
	Sequence,
} from 'remotion';
import {FadeTransition} from '../../../components/Effects/FadeTransition';
import {SlideOpenEffect2} from '../../../components/Effects/SlideOpenEffect2';
import {SlideOpenEffect} from '../../../components/Effects/SlideOpenEffects';
import {UnderlineEffect} from '../../../components/Effects/UnderlineEffect';
import {Underline} from '../../../components/Intro/Underline';

import chalk from '../../assets/chalk.png';

import {ChalkText} from './ChalkText';
import {DownLogo} from './DownLogo';

export const ChalkIntro = ({PrimaryColor, logo, hashTag, SecondaryColor}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 100], [0, 4]);

	return (
		<AbsoluteFill style={{backgroundImage: `url(${chalk})`}}>
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
						<Img src={logo} />
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
					<DownLogo logo={logo} />
				</Sequence>

				<Sequence from={75} durationInFrames={105}>
					<Underline alignTop={`${37}`} color={PrimaryColor} />
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					<ChalkText
						titleColor="white"
						titleText="CONGRATULATIONS!"
						bottom={270}
						size="100px"
						fontWeight={900}
						time={1}
						marginLeft=""
						fontStyle=""
					/>
				</Sequence>

				<Sequence from={80} durationInFrames={100}>
					<ChalkText
						titleColor="white"
						titleText={`#${hashTag}`}
						bottom={190}
						size="65px"
						fontWeight={900}
						time={4}
						marginLeft=""
						fontStyle=""
					/>
				</Sequence>

				<Sequence from={130} durationInFrames={50}>
					<UnderlineEffect lineAlign={-9.4} color={PrimaryColor} />
				</Sequence>

				<Sequence from={150} durationInFrames={40}>
					<SlideOpenEffect color={SecondaryColor} />
				</Sequence>
			</FadeTransition>
		</AbsoluteFill>
	);
};
