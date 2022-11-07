import {
	AbsoluteFill,
	Sequence,
	Video,
	continueRender,
	delayRender,
	Img,
} from 'remotion';

import {useCallback, useState, useEffect} from 'react';

import {ClassicIndividual} from './components/Individual/ClassicIndividual';
import {IntroMain} from './components/Intro/IntroMain';
import {getVideoMetadata} from '@remotion/media-utils';

export const ClassicMain = () => {
	const [handle] = useState(() => delayRender());

	const [remotionDetails, setRemotionDetails] = useState(null);
	const [classicData, setClassicData] = useState([]);
	console.log(classicData);

	const fetchData = useCallback(async () => {
		await fetch(
			`https://clipping-platform-api-staging.azurewebsites.net/producer/remotion-preview/3c522de1-ed6c-4b01-83d0-27514dc8f33d`
		)
			.then((response) => response.json())
			.then((actualData) => {
				setRemotionDetails(actualData);
			})
			.catch((err) => {
				console.log(err.message);
			});

		continueRender(handle);
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

	const getData = async () => {
		const mediaAssetsDetails =
			remotionDetails.remotionPreviewData &&
			remotionDetails.remotionPreviewData.assets.map(async (mediaAsset) => {
				if (mediaAsset.type === 'intro') {
					return {
						component: (
							<IntroMain
								// HashTag={}
								logo={`${remotionDetails.remotionPreviewData.logoUrl}`}
								PrimaryColor={`${remotionDetails.remotionPreviewData.primaryColor}`}
								SecondaryColor={`${remotionDetails.remotionPreviewData.secondaryColor}`}
							/>
						),
						duration: 190,
						type: mediaAsset.type,
					};
				}

				// If (mediaAsset.type === 'outro') {
				// 	return {
				// 		component: (
				// 			<OutroMain
				// 				hashTag={
				// 					(clipConfiguration && clipConfiguration?.hashtag) ||
				// 					(institution && institution?.hashtag) ||
				// 					''
				// 				}
				// 				logo={
				// 					(clipConfiguration && clipConfiguration?.logoUrl) ||
				// 					(institution && institution?.logoUrl) ||
				// 					''
				// 				}
				// 				color={`${
				// 					clipConfiguration?.primaryColour === null
				// 						? institution?.primaryColour
				// 						: clipConfiguration?.primaryColour
				// 				}`}
				// 				SecondaryColor={`${
				// 					clipConfiguration?.secondaryColour === null
				// 						? institution?.secondaryColour
				// 						: clipConfiguration?.secondaryColour
				// 				}`}
				// 				name={templateDetails?.data.name}
				// 				institutionsName={institution?.name}
				// 			/>
				// 		),
				// 		duration: 350,
				// 		type: mediaAsset.type,
				// 	};
				// }

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
						<ClassicIndividual
							logo={remotionDetails.remotionPreviewData.logoUrl}
							color={remotionDetails.remotionPreviewData.primaryColor}
							SecondaryColor={
								remotionDetails.remotionPreviewData.secondaryColor
							}
							volume={1}
							speed={1}
						/>
					),
					duration: 256,
					type: 'student',
				};
			});

		const data = await Promise.all(mediaAssetsDetails);

		// If (remotionDetails.remotionPreviewData.slowMotionVideoEnable) {
		// 	const indexOnStudent = data.findIndex(
		// 		(value) => value.type === 'student'
		// 	);
		// 	const slowMotionStudentVideo = {
		// 		component: (
		// 			<ClassicIndividual
		// 				logo={remotionDetails.remotionPreviewData.logoUrl}
		// 				color={remotionDetails.remotionPreviewData.primaryColor}
		// 				SecondaryColor={remotionDetails.remotionPreviewData.secondaryColor}
		// 				volume={0}
		// 				speed={0.7}
		// 			/>
		// 		),
		// 		duration: 360,
		// 		type: 'student',
		// 	};

		// 	data.splice(indexOnStudent + 1, 0, slowMotionStudentVideo);
		// }

		setClassicData(data);
	};

	useEffect(() => {
		async function fetchGetData() {
			if (remotionDetails) {
				await getData();
			}
		}
		fetchGetData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [remotionDetails]);

	let fromTime = 0;
	return (
		<AbsoluteFill>
			{classicData.map((item, index) => {
				fromTime += item.duration;
				return (
					<AbsoluteFill key={index}>
						{!item.type === 'media' ? (
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
		</AbsoluteFill>
	);
};
