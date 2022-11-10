import {Img} from 'remotion';
import {AbsoluteFill, OffthreadVideo} from 'remotion';
import '../Intro/Text.css';
import {GlowingStroke} from './GlowingStroke';

export const ClassicColorBorderIndividual = ({
	volume,
	speed,
	graphics,
	logo,
	color,
}) => {
	return (
		<AbsoluteFill>
			{/* <Sequence from={20}>
				<Audio volume={props.volume} src={voice} />
			</Sequence> */}

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
									marginTop: '7rem',
									maxWidth: '12%',
									maxHeight: '12%',
									position: 'absolute',
									marginRight: '0.5rem',
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
								justifyContent: 'center',
							}}
						>
							<div
								style={{
									position: 'absolute',
									background: 'white',
									width: '1300px',
									height: '400px',
								}}
							>
								<GlowingStroke
									width={1290}
									height={203}
									radius={3}
									color1={color}
									color2={color}
								/>

								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'start',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '52px',
											fontWeight: 900,
											top: '48px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											letterSpacing: '1px',
										}}
									>
										Renee Lareese Johnson
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'start',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '29px',
											fontWeight: 900,
											top: '90px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											letterSpacing: '1px',
										}}
									>
										Bachelor of Science in Political Science
									</div>
								</AbsoluteFill>
								<AbsoluteFill
									style={{
										alignItems: 'center',
										justifyContent: 'start',
									}}
								>
									<div
										style={{
											fontFamily: 'Roboto',
											fontSize: '29px',
											fontWeight: 900,
											top: '125px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
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
			) : (
				<AbsoluteFill
					style={{
						position: 'relative',
						// Outline: `10px double ${props.color}`,
						// outlineOffset: '-40px',
					}}
				>
					<AbsoluteFill
						style={{
							position: 'absolute',
							display: 'flex',
							flexDirection: 'column',
							// Gap: 10,
							paddingTop: '2.5%',
							paddingLeft: '2%',
							paddingRight: '1%',
							paddingBottom: '4%',
						}}
					>
						{/* left */}
						{/* <div
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              height: '91.9%',
              top: 30,
              width: 4,
              left: 28,
            }}
          />
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              height: '90%',
              marginTop: 37,
              width: 4,
              left: 35,
            }}
          /> */}
						{/* top */}
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								gap: '1%',
								height: '100%',
								// BackgroundColor: 'red'
							}}
						>
							<div style={{paddingTop: '1%', width: '100%'}}>
								<div
									style={{
										// Position: 'absolute',
										// backgroundColor: 'red',
										// height: 4,
										borderTop: `3px solid ${color}`,
										// MarginTop: 30,
										width: '100%',
										// Height: 100,
										paddingTop: 10,
										paddingLeft: 13,
										// Left: 28.5,
									}}
								>
									<div
										style={{
											// // position: 'absolute',
											// backgroundColor: 'black',
											// height: 4,
											borderTop: `3px solid ${color}`,
											paddingTop: 14,
											paddingLeft: 7,
											width: '100%',
											// Left: 35.5,
										}}
									/>
								</div>
							</div>

							<div
								style={{
									// Position: 'absolute',
									// top: 15,
									// right: 15,
									display: 'flex',
									flexDirection: 'column',
									width: 'auto',
									height: '100%',
									// BackgroundColor: 'red',
									gap: '1%',
								}}
							>
								<Img
									src={logo}
									style={{
										maxWidth: 150,
										maxHeight: 150,
										// Border: '1px solid black',
										// objectFit: 'contain',
									}}
								/>
								<div
									style={{
										height: '100%',
										// Width: '100%',
										// backgroundColor: 'purple',
										display: 'flex',
										justifyContent: 'right',
										paddingRight: 18,
									}}
								>
									<div
										style={{
											height: '100%',
											// Width: '10%',
											borderRight: `3px solid ${color}`,
											paddingRight: 10,
											paddingBottom: 13,
										}}
									>
										<div
											style={{
												height: '100%',
												// Width: '10%',
												borderRight: `3px solid ${color}`,
											}}
										/>
									</div>
								</div>
							</div>
						</div>
						{/* bottom */}

						{/* 
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              height: 4,
              bottom: 35,
              width: '94.35%',
              left: 35.5,
            }}
          /> */}
						{/* right */}
						{/* white borders */}
					</AbsoluteFill>
					<div
						style={{
							position: 'absolute',
							borderLeft: `3px solid ${color}`,
							bottom: '7%',
							height: '86.7%',
							// Width: 100,
							left: '2%',
							paddingLeft: 10,
							paddingTop: 12,
							paddingBottom: 13,
						}}
					>
						<div
							style={{
								borderLeft: `3px solid ${color}`,
								height: '100%',
							}}
						/>
					</div>

					<div
						style={{
							position: 'absolute',
							borderBottom: `3px solid ${color}`,
							bottom: '7%',
							width: '95.6%',
							left: '2%',
							paddingLeft: 13,
							paddingRight: 13,
							paddingBottom: 10,
						}}
					>
						<div
							style={{
								borderBottom: `3px solid ${color}`,
								width: '100%',
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
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								position: 'absolute',
								marginBottom: '10rem',
								background: 'white',
								width: '1100px',
								height: '120px',
							}}
						>
							<GlowingStroke
								width={1103}
								height={128}
								radius={3}
								color1={color}
								color2={color}
							/>

							<AbsoluteFill
								style={{
									alignItems: 'center',
									justifyContent: 'start',
								}}
							>
								<div
									style={{
										fontFamily: 'Roboto',
										fontSize: '44px',
										fontWeight: 900,
										bottom: '64px',
										textAlign: 'center',
										position: 'absolute',
										color: 'black',
										letterSpacing: '1px',
									}}
								>
									Renee Lareese Johnson
								</div>
							</AbsoluteFill>
							<AbsoluteFill
								style={{
									alignItems: 'center',
									justifyContent: 'start',
								}}
							>
								<div
									style={{
										fontFamily: 'Roboto',
										fontSize: '22px',
										fontWeight: 900,
										bottom: '31px',
										textAlign: 'center',
										position: 'absolute',
										color: 'black',
										letterSpacing: '1px',
									}}
								>
									Bachelor of Science in Political Science
								</div>
							</AbsoluteFill>
							<AbsoluteFill
								style={{
									alignItems: 'center',
									justifyContent: 'start',
								}}
							>
								<div
									style={{
										fontFamily: 'Roboto',
										fontSize: '20px',
										fontWeight: 900,
										bottom: '11px',
										textAlign: 'center',
										position: 'absolute',
										color: 'black',
										letterSpacing: '1px',
									}}
								>
									Cum Laude
								</div>
							</AbsoluteFill>
						</div>
					</div>
				</AbsoluteFill>
			)}
		</AbsoluteFill>
	);
};
