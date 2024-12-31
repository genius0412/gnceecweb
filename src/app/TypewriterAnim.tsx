"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";


export default function TextAnim(props: any) {
	const baseText = props.text as string;
	const animDelay = props.delay as number;
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) =>
		baseText.slice(0, latest)
	);

	useEffect(() => {
		const controls = animate(count, baseText.length, {
			type: "tween",
			duration: 1,
			ease: "easeInOut",
			delay: animDelay,
		});
		return controls.stop;
	}, []);

	return (
		<span className="">
			<motion.span>{displayText}</motion.span>
		</span>
	);
}
