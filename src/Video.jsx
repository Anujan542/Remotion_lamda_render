import {delayRender, continueRender, Composition} from 'remotion';
import {useEffect, useState, useCallback} from 'react';
import {ClassicMain} from './ClassicMain';

export const RemotionVideo = () => {
	const [handle] = useState(() => delayRender());
	const [totalTime, setTotalTime] = useState(1);

	const fetchData = useCallback(async () => {
		await fetch(
			`https://clipping-platform-api-staging.azurewebsites.net/producer/remotion-preview/6874fe24-35fc-48d5-92e1-28c0f0c6875a`
		)
			.then((response) => response.json())
			.then((actualData) => {
				setTotalTime(actualData.remotionPreviewData.totalTime);
			})
			.catch((err) => {
				console.log(err.message);
			});
		continueRender(handle);
	}, [handle]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return (
		<>
			<Composition
				id="HelloWorld"
				component={ClassicMain}
				durationInFrames={totalTime}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
