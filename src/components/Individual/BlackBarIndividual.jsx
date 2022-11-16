/* eslint-disable @remotion/volume-callback */
import {Audio, Img, Sequence, staticFile} from 'remotion';
import {AbsoluteFill, OffthreadVideo} from 'remotion';
import '../fonts/Text.css';

export const BlackBarIndividual = ({volume, speed, graphics, logo}) => {
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
								justifyContent: 'start',
							}}
						>
							<Img
								src={logo}
								style={{
									marginTop: '12rem',
									maxWidth: '12%',
									maxHeight: '12%',
									position: 'absolute',
									marginLeft: '3rem',
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
									marginBottom: '10rem',

									background: 'black',
									width: '2000px',
									height: '400px',
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
											fontSize: '80px',
											fontWeight: 'normal',
											top: '45px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '2rem',
											letterSpacing: '1px',
										}}
									>
										Renee Lareese Johnson
									</div>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '40px',
											fontWeight: 'normal',
											top: '125px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '2.1rem',
										}}
									>
										Bachelor of Science in Political Science
									</div>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '40px',
											fontWeight: 'normal',
											top: '165px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '2.1rem',
										}}
									>
										Cum Laude
									</div>
								</AbsoluteFill>
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
								justifyContent: 'start',
							}}
						>
							<Img
								src={logo}
								style={{
									marginTop: '13rem',
									maxWidth: '12%',
									maxHeight: '12%',
									position: 'absolute',
									marginLeft: '5rem',
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
									marginBottom: '12rem',
									background: 'black',
									width: '2000px',
									height: '150px',
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
											fontSize: '60px',
											fontWeight: 'normal',
											bottom: '75px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '2rem',
											letterSpacing: '2px',
										}}
									>
										Renee Lareese Johnson
									</div>
									<div
										style={{
											fontFamily: 'sans-serif',
											fontSize: '30px',
											fontWeight: 'normal',
											bottom: '39px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '2rem',
											letterSpacing: '1px',
										}}
									>
										Bachelor of Science in Political Science
									</div>
									<div
										style={{
											fontFamily: 'sans-serif',
											fontSize: '30px',
											fontWeight: 'normal',
											bottom: '5px',
											textAlign: 'center',
											position: 'absolute',
											color: 'white',
											marginLeft: '2rem',
											letterSpacing: '1px',
										}}
									>
										Cum Laude
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
