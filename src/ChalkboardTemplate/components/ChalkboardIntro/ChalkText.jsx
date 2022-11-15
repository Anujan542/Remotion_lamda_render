import {AbsoluteFill, useCurrentFrame} from 'remotion';

import '../../../components/fonts/Text.css';

export const ChalkText = ({
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
		<>
			<AbsoluteFill
				style={{
					alignItems: 'center',
					justifyContent: 'start',
					marginLeft,
				}}
			>
				<div
					style={{
						fontFamily: 'Source Sans Pro',
						fontSize: size,
						fontWeight,
						bottom,
						textAlign: 'center',
						position: 'absolute',
						color: titleColor,
						letterSpacing: '1px',
						padding: '0px 15px',
					}}
				>
					{textToShow}
				</div>
			</AbsoluteFill>
		</>
	);
};
