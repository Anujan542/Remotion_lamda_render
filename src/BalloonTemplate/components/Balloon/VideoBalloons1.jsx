import {
	interpolate,
	AbsoluteFill,
	spring,
	useVideoConfig,
	useCurrentFrame,
} from 'remotion';

import './balloonAnimation.css';

export const VideoBalloons1 = ({
	primaryColor,
	LeftBallooonmarginLeft,
	LeftBallooonmarginTop,
	RightBallooonmarginLeft,
	RightBallooonmarginTop,
	balloonSpeed,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame,
		config: {
			mass: 10,
			damping: 200,
		},
	});

	const opacity = interpolate(progress, [0, balloonSpeed], [100, 5], {
		extrapolateRight: 'clamp',
	});
	return (
		<>
			{/* Left Side */}
			<AbsoluteFill
				style={{
					marginLeft: `${LeftBallooonmarginLeft}rem`,
					marginTop: `${LeftBallooonmarginTop}rem`,
					transform: `translateY(${opacity}px)`,
				}}
			>
				<div
					className="ballonMovement"
					style={{
						width: '500px',
					}}
				>
					<svg
						xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
						xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
						xmlnsCc="http://creativecommons.org/ns#"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						xmlnsDc="http://purl.org/dc/elements/1.1/"
						xmlnsSvg="http://www.w3.org/2000/svg"
						xmlnsNs1="http://sozi.baierouge.fr"
						id="svg9513"
						sodipodiDocname="Neues Dokument 42"
						viewBox="0 0 206.42 311.54"
						version="1.1"
						inkscapeVersion="0.48.2 r9819"
					>
						<defs id="defs9515">
							<filter
								id="filter10115"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur10117"
									stdDeviation="6.4593426"
									inkscapeCollect="always"
								/>
							</filter>
							<linearGradient id="linearGradient9566" inkscapeCollect="always">
								<stop id="stop9568" style={{stopColor: 'white'}} offset="0" />
								<stop
									id="stop9570"
									style={{stopColor: 'white', stopOpacity: 0}}
									offset="1"
								/>
							</linearGradient>
							<filter
								id="filter9638"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur9640"
									stdDeviation="0.35428197"
									inkscapeCollect="always"
								/>
							</filter>
							<linearGradient
								id="linearGradient8217"
								y2="434.56"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="20.642"
								gradientTransform="translate(137.25 25.607)"
								y1="437.82"
								x1="116.24"
								inkscapeCollect="always"
							/>
							<filter
								id="filter9594"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur9596"
									stdDeviation="0.35636412"
									inkscapeCollect="always"
								/>
							</filter>
							<linearGradient
								id="linearGradient8219"
								y2="405.22"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="95.992"
								y1="471.16"
								x1="60.899"
								inkscapeCollect="always"
							/>
							<filter
								id="filter9622"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur9624"
									stdDeviation="1.4289761"
									inkscapeCollect="always"
								/>
							</filter>
							<radialGradient
								id="radialGradient8235"
								xlinkHref="#linearGradient9644"
								gradientUnits="userSpaceOnUse"
								cy="566.59"
								cx="-76.777"
								gradientTransform="matrix(.74973 .044666 -.032749 .65051 .27615 201.59)"
								r="9.4155"
								inkscapeCollect="always"
							/>
							<linearGradient id="linearGradient9644" inkscapeCollect="always">
								<stop id="stop9648" style={{stopColor: '#ea1211'}} offset="0" />
								<stop id="stop9646" style={{stopColor: '#a70100'}} offset="1" />
							</linearGradient>
							<linearGradient
								id="linearGradient8237"
								y2="489.65"
								xlinkHref="#linearGradient9644"
								gradientUnits="userSpaceOnUse"
								x2="41.922"
								y1="493.64"
								x1="42.492"
								inkscapeCollect="always"
							/>
							<radialGradient
								id="radialGradient8239"
								gradientUnits="userSpaceOnUse"
								cy="419.94"
								cx="124.49"
								gradientTransform="matrix(1.3633 .017324 -.023629 1.8594 -122.58 -360.96)"
								r="57.809"
								inkscapeCollect="always"
							>
								<stop id="stop9408" style={{stopColor: '#f30100'}} offset="0" />
								<stop id="stop9426" style={{stopColor: '#aa0100'}} offset="1" />
							</radialGradient>
							<linearGradient
								id="linearGradient8241"
								y2="440.36"
								xlinkHref="#linearGradient9576"
								gradientUnits="userSpaceOnUse"
								x2="46.092"
								y1="554.57"
								x1="41.483"
								inkscapeCollect="always"
							/>
							<linearGradient
								id="linearGradient8243"
								y2="404.21"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="231.64"
								gradientTransform="translate(-217.28 -7.2427)"
								y1="381.02"
								x1="228.16"
								inkscapeCollect="always"
							/>
							<linearGradient
								id="linearGradient8245"
								y2="434.56"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="20.642"
								y1="437.82"
								x1="116.24"
								inkscapeCollect="always"
							/>
						</defs>

						<g
							id="layer1"
							inkscapeLabel="Ebene 1"
							inkscapeGroupmode="layer"
							transform="translate(-536.79 -282.31)"
						>
							<g
								id="Ballons"
								transform="matrix(.73164 0 0 .73164 609.82 74.046)"
							>
								{/* <!-- label --> */}
								<g id="g9865" transform="translate(-.51213 -3.0728)">
									<path
										id="path9827"
										sodipodiNodetypes="ccccccccccccccccccccc"
										fill="url(#linearGradient8205)"
										inkscapeConnector-curvature="0"
										d="m48.911 684.29c4.3429 2.1731 12.702 6.3905 9.422 12.347-7.4226 3.1816-18.625 0.90342-23.336-6.2597-3.2884-5.194-6.0999-14.429-0.17214-18.72 4.1812-0.64866 8.7893-3.7148 3.0565-6.7807-6.9858-6.8524 7.6872-11.807 7.0419-17.048-1.4384-6.1846-8.898-10.62-6.6231-17.907 2.0134-6.5965 1.6874-13.693-1.9731-19.681-3.9614-7.5424-8.357-17.001-3.1911-25.112 5.0555-6.4403 8.7576-13.777 9.4559-22.059 3.6212-23.072 0.83735-46.402-1.4079-69.453-2.1064-4.242 2.4634-9.1351 3.4016-2.8686 4.697 26.251 6.991 53.574 1.265 79.85-0.7443 9.2322-11.879 12.714-12.91 21.837-0.52259 9.3027 6.4417 16.271 10.165 24.097 2.6728 6.1855-1.9836 10.881-0.5883 17.105 3.97 4.0676 10.529 10.796 7.5077 17.318-2.1541 4.3214-15.237 6.1942-8.6683 12.445 9.7277 7.9504-1.8673 11.05-5.3696 12.925-5.8753 12.988 29.312 20.511 17.901 12.183-1.6621-1.3837-3.5598-2.5719-4.9765-4.2161z"
									/>
									<path
										id="path9855"
										fill={primaryColor}
										style={{opacity: 0.97}}
										inkscapeConnector-curvature="0"
										d="m42.039 487.27c-1.3827 0.27646-2.6915 3.1925-1.375 5.8438 2.2453 23.05 5.0275 46.365 1.4062 69.438-0.69832 8.2824-4.382 15.622-9.4375 22.062-5.1659 8.111-0.77395 17.583 3.1875 25.125 3.6604 5.9879 3.9821 13.06 1.9688 19.656-2.2748 7.287 5.1866 11.753 6.625 17.938 0.64529 5.2413-14.017 10.179-7.0312 17.031 5.7327 3.066 1.1187 6.1326-3.0625 6.7812-5.9278 4.291-3.1321 13.525 0.15625 18.719 2.5089 3.8145 6.8606 6.2303 11.5 7.1875-3.8456-1.1862-7.3023-3.4412-9.4375-6.6875-3.2884-5.194-6.1153-14.428-0.1875-18.719 4.1812-0.64866 8.7952-3.7153 3.0625-6.7812-6.9858-6.8524 7.6765-11.79 7.0312-17.031-1.4384-6.1846-8.8686-10.619-6.5938-17.906 2.0134-6.5965 1.6604-13.7-2-19.688-2.8935-5.5091-5.9759-12.031-5.4375-18.312 0.19871-2.3185 0.85735-4.6259 2.25-6.8125 5.0555-6.4403 8.7704-13.749 9.4688-22.031 3.6212-23.072 0.83903-46.418-1.4062-69.469-1.0971-2.2094-0.38115-4.5748 0.6875-5.4688-0.40245-0.70291-0.88129-0.97371-1.375-0.875zm6.375 196.5c1.4167 1.6442 3.3067 2.835 4.9688 4.2188 4.2792 3.1231 1.9851 4.0373-2.2188 3.25 5.4071 1.4887 9.1861 0.88375 4.25-2.7188-1.2178-1.0138-2.5298-1.9398-3.7188-3-0.03317-0.0189-0.06063-0.0437-0.09375-0.0625-1.142-0.64803-2.2595-1.2232-3.1875-1.6875z"
									/>
								</g>

								{/* <!-- balloon node --> */}
								<g id="g9802">
									<path
										id="path9642"
										sodipodiRx="9.4154501"
										sodipodiRy="8.329052"
										fill="url(#radialGradient8235)"
										style={{color: 'black'}}
										//   Style="color:black;fill:url(#radialGradient8235)"
										sodipodiType="arc"
										d="m-63.735 567.47c0 4.6-4.2154 8.329-9.4154 8.329s-9.4154-3.729-9.4154-8.329 4.2154-8.329 9.4154-8.329 9.4154 3.729 9.4154 8.329z"
										transform="matrix(.53846 0 0 .49498 80.853 204.22)"
										sodipodiCy="567.46649"
										sodipodiCx="-73.150803"
									/>

									<path
										id="path9416"
										d="m100.82 411.84c0 38-27.101 70.598-58.32 70.598-31.22 0-57.065-33.11-57.296-71.11-0.25607-42.097 19.671-68.805 57.808-68.549 40.177 0.26972 57.808 31.061 57.808 69.061z"
										sodipodiNodetypes="sssss"
										fill={primaryColor}
										style={{color: 'black'}}
										// Style="color:black;fill:#567d2e"
										inkscapeConnector-curvature="0"
									/>
									<path
										id="path9574"
										sodipodiNodetypes="sssss"
										fill="url(#linearGradient8241)"
										style={{color: 'black'}}
										// Style="color:black;fill:url(#linearGradient8241)"
										inkscapeConnector-curvature="0"
										d="m100.82 411.84c0 38-27.101 70.598-58.32 70.598-31.22 0-57.065-33.11-57.296-71.11-0.25607-42.097 19.671-68.805 57.808-68.549 40.177 0.26972 57.808 31.061 57.808 69.061z"
									/>
									{/* <!-- top --> */}
									<path
										id="path9401"
										fill={primaryColor}
										style={{color: 'black'}}
										// Style="color:black;fill:#567d2e"
										inkscapeConnector-curvature="0"
										d="m43.388 342.43c-25.156-0.16888-42.381 11.402-51.125 31.375 14.382 4.6235 32.411 7.8748 52.094 8.9375 19.281 1.041 37.211-0.1781 51.844-3.0938-7.7503-21.986-24.78-37.031-52.813-37.219z"
									/>
									<path
										id="path9421"
										sodipodiRx="11.769313"
										sodipodiRy="14.666374"
										filter="url(#filter9559)"
										fill="white"
										style={{color: 'black', opacity: 0.4}}
										//  Style="opacity:.4;color:black;filter:url(#filter9559);fill:white"
										sodipodiType="arc"
										d="m238.65 402.88c0 8.1-5.2693 14.666-11.769 14.666-6.5 0-11.769-6.5664-11.769-14.666 0-8.1 5.2693-14.666 11.769-14.666 6.5 0 11.769 6.5664 11.769 14.666z"
										transform="matrix(1.4815 .32729 -.32729 1.4815 -185.25 -280.48)"
										sodipodiCy="402.87717"
										sodipodiCx="226.87614"
									/>
									<path
										id="rect9563"
										sodipodiNodetypes="cacacccac"
										filter="url(#filter9638)"
										fill="url(#linearGradient8243)"
										style={{color: 'black', opacity: 0.3}}
										//   Style="opacity:.3;color:black;filter:url(#filter9638);fill:url(#linearGradient8243)"
										inkscapeConnector-curvature="0"
										d="m9.0533 372.28s8.1797 3.4335 12.494 4.3456c4.3252 0.91452 13.218 1.0864 13.218 1.0864s-3.0131 9.4235-3.6213 14.304c-0.75382 6.0491 0 18.288 0 18.288h-13.942-13.942s-2.0041-12.731-1.0864-19.012c0.97435-6.6688 6.8805-19.012 6.8805-19.012z"
									/>
									<path
										id="path9584"
										sodipodiNodetypes="ccccsc"
										filter="url(#filter9594)"
										fill="url(#linearGradient8245)"
										style={{opacity: 0.5}}
										//     Style="opacity:.5;filter:url(#filter9594);fill:url(#linearGradient8245)"
										inkscapeConnector-curvature="0"
										d="m87.968 405.69 10.243-4.0971s4.1721 32.893-16.213 57.783c-19.102 24.592-47.292 21.085-47.292 21.085s23.712 0.47826 42.507-30.216c7.9785-13.03 10.755-44.556 10.755-44.556z"
									/>
									<path
										id="path9598"
										sodipodiNodetypes="ccccsc"
										filter="url(#filter9622)"
										fill="url(#linearGradient8219)"
										style={{opacity: 0.7}}
										//   Style="opacity:.7;filter:url(#filter9622);fill:url(#linearGradient8219)"
										d="m87.968 405.69 10.243-4.0971s4.1721 32.893-16.213 57.783c-19.102 24.592-47.292 21.085-47.292 21.085s23.712 0.47826 42.507-30.216c7.9785-13.03 10.755-44.556 10.755-44.556z"
										//    SodipodiNodetypes="ccccsc"
										inkscapeConnector-curvature="0"
										transform="matrix(-.76803 0 0 -.76803 64.352 715.27)"
									/>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</AbsoluteFill>

			{/* right side balloon */}
			<AbsoluteFill
				style={{
					marginLeft: `${RightBallooonmarginLeft}rem`,
					marginTop: `${RightBallooonmarginTop}rem`,
					transform: `translateY(${opacity}px)`,
				}}
			>
				<div
					className="ballonMovement"
					style={{
						width: '500px',
					}}
				>
					<svg
						xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
						xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
						xmlnsCc="http://creativecommons.org/ns#"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						xmlnsDc="http://purl.org/dc/elements/1.1/"
						xmlnsSvg="http://www.w3.org/2000/svg"
						xmlnsNs1="http://sozi.baierouge.fr"
						id="svg9513"
						sodipodiDocname="Neues Dokument 42"
						viewBox="0 0 206.42 311.54"
						version="1.1"
						inkscapeVersion="0.48.2 r9819"
					>
						<defs id="defs9515">
							<filter
								id="filter10115"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur10117"
									stdDeviation="6.4593426"
									inkscapeCollect="always"
								/>
							</filter>
							<linearGradient id="linearGradient9566" inkscapeCollect="always">
								<stop id="stop9568" style={{stopColor: 'white'}} offset="0" />
								<stop
									id="stop9570"
									style={{stopColor: 'white', stopOpacity: 0}}
									//  Style="stop-color:white;stop-opacity:0"
									offset="1"
								/>
							</linearGradient>
							<filter
								id="filter9638"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur9640"
									stdDeviation="0.35428197"
									inkscapeCollect="always"
								/>
							</filter>
							<linearGradient
								id="linearGradient8217"
								y2="434.56"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="20.642"
								gradientTransform="translate(137.25 25.607)"
								y1="437.82"
								x1="116.24"
								inkscapeCollect="always"
							/>
							<filter
								id="filter9594"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur9596"
									stdDeviation="0.35636412"
									inkscapeCollect="always"
								/>
							</filter>
							<linearGradient
								id="linearGradient8219"
								y2="405.22"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="95.992"
								y1="471.16"
								x1="60.899"
								inkscapeCollect="always"
							/>
							<filter
								id="filter9622"
								inkscapeCollect="always"
								colorInterpolationFilters="sRGB"
							>
								<feGaussianBlur
									id="feGaussianBlur9624"
									stdDeviation="1.4289761"
									inkscapeCollect="always"
								/>
							</filter>
							<radialGradient
								id="radialGradient8235"
								xlinkHref="#linearGradient9644"
								gradientUnits="userSpaceOnUse"
								cy="566.59"
								cx="-76.777"
								gradientTransform="matrix(.74973 .044666 -.032749 .65051 .27615 201.59)"
								r="9.4155"
								inkscapeCollect="always"
							/>
							<linearGradient id="linearGradient9644" inkscapeCollect="always">
								<stop id="stop9648" style={{stopColor: '#ea1211'}} offset="0" />
								<stop id="stop9646" style={{stopColor: '#a70100'}} offset="1" />
							</linearGradient>
							<linearGradient
								id="linearGradient8237"
								y2="489.65"
								xlinkHref="#linearGradient9644"
								gradientUnits="userSpaceOnUse"
								x2="41.922"
								y1="493.64"
								x1="42.492"
								inkscapeCollect="always"
							/>
							<radialGradient
								id="radialGradient8239"
								gradientUnits="userSpaceOnUse"
								cy="419.94"
								cx="124.49"
								gradientTransform="matrix(1.3633 .017324 -.023629 1.8594 -122.58 -360.96)"
								r="57.809"
								inkscapeCollect="always"
							>
								<stop id="stop9408" style={{stopColor: '#f30100'}} offset="0" />
								<stop id="stop9426" style={{stopColor: '#aa0100'}} offset="1" />
							</radialGradient>
							<linearGradient
								id="linearGradient8241"
								y2="440.36"
								xlinkHref="#linearGradient9576"
								gradientUnits="userSpaceOnUse"
								x2="46.092"
								y1="554.57"
								x1="41.483"
								inkscapeCollect="always"
							/>
							<linearGradient
								id="linearGradient8243"
								y2="404.21"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="231.64"
								gradientTransform="translate(-217.28 -7.2427)"
								y1="381.02"
								x1="228.16"
								inkscapeCollect="always"
							/>
							<linearGradient
								id="linearGradient8245"
								y2="434.56"
								xlinkHref="#linearGradient9566"
								gradientUnits="userSpaceOnUse"
								x2="20.642"
								y1="437.82"
								x1="116.24"
								inkscapeCollect="always"
							/>
						</defs>

						<g
							id="layer1"
							inkscapeLabel="Ebene 1"
							inkscapeGroupmode="layer"
							transform="translate(-536.79 -282.31)"
						>
							<g
								id="Ballons"
								transform="matrix(.73164 0 0 .73164 609.82 74.046)"
							>
								{/* <!-- label --> */}
								<g id="g9865" transform="translate(-.51213 -3.0728)">
									<path
										id="path9827"
										sodipodiNodetypes="ccccccccccccccccccccc"
										fill="url(#linearGradient8205)"
										inkscapeConnector-curvature="0"
										d="m48.911 684.29c4.3429 2.1731 12.702 6.3905 9.422 12.347-7.4226 3.1816-18.625 0.90342-23.336-6.2597-3.2884-5.194-6.0999-14.429-0.17214-18.72 4.1812-0.64866 8.7893-3.7148 3.0565-6.7807-6.9858-6.8524 7.6872-11.807 7.0419-17.048-1.4384-6.1846-8.898-10.62-6.6231-17.907 2.0134-6.5965 1.6874-13.693-1.9731-19.681-3.9614-7.5424-8.357-17.001-3.1911-25.112 5.0555-6.4403 8.7576-13.777 9.4559-22.059 3.6212-23.072 0.83735-46.402-1.4079-69.453-2.1064-4.242 2.4634-9.1351 3.4016-2.8686 4.697 26.251 6.991 53.574 1.265 79.85-0.7443 9.2322-11.879 12.714-12.91 21.837-0.52259 9.3027 6.4417 16.271 10.165 24.097 2.6728 6.1855-1.9836 10.881-0.5883 17.105 3.97 4.0676 10.529 10.796 7.5077 17.318-2.1541 4.3214-15.237 6.1942-8.6683 12.445 9.7277 7.9504-1.8673 11.05-5.3696 12.925-5.8753 12.988 29.312 20.511 17.901 12.183-1.6621-1.3837-3.5598-2.5719-4.9765-4.2161z"
									/>
									<path
										id="path9855"
										fill={primaryColor}
										style={{opacity: 0.97}}
										//  Style="opacity:0.97;fill:#f55"
										inkscapeConnector-curvature="0"
										d="m42.039 487.27c-1.3827 0.27646-2.6915 3.1925-1.375 5.8438 2.2453 23.05 5.0275 46.365 1.4062 69.438-0.69832 8.2824-4.382 15.622-9.4375 22.062-5.1659 8.111-0.77395 17.583 3.1875 25.125 3.6604 5.9879 3.9821 13.06 1.9688 19.656-2.2748 7.287 5.1866 11.753 6.625 17.938 0.64529 5.2413-14.017 10.179-7.0312 17.031 5.7327 3.066 1.1187 6.1326-3.0625 6.7812-5.9278 4.291-3.1321 13.525 0.15625 18.719 2.5089 3.8145 6.8606 6.2303 11.5 7.1875-3.8456-1.1862-7.3023-3.4412-9.4375-6.6875-3.2884-5.194-6.1153-14.428-0.1875-18.719 4.1812-0.64866 8.7952-3.7153 3.0625-6.7812-6.9858-6.8524 7.6765-11.79 7.0312-17.031-1.4384-6.1846-8.8686-10.619-6.5938-17.906 2.0134-6.5965 1.6604-13.7-2-19.688-2.8935-5.5091-5.9759-12.031-5.4375-18.312 0.19871-2.3185 0.85735-4.6259 2.25-6.8125 5.0555-6.4403 8.7704-13.749 9.4688-22.031 3.6212-23.072 0.83903-46.418-1.4062-69.469-1.0971-2.2094-0.38115-4.5748 0.6875-5.4688-0.40245-0.70291-0.88129-0.97371-1.375-0.875zm6.375 196.5c1.4167 1.6442 3.3067 2.835 4.9688 4.2188 4.2792 3.1231 1.9851 4.0373-2.2188 3.25 5.4071 1.4887 9.1861 0.88375 4.25-2.7188-1.2178-1.0138-2.5298-1.9398-3.7188-3-0.03317-0.0189-0.06063-0.0437-0.09375-0.0625-1.142-0.64803-2.2595-1.2232-3.1875-1.6875z"
									/>
								</g>

								{/* <!-- balloon node --> */}
								<g id="g9802">
									<path
										id="path9642"
										sodipodiRx="9.4154501"
										sodipodiRy="8.329052"
										fill="url(#radialGradient8235)"
										style={{color: 'black'}}
										//   Style="color:black;fill:url(#radialGradient8235)"
										sodipodiType="arc"
										d="m-63.735 567.47c0 4.6-4.2154 8.329-9.4154 8.329s-9.4154-3.729-9.4154-8.329 4.2154-8.329 9.4154-8.329 9.4154 3.729 9.4154 8.329z"
										transform="matrix(.53846 0 0 .49498 80.853 204.22)"
										sodipodiCy="567.46649"
										sodipodiCx="-73.150803"
									/>

									<path
										id="path9416"
										d="m100.82 411.84c0 38-27.101 70.598-58.32 70.598-31.22 0-57.065-33.11-57.296-71.11-0.25607-42.097 19.671-68.805 57.808-68.549 40.177 0.26972 57.808 31.061 57.808 69.061z"
										sodipodiNodetypes="sssss"
										fill={primaryColor}
										style={{color: 'black'}}
										// Style="color:black;fill:#567d2e"
										inkscapeConnector-curvature="0"
									/>
									<path
										id="path9574"
										sodipodiNodetypes="sssss"
										fill="url(#linearGradient8241)"
										style={{color: 'black'}}
										// Style="color:black;fill:url(#linearGradient8241)"
										inkscapeConnector-curvature="0"
										d="m100.82 411.84c0 38-27.101 70.598-58.32 70.598-31.22 0-57.065-33.11-57.296-71.11-0.25607-42.097 19.671-68.805 57.808-68.549 40.177 0.26972 57.808 31.061 57.808 69.061z"
									/>
									{/* <!-- top --> */}
									<path
										id="path9401"
										fill={primaryColor}
										style={{color: 'black'}}
										// Style="color:black;fill:#567d2e"
										inkscapeConnector-curvature="0"
										d="m43.388 342.43c-25.156-0.16888-42.381 11.402-51.125 31.375 14.382 4.6235 32.411 7.8748 52.094 8.9375 19.281 1.041 37.211-0.1781 51.844-3.0938-7.7503-21.986-24.78-37.031-52.813-37.219z"
									/>
									<path
										id="path9421"
										sodipodiRx="11.769313"
										sodipodiRy="14.666374"
										filter="url(#filter9559)"
										fill="white"
										style={{color: 'black', opacity: 0.4}}
										//  Style="opacity:.4;color:black;filter:url(#filter9559);fill:white"
										sodipodiType="arc"
										d="m238.65 402.88c0 8.1-5.2693 14.666-11.769 14.666-6.5 0-11.769-6.5664-11.769-14.666 0-8.1 5.2693-14.666 11.769-14.666 6.5 0 11.769 6.5664 11.769 14.666z"
										transform="matrix(1.4815 .32729 -.32729 1.4815 -185.25 -280.48)"
										sodipodiCy="402.87717"
										sodipodiCx="226.87614"
									/>
									<path
										id="rect9563"
										sodipodiNodetypes="cacacccac"
										filter="url(#filter9638)"
										fill="url(#linearGradient8243)"
										style={{color: 'black', opacity: 0.3}}
										//   Style="opacity:.3;color:black;filter:url(#filter9638);fill:url(#linearGradient8243)"
										inkscapeConnector-curvature="0"
										d="m9.0533 372.28s8.1797 3.4335 12.494 4.3456c4.3252 0.91452 13.218 1.0864 13.218 1.0864s-3.0131 9.4235-3.6213 14.304c-0.75382 6.0491 0 18.288 0 18.288h-13.942-13.942s-2.0041-12.731-1.0864-19.012c0.97435-6.6688 6.8805-19.012 6.8805-19.012z"
									/>
									<path
										id="path9584"
										sodipodiNodetypes="ccccsc"
										filter="url(#filter9594)"
										fill="url(#linearGradient8245)"
										style={{opacity: 0.5}}
										//     Style="opacity:.5;filter:url(#filter9594);fill:url(#linearGradient8245)"
										inkscapeConnector-curvature="0"
										d="m87.968 405.69 10.243-4.0971s4.1721 32.893-16.213 57.783c-19.102 24.592-47.292 21.085-47.292 21.085s23.712 0.47826 42.507-30.216c7.9785-13.03 10.755-44.556 10.755-44.556z"
									/>
									<path
										id="path9598"
										sodipodiNodetypes="ccccsc"
										filter="url(#filter9622)"
										fill="url(#linearGradient8219)"
										style={{opacity: 0.7}}
										//   Style="opacity:.7;filter:url(#filter9622);fill:url(#linearGradient8219)"
										d="m87.968 405.69 10.243-4.0971s4.1721 32.893-16.213 57.783c-19.102 24.592-47.292 21.085-47.292 21.085s23.712 0.47826 42.507-30.216c7.9785-13.03 10.755-44.556 10.755-44.556z"
										//    SodipodiNodetypes="ccccsc"
										inkscapeConnector-curvature="0"
										transform="matrix(-.76803 0 0 -.76803 64.352 715.27)"
									/>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</AbsoluteFill>
		</>
	);
};
