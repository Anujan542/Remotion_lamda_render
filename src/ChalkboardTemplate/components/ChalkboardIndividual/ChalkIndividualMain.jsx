/* eslint-disable @remotion/volume-callback */
import {
	AbsoluteFill,
	Audio,
	Sequence,
	OffthreadVideo,
	staticFile,
} from 'remotion';

import Background from '../../assets/chalk.png';
import '../../../components/fonts/Text.css';

export const ChalkIndividualMain = ({speed, graphics, volume}) => {
	return (
		<AbsoluteFill>
			<Sequence from={20}>
				<Audio volume={volume} src={staticFile('voice.wav')} />
			</Sequence>
			{graphics ? (
				<AbsoluteFill
					style={{
						position: 'relative',
					}}
				>
					<OffthreadVideo
						playbackRate={speed}
						src="https://clippingplatformstaging.blob.core.windows.net/assets/previews/live_clip.mp4"
					/>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								position: 'absolute',
								marginBottom: '10rem',
								backgroundImage: `url(${Background})`,
								width: '2000px',
								height: '400px',
							}}
						>
							<div>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											fontFamily: 'Oswald',
											fontSize: '95px',
											fontWeight: 'bolder',
											textAlign: 'center',
											color: 'white',
											marginBottom: '17rem',
											letterSpacing: '2px',
										}}
									>
										Renee Lareese Johnson
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '40px',
											fontWeight: 'bolder',
											textAlign: 'center',
											color: 'white',
											marginBottom: '6rem',
											letterSpacing: '1px',
										}}
									>
										Bachelor of Science in Political Science
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '35px',
											fontWeight: 'bolder',
											textAlign: 'center',
											color: 'white',
											marginBottom: '-1rem',
											letterSpacing: '1px',
										}}
									>
										Cum Laude
									</div>
								</AbsoluteFill>
							</div>
						</div>
					</div>
				</AbsoluteFill>
			) : (
				<AbsoluteFill
					style={{
						position: 'relative',
					}}
				>
					<OffthreadVideo
						playbackRate={speed}
						src="https://clippingplatformstaging.blob.core.windows.net/assets/previews/live_clip.mp4"
					/>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								position: 'absolute',
								marginBottom: '13rem',
								backgroundImage: `url(${Background})`,
								width: '2000px',
								height: '165px',
							}}
						>
							<div>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											fontFamily: 'Oswald',
											fontSize: '80px',
											fontWeight: 'bolder',
											textAlign: 'center',
											color: 'white',
											marginBottom: '5rem',
											letterSpacing: '2px',
										}}
									>
										Renee Lareese Johnson
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '32px',
											fontWeight: 'bolder',
											textAlign: 'center',
											color: 'white',
											marginBottom: '-3rem',
											letterSpacing: '1px',
										}}
									>
										Bachelor of Science in Political Science
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '30px',
											fontWeight: 'bolder',
											textAlign: 'center',
											color: 'white',
											marginBottom: '-8rem',
											letterSpacing: '1px',
										}}
									>
										Cum Laude
									</div>
								</AbsoluteFill>
							</div>
						</div>
					</div>
				</AbsoluteFill>
			)}
		</AbsoluteFill>
	);
};
