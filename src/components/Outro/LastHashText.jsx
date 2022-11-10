import {AbsoluteFill, useCurrentFrame} from 'remotion';

import '../Intro/Text.css';

export const LastHashText = ({
	titleText,
	titleColor,
	bottom,
	size,
	marginLeft,
	time,
}) => {
	const frame = useCurrentFrame();

	const charsShown = Math.floor(frame / time);
	const textToShow = titleText.slice(0, charsShown);
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'start',
				marginLeft,
			}}
		>
			<div
				style={{
					fontFamily: 'Roboto',
					fontSize: size,
					fontWeight: 900,
					bottom,
					textAlign: 'center',
					position: 'absolute',
					color: titleColor,
				}}
			>
				{textToShow}
			</div>
		</AbsoluteFill>
	);
};
