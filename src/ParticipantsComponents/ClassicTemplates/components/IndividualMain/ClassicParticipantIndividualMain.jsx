/* eslint-disable @remotion/volume-callback */

import {AbsoluteFill, Img, OffthreadVideo, Audio} from 'remotion';

import '../../../../components/fonts/Text.css';
import {GlowingStrokeLiveParticipant} from '../Effects/GlowingStrokeLiveParticipant';

export const ClassicParticipantIndividual = ({
	audioVolume,
	speed,
	graphics,
	logo,
	color,
	videoUrl,
	audioUrl,
	fullName,
	SubTitle,
	SecondSubTitle,
}) => {
	return (
		<AbsoluteFill>
			<Audio volume={audioVolume} src={audioUrl} />

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
									marginTop: '10rem',
									maxWidth: '12%',
									maxHeight: '12%',
									position: 'absolute',
									marginRight: '0.5rem',
									boxShadow: 'inherit',
								}}
							/>
						</div>

						<OffthreadVideo muted playbackRate={speed} src={videoUrl} />

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
									width: '1920px',
									height: '500px',
								}}
							>
								<GlowingStrokeLiveParticipant
									width={1920}
									height={250}
									radius={5}
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
											fontSize: '100px',
											fontWeight: 900,
											top: '10px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											letterSpacing: '1px',
										}}
									>
										{fullName}
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
											fontSize: '40px',
											fontWeight: 900,
											top: '120px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											letterSpacing: '1px',
										}}
									>
										{SubTitle}
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
											fontSize: '35px',
											fontWeight: 900,
											top: '180px',
											textAlign: 'center',
											position: 'absolute',
											color: 'black',
											letterSpacing: '1px',
										}}
									>
										{SecondSubTitle}
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
					}}
				>
					<AbsoluteFill
						style={{
							position: 'absolute',
							display: 'flex',
							flexDirection: 'column',
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
										borderTop: '3px solid white',
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
											borderTop: '3px solid white',
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
											borderRight: '3px solid white',
											paddingRight: 10,
											paddingBottom: 13,
										}}
									>
										<div
											style={{
												height: '100%',
												// Width: '10%',
												borderRight: '3px solid white',
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
							borderLeft: '3px solid white',
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
								borderLeft: '3px solid white',
								height: '100%',
							}}
						/>
					</div>

					<div
						style={{
							position: 'absolute',
							borderBottom: '3px solid white',
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
								borderBottom: '3px solid white',
								width: '100%',
							}}
						/>
					</div>

					<OffthreadVideo muted playbackRate={speed} src={videoUrl} />

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
								marginBottom: '12rem',
								background: 'white',
								width: '1650px',
								height: '150px',
							}}
						>
							<GlowingStrokeLiveParticipant
								width={1650}
								height={155}
								radius={3}
								color1={color}
								color2={color}
							/>

							{SecondSubTitle === null ? (
								<>
									<AbsoluteFill
										style={{
											alignItems: 'center',
											justifyContent: 'start',
										}}
									>
										<div
											style={{
												fontFamily: 'Roboto',
												fontSize: '55px',
												fontWeight: 900,
												bottom: '68px',
												textAlign: 'center',
												position: 'absolute',
												color: 'black',
												LetterSpacing: '1px',
											}}
										>
											{fullName}
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
												fontSize: '40px',
												fontWeight: 800,
												bottom: '25px',
												textAlign: 'center',
												position: 'absolute',
												color: 'black',
												letterSpacing: '1px',
											}}
										>
											{SubTitle}
										</div>
									</AbsoluteFill>
								</>
							) : (
								<>
									<AbsoluteFill
										style={{
											alignItems: 'center',
											justifyContent: 'start',
										}}
									>
										<div
											style={{
												fontFamily: 'Roboto',
												fontSize: '55px',
												fontWeight: 900,
												bottom: '63px',
												textAlign: 'center',
												position: 'absolute',
												color: 'black',
												LetterSpacing: '1px',
											}}
										>
											{fullName}
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
												bottom: '34px',
												textAlign: 'center',
												position: 'absolute',
												color: 'black',
												letterSpacing: '1px',
											}}
										>
											{SubTitle}
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
											{SecondSubTitle}
										</div>
									</AbsoluteFill>
								</>
							)}
						</div>
					</div>
				</AbsoluteFill>
			)}
		</AbsoluteFill>
	);
};
