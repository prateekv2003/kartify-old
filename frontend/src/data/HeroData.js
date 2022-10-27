import ConnectionSVG from '../images/Connection.svg'
import ChartUp from '../images/ChartUp.svg'
export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Founded in 2012',
	},
	headline: "We've been in business for 9 years",
	description: 'We have designed and implemented the best cloud security solutions',
	buttonLabel: 'Get Started',
	imgStart: 'start',
	img: './assets/svg/Deal.svg',
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Designed & Developed',
	},
	headline: 'The best practices',
	description: 'Our clients have had the best experience working with us',
	buttonLabel: 'View Products',

	linkTo: '/more',
	imgStart: 'start',
	img: ConnectionSVG,
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Highly reputed brand',
	},
	headline: 'Why us? ',
	description:
		'Our experience has allowed us to use the most innovative technologies and methodologies',
	buttonLabel: 'Get Started',

	linkTo: '/download',
	imgStart: '',
	img: ChartUp,
	start: 'true',
};
