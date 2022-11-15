import {AbsoluteFill, useCurrentFrame} from 'remotion';

import '../../../components/fonts/Text.css';

export const BalloonText = ({
	titleText,
	titleColor,
	bottom,
	size,
	marginLeft,
	fontWeight,
	time,
	background,
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
						fontFamily: 'Oswald',
						fontSize: size,
						fontWeight,
						bottom,
						textAlign: 'center',
						position: 'absolute',
						color: titleColor,
						background,
						padding: '0px 15px',
						letterSpacing: '2px',
					}}
				>
					{textToShow}
				</div>
			</AbsoluteFill>
		</>
	);
};
