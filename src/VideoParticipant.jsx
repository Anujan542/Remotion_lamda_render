import {
	delayRender,
	continueRender,
	Composition,
	getInputProps,
} from 'remotion';
import {useEffect, useState, useCallback} from 'react';
import {ClassicParticipantMain} from './ParticipantsComponents/ClassicTemplates/ClassicParticipantMain';
import {getVideoMetadata} from '@remotion/media-utils';
import {encode} from 'base-64';

export const RemotionParticipantVideo = () => {
	const [handle] = useState(() => delayRender());
	const [totalTime, setTotalTime] = useState(1);
	console.log(totalTime);
	const [remotionDetails, setRemotionDetails] = useState(null);

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
						duration: 190,
						type: mediaAsset.type,
					};
				}

				if (mediaAsset.type === 'outro') {
					return {
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
				duration: studentVideoDuration + 104,
				type: 'student',
			};

			data.splice(indexOnStudent + 1, 0, slowMotionStudentVideo);
		}

		let totalTime = 0;
		data.forEach((item) => {
			totalTime += item.duration;
			setTotalTime(totalTime);
		});
		continueRender(handle);
	};

	useEffect(() => {
		if (remotionDetails) {
			getData();
			getStudentVideoDuration();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [remotionDetails]);

	return (
		<>
			<Composition
				id="HelloWorld"
				component={ClassicParticipantMain}
				durationInFrames={totalTime}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
