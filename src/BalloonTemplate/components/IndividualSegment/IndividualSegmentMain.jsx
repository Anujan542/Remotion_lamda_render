import {
	AbsoluteFill,
	OffthreadVideo,
	Sequence,
	Audio,
	staticFile,
} from 'remotion';

import Background from '../../assets/balloonback.png';
import '../../../components/fonts/Text.css';
import {Transition} from '../Balloon/Transition';
import {VideoBalloons1} from '../Balloon/VideoBalloons1';
import {WhiteBalloon} from '../Balloon/WhiteBalloon';

export const BalloonIndividualSegmentMain = ({
	speed,
	color,
	SecondaryColor,
	graphics,
	slowMotionVideoEnable,
}) => {
	return (
		<AbsoluteFill>
			<Sequence from={20}>
				<Audio volume={1} src={staticFile('voice.wav')} />
			</Sequence>
			{graphics ? (
				<>
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
							<Transition type="out" show={slowMotionVideoEnable ? 340 : 335}>
								<WhiteBalloon
									LeftBallooonmarginLeft={-9}
									LeftBallooonmarginTop={45}
									balloonSpeed={0.1}
									primaryColor="#e0e0e0"
								/>
							</Transition>

							<div
								style={{
									position: 'absolute',
									marginBottom: '10rem',
									backgroundImage: `url(${Background})`,
									width: '2000px',
									height: '380px',
								}}
							>
								<Transition type="out" show={slowMotionVideoEnable ? 350 : 335}>
									<WhiteBalloon
										LeftBallooonmarginLeft={-7}
										LeftBallooonmarginTop={-1}
										balloonSpeed={1}
										primaryColor={SecondaryColor}
									/>
								</Transition>
								<Transition type="out" show={slowMotionVideoEnable ? 350 : 335}>
									<WhiteBalloon
										LeftBallooonmarginLeft={93}
										LeftBallooonmarginTop={-3}
										balloonSpeed={1}
										primaryColor="#e0e0e0"
									/>
								</Transition>
								<Transition type="out" show={slowMotionVideoEnable ? 345 : 335}>
									<VideoBalloons1
										LeftBallooonmarginLeft={0}
										LeftBallooonmarginTop={1}
										RightBallooonmarginLeft={88}
										RightBallooonmarginTop={1}
										balloonSpeed={0.8}
										primaryColor={color}
									/>
								</Transition>

								<Transition type="out" show={slowMotionVideoEnable ? 340 : 335}>
									<VideoBalloons1
										LeftBallooonmarginLeft={-15}
										LeftBallooonmarginTop={0}
										RightBallooonmarginLeft={100}
										RightBallooonmarginTop={1}
										balloonSpeed={1}
										primaryColor={color}
									/>
								</Transition>

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
												fontSize: '75px',
												fontWeight: 'normal',
												textAlign: 'center',
												color: 'white',
												marginBottom: '15rem',
												letterSpacing: '1px',
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
												fontFamily: 'Oswald',
												fontSize: '38px',
												fontWeight: 'normal',
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
												fontFamily: 'Oswald',
												fontSize: '35px',
												fontWeight: 'normal',
												textAlign: 'center',
												color: 'white',
												marginBottom: '0rem',
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
				</>
			) : (
				<>
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
							<Transition type="out" show={slowMotionVideoEnable ? 342 : 335}>
								<WhiteBalloon
									LeftBallooonmarginLeft={-9}
									LeftBallooonmarginTop={45}
									balloonSpeed={0.9}
									primaryColor="#e0e0e0"
								/>
							</Transition>
							<div
								style={{
									position: 'absolute',
									marginBottom: '15rem',
									backgroundImage: `url(${Background})`,
									width: '2000px',
									height: '180px',
								}}
							>
								<Transition type="out" show={slowMotionVideoEnable ? 340 : 335}>
									<WhiteBalloon
										LeftBallooonmarginLeft={-10}
										LeftBallooonmarginTop={-5}
										balloonSpeed={0.9}
										primaryColor={SecondaryColor}
									/>
								</Transition>
								<Transition type="out" show={slowMotionVideoEnable ? 340 : 335}>
									<WhiteBalloon
										LeftBallooonmarginLeft={95}
										LeftBallooonmarginTop={-6}
										balloonSpeed={0.9}
										primaryColor="#e0e0e0"
									/>
								</Transition>
								<Transition type="out" show={slowMotionVideoEnable ? 345 : 335}>
									<VideoBalloons1
										LeftBallooonmarginLeft={-2}
										LeftBallooonmarginTop={-3}
										RightBallooonmarginLeft={100}
										RightBallooonmarginTop={-3}
										balloonSpeed={0.8}
										primaryColor={color}
									/>
								</Transition>

								<Transition type="out" show={slowMotionVideoEnable ? 335 : 335}>
									<VideoBalloons1
										LeftBallooonmarginLeft={-18}
										LeftBallooonmarginTop={-4}
										RightBallooonmarginLeft={90}
										RightBallooonmarginTop={-2}
										balloonSpeed={1}
										primaryColor={color}
									/>
								</Transition>

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
												fontSize: '75px',
												fontWeight: 'normal',
												textAlign: 'center',
												color: 'white',
												marginBottom: '6rem',
												letterSpacing: '1px',
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
												fontFamily: 'Oswald',
												fontSize: '35px',
												fontWeight: 'normal',
												textAlign: 'center',
												color: 'white',
												marginBottom: '-2rem',
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
												fontFamily: 'Oswald',
												fontSize: '30px',
												fontWeight: 'normal',
												textAlign: 'center',
												color: 'white',
												marginBottom: '-7rem',
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
				</>
			)}
		</AbsoluteFill>
	);
};
