import React from 'react';
import { Planet } from "react-planet";
// import 'react-planet/dist/react-planet.css';

const MyPlanet = () => {
    return (
        <Planet
			centerContent={
				<div
					style={{
						height: 100,
						width: 100,
						borderRadius: '50%',
						backgroundColor: '#1da8a4',
					}}
				/>
			}
			open
			autoClose
		>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>
			<div
				style={{
					height: 70,
					width: 70,
					borderRadius: '50%',
					backgroundColor: '#9257ad',
				}}
			/>
		</Planet>
    );
};

export default MyPlanet;