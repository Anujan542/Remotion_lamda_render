import {AbsoluteFill, useCurrentFrame} from 'remotion';

import '../../../components/fonts/Text.css';

export const BalloonLastText = ({
	titleText,
	titleColor,
	bottom,
	size,
	marginLeft,
	fontWeight,
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
					fontFamily: 'Lora',
					fontStyle: 'normal',
					fontSize: size,
					fontWeight,
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
