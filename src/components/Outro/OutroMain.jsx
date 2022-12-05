import {AbsoluteFill, Audio, Sequence} from 'remotion';
import {SlideOpenEffect2} from '../Effects/SlideOpenEffect2';
import {SlideOpenEffect} from '../Effects/SlideOpenEffects';
import {DownLogo} from '../Intro/DownLogo';
import {Text} from '../Intro/Text';
import {Glowing} from './Glowing';
import {GlowingAnother} from './GlowingAnother';
import {LastHashText} from './LastHashText';
import {LastText} from './LastText';
import {StageClipLogo} from './StageClipLogo';

export const OutroMain = ({
	logo,
	color,
	hashTag,
	SecondaryColor,
	institutionsName,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Audio
				volume={1}
				src="https://cliperagoprod.blob.core.windows.net/assets/Post%20Roll%20Sound%20Design.mp3"
				startFrom={0}
				endAt={150}
			/>

			<Sequence durationInFrames={180}>
				<DownLogo logo={logo} width={`${30}`} height={`${30}`} />
			</Sequence>

			<Sequence from={20} durationInFrames={160}>
				<GlowingAnother
					width={1880}
					height={1060}
					radius={3}
					color1={SecondaryColor}
					color2={SecondaryColor}
				/>
			</Sequence>

			<Sequence from={30} durationInFrames={150}>
				<LastText
					titleColor={color}
					titleText="CONGRATULATIONS, YOU DID IT!"
					bottom={380}
					size="100px"
					fontWeight={400}
					time={2}
					marginLeft=""
					fontStyle=""
				/>
			</Sequence>

			<Sequence from={40} durationInFrames={140}>
				<LastHashText
					titleColor={color}
					titleText={`#${hashTag}`}
					bottom={290}
					size="65px"
					fontWeight={900}
					time={4}
					marginLeft=""
					fontStyle=""
				/>
			</Sequence>

			<Sequence durationInFrames={180}>
				<Glowing
					width={1915}
					height={1080}
					radius={3}
					color1={SecondaryColor}
					color2={SecondaryColor}
				/>

				<div>
					<Text
						titleColor={color}
						titleText={`${institutionsName}`}
						bottom={8}
						size="50px"
						fontWeight={900}
						time={1}
						marginLeft=""
						fontStyle=""
						background="white"
					/>
				</div>
			</Sequence>

			<Sequence from={170} durationInFrames={30}>
				<SlideOpenEffect color={SecondaryColor} />
			</Sequence>

			<Sequence from={180} durationInFrames={30}>
				<SlideOpenEffect2 color={color} />
			</Sequence>

			<Sequence from={200} durationInFrames={150}>
				<StageClipLogo />
			</Sequence>
		</AbsoluteFill>
	);
};
