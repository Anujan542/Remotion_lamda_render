/* eslint-disable no-negated-condition */
import {
	AbsoluteFill,
	Sequence,
	Video,
	continueRender,
	delayRender,
	Img,
	Audio,
	getInputProps,
} from 'remotion';

import {useCallback, useState, useEffect} from 'react';
import {getVideoMetadata} from '@remotion/media-utils';
import {IntroMain} from '../../components/Intro/IntroMain';
import {OutroMain} from '../../components/Outro/OutroMain';
import {ClassicParticipantIndividual} from './components/IndividualMain/ClassicParticipantIndividualMain';
import {encode} from 'base-64';

export const ClassicParticipantMain = () => {
	const [handle] = useState(() => delayRender());

	const [remotionDetails, setRemotionDetails] = useState(null);
	const [classicData, setClassicData] = useState([]);
	const [audioUrl, setAudioUrl] = useState('');

	const {id} = getInputProps();

	const fetchData = useCallback(async () => {
		await fetch(
			// eslint-disable-next-line no-undef
			`${process.env.CLIPPING_PLATFORM_API_URL}/remotion/render/${id}`,
			{
				method: 'GET',
				headers: new Headers({
					Authorization:
						// eslint-disable-next-line no-useless-concat
						'Basic ' + encode('stageclip-remotion' + ':' + 'pass951hfhjdip'),
					'Content-Type': 'application/json',
				}),
			}
		)
			.then((response) => response.json())
			.then((actualData) => {
				setRemotionDetails(actualData);
				setAudioUrl(actualData.remotionPreviewData.audioUrl);
			})
			.catch((err) => {
				console.log(err.message);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handle]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const getVideoDuration = async (firstAsset) => {
		try {
			const {durationInSeconds} = await getVideoMetadata(`${firstAsset}`);

			return Math.round(durationInSeconds * 30);
		} catch (err) {
			console.log(`Error fetching metadata: ${err}`);
			return 0;
		}
	};

	const getStudentVideoDuration = async (studentUrl) => {
		try {
			const {durationInSeconds} = await getVideoMetadata(`${studentUrl}`);

			return Math.round(durationInSeconds * 30);
		} catch (err) {
			console.log(`Error fetching metadata: ${err}`);
			return 0;
		}
	};

	const getData = async () => {
		const studentVideoDuration = await getStudentVideoDuration(
			remotionDetails.participantLiveVideoUrl
		);
		const mediaAssetsDetails =
			remotionDetails.remotionPreviewData &&
			remotionDetails.remotionPreviewData.assets.map(async (mediaAsset) => {
				if (mediaAsset.type === 'intro') {
					return {
						component: (
							<IntroMain
								hashTag={`${remotionDetails.remotionPreviewData.hashtag}`}
								logo={`${remotionDetails.remotionPreviewData.logoUrl}`}
								PrimaryColor={`${remotionDetails.remotionPreviewData.primaryColor}`}
								SecondaryColor={`${remotionDetails.remotionPreviewData.secondaryColor}`}
							/>
						),
						duration: 190,
						type: mediaAsset.type,
					};
				}

				if (mediaAsset.type === 'outro') {
					return {
						component: (
							<OutroMain
								hashTag={`${remotionDetails.remotionPreviewData.hashtag}`}
								logo={`${remotionDetails.remotionPreviewData.logoUrl}`}
								color={`${remotionDetails.remotionPreviewData.primaryColor}`}
								SecondaryColor={`${remotionDetails.remotionPreviewData.secondaryColor}`}
								institutionsName={remotionDetails?.institutionName}
							/>
						),
						duration: 350,
						type: mediaAsset.type,
					};
				}

				if (mediaAsset.type === 'media') {
					if (mediaAsset.media.type === 'video') {
						const videoDuration = await getVideoDuration(mediaAsset.media.url);
						return {
							url: mediaAsset.media.url,
							duration: videoDuration,
							type: mediaAsset.type,
							mediaType: 'video',
						};
					}
					return {
						url: mediaAsset.media.url,
						mediaType: 'image',
						type: mediaAsset.type,
						duration: 100,
					};
				}

				return {
					component: (
						<ClassicParticipantIndividual
							logo={remotionDetails.remotionPreviewData.logoUrl}
							color={remotionDetails.remotionPreviewData.primaryColor}
							SecondaryColor={
								remotionDetails.remotionPreviewData.secondaryColor
							}
							graphics={remotionDetails.remotionPreviewData.videoHasGraphics}
							videoUrl={remotionDetails.participantLiveVideoUrl}
							audioUrl={remotionDetails.participantLiveAudioUrl}
							fullName={remotionDetails.parrticipantName}
							SubTitle={remotionDetails.parrticipantSubTitle}
							SecondSubTitle={remotionDetails.parrticipantSecondSubTitle}
							audioVolume={1}
							speed={1}
						/>
					),
					duration: studentVideoDuration,
					type: 'student',
				};
			});

		const data = await Promise.all(mediaAssetsDetails);

		if (remotionDetails.remotionPreviewData.slowMotionVideoEnable) {
			const indexOnStudent = data.findIndex(
				(value) => value.type === 'student'
			);
			const slowMotionStudentVideo = {
				component: (
					<ClassicParticipantIndividual
						logo={remotionDetails.remotionPreviewData.logoUrl}
						color={remotionDetails.remotionPreviewData.primaryColor}
						SecondaryColor={remotionDetails.remotionPreviewData.secondaryColor}
						graphics={remotionDetails.remotionPreviewData.videoHasGraphics}
						videoUrl={remotionDetails.participantLiveVideoUrl}
						audioUrl={remotionDetails.participantLiveAudioUrl}
						fullName={remotionDetails.parrticipantName}
						SubTitle={remotionDetails.parrticipantSubTitle}
						SecondSubTitle={remotionDetails.parrticipantSecondSubTitle}
						audioVolume={0}
						speed={0.7}
					/>
				),
				duration: studentVideoDuration + 70,
				type: 'student',
			};

			data.splice(indexOnStudent + 1, 0, slowMotionStudentVideo);
		}

		setClassicData(data);
		continueRender(handle);
	};

	useEffect(() => {
		if (remotionDetails) {
			getData();
			getStudentVideoDuration();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [remotionDetails]);

	let fromTime = 0;
	return (
		<AbsoluteFill>
			{classicData.map((item, index) => {
				fromTime += item.duration;
				return (
					<AbsoluteFill key={index}>
						{item.type !== 'media' ? (
							<AbsoluteFill>
								<Sequence
									from={fromTime - item.duration}
									durationInFrames={item.duration}
								>
									{item.component}
								</Sequence>
							</AbsoluteFill>
						) : (
							<AbsoluteFill>
								<Sequence
									from={fromTime - item.duration}
									durationInFrames={item.duration}
								>
									{item.mediaType === 'video' ? (
										<Video muted src={item.url} />
									) : item.mediaType === 'image' ? (
										<Img src={item.url} alt="image" />
									) : (
										''
									)}
								</Sequence>
							</AbsoluteFill>
						)}
					</AbsoluteFill>
				);
			})}
			{audioUrl && <Audio loop volume={0.1} src={`${audioUrl}`} />}
		</AbsoluteFill>
	);
};
