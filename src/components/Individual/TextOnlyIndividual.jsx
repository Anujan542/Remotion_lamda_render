import {Audio, Img, Sequence, staticFile} from 'remotion';
import {AbsoluteFill, OffthreadVideo} from 'remotion';
import '../fonts/Text.css';

export const TextOnlyIndividual = ({volume, speed, graphics, logo, color}) => {
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
							volume={volume}
							playbackRate={speed}
							src="https://clippingplatformstaging.blob.core.windows.net/assets/previews/live_clip.mp4"
						/>

						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'start',
							}}
						>
							<div
								style={{
									position: 'absolute',
									background: `${color}`,
									width: '2000px',
									height: '600px',
								}}
							>
								<AbsoluteFill
									style={{
										alignItems: 'start',
										justifyContent: 'start',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '55px',
											fontWeight: 500,
											top: '60px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											marginLeft: '3rem',
											letterSpacing: '1px',
										}}
									>
										Renee Lareese Johnson
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'start',
										justifyContent: 'start',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '45px',
											fontWeight: 'normal',
											top: '112px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											marginLeft: '3rem',
											letterSpacing: '1px',
										}}
									>
										Bachelor of Science in Political Science
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'start',
										justifyContent: 'start',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '40px',
											fontWeight: 'normal',
											top: '155px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											marginLeft: '3rem',
											letterSpacing: '1px',
										}}
									>
										Cum Laude
									</div>
								</AbsoluteFill>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center ',
									}}
								>
									<Img
										src={logo}
										style={{
											marginTop: '14rem',
											maxWidth: '20%',
											maxHeight: '20%',
											position: 'absolute',
											marginLeft: '80rem',
										}}
									/>
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
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'end',
							}}
						/>

						<OffthreadVideo
							volume={volume}
							playbackRate={speed}
							src="https://clippingplatformstaging.blob.core.windows.net/assets/previews/live_clip.mp4"
						/>

						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'start',
							}}
						>
							<div
								style={{
									position: 'absolute',
									marginBottom: '12rem',
									width: '1300px',
									height: '100px',
								}}
							>
								<AbsoluteFill>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '50px',
											fontWeight: 500,
											bottom: '90px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '4rem',
											letterSpacing: '1px',
										}}
									>
										Renee Lareese Johnson
									</div>

									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '50px',
											fontWeight: 'normal',
											bottom: '40px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '4rem',
											letterSpacing: '1px',
										}}
									>
										Bachelor of Science in Political Science
									</div>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '45px',
											fontWeight: 'normal',
											bottom: '-5px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '4rem',
											letterSpacing: '1px',
										}}
									>
										Cum Laude
									</div>

									<div>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
											}}
										>
											<Img
												src={logo}
												style={{
													maxWidth: '15%',
													maxHeight: '15%',
													marginLeft: '130rem',
													marginTop: '-2rem',
												}}
											/>
										</div>
									</div>
								</AbsoluteFill>
							</div>
						</div>
					</AbsoluteFill>
				</>
			)}
		</AbsoluteFill>
	);
};
