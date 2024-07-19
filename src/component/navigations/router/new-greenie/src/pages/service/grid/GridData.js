import DesignAndPrototype from "../servicesSVG/designAndPrototype/DesignAndPrototype";
import FullStackApp from "../servicesSVG/fullStackApp/FullStackApp";
import RotatedArrow from "../servicesSVG/rotatedArrow/RotatedArrow";
import Stacked from "../servicesSVG/stacked/Stacked";
import Tools from "../servicesSVG/tools/Tools";

const GridData = [
	{
		id: 1,
		header: "Full stack Application",
		desp: "Adopt Robust Web Solutions with compelling user experience on scalabe Full Stack Technology",
		nub: "01",
		image: <FullStackApp />,
	},
	{
		id: 2,
		header: "Build Databases",
		desp: "Adopt a data managemnet platform to take advantage of a scalable, high-performance, and customized architecture",
		nub: "02",
		image: <Stacked />,
	},
	{
		id: 3,
		header: "Design and Prototyping",
		desp: "Our design is concerned with delivering solutions that address pain points and needs.",
		nub: "03",
		image: <DesignAndPrototype />,
	},
	{
		id: 4,
		header: "Fix Bugs",
		desp: "Prevent bugs, reduce development costs and improve the performance of your software by leveraging test plans that evaluate and verify that your software does what it is supposed to do.",
		nub: "04",
		image: <Tools />,
	},
	{
		id: 5,
		header: "Continuous Maintenance",
		desp: " Keep both your current and legacy systems up to date…all the time…and all at a low risk to your business.",
		nub: "05",
		image: <RotatedArrow />,
	},
];

export default GridData;
