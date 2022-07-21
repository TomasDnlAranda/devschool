import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';
import { FaBootstrap, FaReact, FaNodeJs, FaGithub, FaNpm, FaGitAlt } from 'react-icons/fa';

export const Icons = [
	{
		id: 1,
		name: 'HTML',
		icon: <AiFillHtml5 />,
		class: 'ifs__html',
	},
	{
		id: 2,
		name: 'CSS',
		icon: <IoLogoCss3 />,
		class: 'ifs__css',
	},
	{
		id: 3,
		name: 'BOOTSTRAP',
		icon: <FaBootstrap />,
		class: 'ifs__b',
	},
	{
		id: 4,
		name: 'GIT',
		icon: <FaGitAlt />,
		class: 'ifs__git',
	},
	{
		id: 11,
		name: 'NPM',
		icon: <FaNpm />,
		class: 'ifs__npm',
	},
	{
		id: 10,
		name: 'GITHUB',
		icon: <FaGithub />,
		class: 'ifs__github',
	},
	{
		id: 5,
		name: 'JAVASCRIPT',
		icon: <SiJavascript />,
		class: 'ifs__js',
	},
	{
		id: 6,
		name: 'REACT JS',
		icon: <FaReact />,
		class: 'ifs__react',
	},
	{
		id: 7,
		name: 'NODE JS',
		icon: <FaNodeJs />,
		class: 'ifs__node',
	},
	{
		id: 8,
		name: 'EXPRESS JS',
		icon: <SiExpress />,
		class: 'ifs__ex',
	},
	{
		id: 9,
		name: 'MONGO DB',
		icon: <SiMongodb />,
		class: 'ifs__mongo',
	},
];
