import {
	delayRender,
	continueRender,
	Composition,
	getInputProps,
} from 'remotion';
import {useEffect, useState, useCallback} from 'react';

// Import {BarsMain} from './BarsMain';
// import {BarsNoYearMain} from './BarsNoYearMain';
// import {BlackBarMain} from './BlackBarMain';
// import {TextOnlyMain} from './TextOnlyMain';
// import {BalloonMain} from './BalloonTemplate/BalloonMain';
// import { ChalkboardMain } from './ChalkboardTemplate/ChalkboardMain';
import {ClassicColorMain} from './ClassicColorTemplate/ClassicColorMain';
// Import {ClassicNoLowerThirdMain} from './ClassicNoLowerThird';
// Import {ClassicMain} from './ClassicMain';
// import {ClassicColorBorderMain} from './ClassicColorBorderMain';

export const RemotionVideo = () => {
	const [handle] = useState(() => delayRender());
	const [totalTime, setTotalTime] = useState(1);

	const {id} = getInputProps();

	const fetchData = useCallback(async () => {
		await fetch(
			`https://clipping-platform-api-staging.azurewebsites.net/producer/remotion-preview/${id}`
		)
			.then((response) => response.json())
			.then((actualData) => {
				setTotalTime(actualData.remotionPreviewData.totalTime);
			})
			.catch((err) => {
				console.log(err.message);
			});
		continueRender(handle);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handle]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<>
			<Composition
				id="HelloWorld"
				component={ClassicColorMain}
				durationInFrames={totalTime}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
