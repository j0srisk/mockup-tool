import { useState } from "react";

const GradientOptions = [
	"bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
	"bg-gradient-to-r from-blue-500 via-teal-500 to-green-500",
	"bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
	"bg-gradient-to-r from-blue-500 via-teal-500 to-green-500",
	"bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500",
	"bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
	"bg-gradient-to-r from-green-500 via-teal-500 to-blue-500",
	"bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500",
	"bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500",
	"bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500",
	"bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
	"bg-gradient-to-r from-blue-500 via-teal-500 to-green-500",
	"bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500",
	"bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
	"bg-gradient-to-r from-green-500 via-teal-500 to-blue-500",
	"bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500",
	"bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500",
	"bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500",
	"bg-gradient-to-r from-lime-500 via-yellow-500 to-amber-500",
	"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
	"bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500",
	"bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500",
	"bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500",
	"bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900",
	"bg-gradient-to-r from-rose-500 via-rose-800 to-rose-900",
	"bg-gradient-to-r from-amber-500 via-amber-700 to-amber-900",
	"bg-gradient-to-r from-purple-500 via-purple-800 to-purple-900",
	"bg-gradient-to-r from-cyan-500 via-cyan-700 to-cyan-900",
	"bg-gradient-to-r from-green-500 via-green-800 to-green-900",
	"bg-gradient-to-r from-yellow-500 via-yellow-800 to-yellow-900",
	"bg-gradient-to-r from-blue-500 via-blue-800 to-blue-900",
	"bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-900",
	"bg-gradient-to-r from-pink-500 via-pink-800 to-pink-900",
	"bg-gradient-to-r from-red-500 via-red-800 to-red-900",
	"bg-gradient-to-r from-orange-500 via-orange-800 to-orange-900",
	"bg-gradient-to-r from-amber-500 via-amber-800 to-amber-900",
	"bg-gradient-to-r from-yellow-500 via-yellow-800 to-yellow-900",
	"bg-gradient-to-r from-lime-500 via-lime-800 to-lime-900",
	"bg-gradient-to-r from-green-500 via-green-800 to-green-900",
	"bg-gradient-to-r from-emerald-500 via-emerald-800 to-emerald-900",
	"bg-gradient-to-r from-teal-500 via-teal-800 to-teal-900",
	"bg-gradient-to-r from-cyan-500 via-cyan-800 to-cyan-900",
	"bg-gradient-to-r from-lightBlue-500 via-lightBlue-800 to-lightBlue-900",
	"bg-gradient-to-r from-blue-500 via-blue-800 to-blue-900",
	"bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-900",
	"bg-gradient-to-r from-violet-500 via-violet-800 to-violet-900",
	"bg-gradient-to-r from-purple-500 via-purple-800 to-purple-900",
	"bg-gradient-to-r from-fuchsia-500 via-fuchsia-800 to-fuchsia-900",
	"bg-gradient-to-r from-pink-500 via-pink-800 to-pink-900",
	"bg-gradient-to-r from-rose-500 via-rose-800 to-rose-900",
	"bg-gradient-to-r from-gray-500 via-gray-800 to-gray-900",
	"bg-gradient-to-r from-coolGray-500 via-coolGray-800 to-coolGray-900",
	"bg-gradient-to-r from-trueGray-500 via-trueGray-800 to-trueGray-900",
	"bg-gradient-to-r from-warmGray-500 via-warmGray-800 to-warmGray-900",
];

function App() {
	const [url, setUrl] = useState("https://josephrisk.com");
	const [renderedUrl, setRenderedUrl] = useState("https://josephrisk.com");
	const [ratio, setRatio] = useState("16/9");
	const [backgroundIndex, setBackgroundIndex] = useState(
		Math.floor(Math.random() * GradientOptions.length),
	);
	const [noise, setNoise] = useState(null);
	const [image, setImage] = useState(null);

	function handleImageUpload(e) {
		const uploadedImage = e.target.files[0];
		setImage(URL.createObjectURL(uploadedImage));
	}

	function removeImage() {
		setImage(null);
	}

	function handleUrlChange(e) {
		setUrl(e.target.value);
	}

	function handleUrlBlur() {
		if (!url.includes("https://")) {
			setRenderedUrl("https://" + url);
			return;
		}
		setRenderedUrl(url);
	}

	const cycleGradient = () => {
		setBackgroundIndex((prevIndex) => (prevIndex + 1) % GradientOptions.length);
	};

	const randomGradient = () => {
		const randomIndex = Math.floor(Math.random() * GradientOptions.length);
		setBackgroundIndex(randomIndex);
	};

	function changeRatio(ratio) {
		if (ratio == "desktop") {
			setRatio("16/9");
		} else if (ratio == "tablet") {
			setRatio("4/3");
		} else if (ratio == "mobile") {
			setRatio("9/16");
		}
	}

	function toggleNoise() {
		if (noise == "") {
			setNoise("url(noise.webp)");
		} else {
			setNoise("");
		}
	}

	return (
		<div
			className={`relative flex h-screen w-screen flex-col items-center justify-center ${GradientOptions[backgroundIndex]} overflow-hidden`}
		>
			<div className="z-10 translate-y-5">
				<div
					className="z-10 flex aspect-video h-[860px] scale-[.66] flex-col gap-4 overflow-hidden rounded-[12px] border border-white border-opacity-40 bg-white bg-opacity-40 p-4 shadow-lg backdrop-blur-sm"
					style={{ aspectRatio: ratio }}
				>
					<div className="flex h-fit w-full gap-3">
						<div className="flex h-4 w-4 rounded-full bg-[#FF5F57]"></div>
						<div className="flex h-4 w-4 rounded-full bg-[#FEBC2E]"></div>
						<div className="flex h-4 w-4 rounded-full bg-[#29C740]"></div>
					</div>
					<div className="relative h-full w-full">
						<iframe
							src={renderedUrl}
							className="h-full w-full rounded-[6px]"
							scrolling="no"
						></iframe>
						{image && (
							<img
								src={image}
								className="absolute top-0 h-full w-full rounded-[6px] object-cover object-top"
							/>
						)}
					</div>
				</div>
			</div>
			<div className="absolute left-auto top-0 hidden items-center justify-between rounded-b-[12px] border-x border-b border-white border-opacity-40 bg-white bg-opacity-40 p-1 px-4 shadow-sm backdrop-blur-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					className="h-4 w-4 stroke-white "
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</div>
			<div className="absolute -top-11 left-auto z-20 flex  w-1/2 translate-y-11 items-center justify-between gap-2">
				<div className="flex h-11 w-fit gap-2 rounded-b-[12px] border-x border-b border-white border-opacity-40 bg-white bg-opacity-40 p-2 shadow-sm backdrop-blur-sm ">
					{image ? (
						<button
							onClick={removeImage}
							className="relative flex h-full items-center justify-center rounded-md border border-white border-opacity-40 px-2 shadow-sm"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								className="h-4 w-4 stroke-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
						</button>
					) : (
						<div className="relative flex h-full items-center justify-center rounded-md border border-white border-opacity-40 px-2 shadow-sm ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								className="h-4 w-4 stroke-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
								/>
							</svg>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageUpload}
								className="absolute left-0 top-0 h-full w-full rounded-md bg-red-400 opacity-0 "
							/>
						</div>
					)}
				</div>
				<div className="flex h-11 w-full flex-1 gap-2 rounded-b-[12px] border-x border-b border-white border-opacity-40 bg-white bg-opacity-40 p-2 shadow-sm backdrop-blur-sm ">
					<input
						className="flex-1 rounded-md border border-white border-opacity-40 bg-transparent px-2 text-sm text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40"
						value={url}
						onChange={handleUrlChange}
						onBlur={handleUrlBlur}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleUrlBlur();
								e.target.blur();
							}
						}}
					></input>
					<button
						className="rounded-md border border-white border-opacity-40 px-2 shadow-sm"
						id="desktop"
						onClick={() => changeRatio("desktop")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="h-4 w-4 stroke-white"
							onClick={() => changeRatio("desktop")}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
							/>
						</svg>
					</button>
					<button
						className="rounded-md border border-white border-opacity-40 px-2 shadow-sm"
						id="tablet"
						onClick={() => changeRatio("tablet")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="h-4 w-4 stroke-white"
							onClick={() => changeRatio("tablet")}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
							/>
						</svg>
					</button>
					<button
						className="rounded-md border border-white border-opacity-40 px-2 shadow-sm"
						id="mobile"
						onClick={() => changeRatio("mobile")}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="h-4 w-4 stroke-white"
							onClick={() => changeRatio("mobile")}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
							/>
						</svg>
					</button>
				</div>
				<div className="flex h-11 w-fit gap-2 rounded-b-[12px] border-x border-b border-white border-opacity-40 bg-white bg-opacity-40 p-2 shadow-sm backdrop-blur-sm ">
					<button
						className="flex w-24 items-center justify-center rounded-md border border-white border-opacity-40 px-2 shadow-sm"
						onClick={randomGradient}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="h-4 w-4 stroke-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
							/>
						</svg>
					</button>
					<button
						className="rounded-md border border-white border-opacity-40 px-2 shadow-sm"
						id="mobile"
						onClick={() => toggleNoise()}
					>
						{noise ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								className="h-4 w-4 stroke-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								className="h-4 w-4 stroke-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div
				className="absolute h-[860px] translate-y-5 scale-[.8] overflow-hidden rounded-[12px] border border-dashed border-white border-opacity-30 bg-opacity-10 bg-repeat p-2"
				style={{ aspectRatio: 16 / 9, backgroundImage: noise }}
			>
				<div className="h-full w-full"></div>
			</div>
		</div>
	);
}

export default App;
