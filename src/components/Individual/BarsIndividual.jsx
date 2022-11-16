/* eslint-disable @remotion/volume-callback */
import {Audio, Img, Sequence, staticFile} from 'remotion';
import {AbsoluteFill, OffthreadVideo} from 'remotion';
import '../fonts/Text.css';

export const BarsIndividual = ({
	volume,
	speed,
	graphics,
	logo,
	color,
	SecondaryColor,
}) => {
	return (
		<AbsoluteFill>
			<Sequence from={20}>
				<Audio volume={volume} src={staticFile('voice.wav')} />
			</Sequence>

			{graphics ? (
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
						>
							<Img
								src={logo}
								style={{
									marginTop: '14rem',
									maxWidth: '12%',
									maxHeight: '12%',
									position: 'absolute',
									marginRight: '4rem',
									boxShadow: 'inherit',
								}}
							/>
						</div>

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
									height: '500px',
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
											fontWeight: 900,
											top: '50px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											marginLeft: '4rem',
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
											fontSize: '40px',
											fontWeight: 900,
											top: '105px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											marginLeft: '4rem',
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
											fontWeight: 900,
											top: '145px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											marginLeft: '4rem',
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
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											position: 'absolute',
											marginTop: '13rem',
											marginLeft: '86rem',
											background: `${SecondaryColor}`,
											width: '200px',
											height: '100px',
										}}
									>
										<div
											style={{
												fontFamily: 'Roboto',
												fontSize: '45px',
												fontWeight: 'bolder',
												bottom: '28px',
												textAlign: 'center',
												position: 'absolute',
												color: 'white',
												marginLeft: '3rem',
												letterSpacing: '1px',
											}}
										>
											{new Date().getFullYear()}
										</div>
									</div>
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
						>
							<Img
								src={logo}
								style={{
									marginTop: '14rem',
									maxWidth: '12%',
									maxHeight: '12%',
									position: 'absolute',
									marginRight: '4rem',
									boxShadow: 'inherit',
								}}
							/>
						</div>

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
									marginBottom: '24rem',
									marginLeft: '3rem',
									background: `${color}`,
									width: '1500px',
									height: '120px',
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
											fontSize: '52px',
											fontWeight: 900,
											bottom: '28px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											marginLeft: '1.5rem',
											letterSpacing: '1px',
										}}
									>
										Renee Lareese Johnson
									</div>
								</AbsoluteFill>
							</div>
						</div>
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
									marginBottom: '11rem',
									marginLeft: '3rem',
									background: 'white',
									width: '810px',
									height: '90px',
								}}
							>
								<div
									style={{
										fontFamily: 'Roboto',
										fontSize: '40px',
										fontWeight: 900,
										bottom: '40px',
										textAlign: 'center',
										position: 'absolute',
										color: 'black',
										marginLeft: '1.5rem',
										letterSpacing: '1px',
									}}
								>
									Bachelor of Science in Political Science
								</div>
								<div
									style={{
										fontFamily: 'Roboto',
										fontSize: '38px',
										fontWeight: 900,
										bottom: '2px',
										textAlign: 'center',
										position: 'absolute',
										color: 'black',
										marginLeft: '1.5rem',
										letterSpacing: '1px',
									}}
								>
									Cum Laude
								</div>
							</div>
						</div>

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
									marginBottom: '24rem',
									marginLeft: '85rem',
									background: `${SecondaryColor}`,
									width: '185px',
									height: '120px',
								}}
							>
								<div
									style={{
										fontFamily: 'Roboto',
										fontSize: '65px',
										fontWeight: 'bolder',
										bottom: '28px',
										textAlign: 'center',
										position: 'absolute',
										color: 'white',
										marginLeft: '1rem',
										letterSpacing: '1px',
									}}
								>
									{new Date().getFullYear()}
								</div>
							</div>
						</div>
					</AbsoluteFill>
				</>
			)}
		</AbsoluteFill>
	);
};
