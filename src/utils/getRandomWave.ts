export default function getRandomWave (){
	const randomWave = Math.floor(Math.random() * 4)+1;
	return `images/waves/${randomWave}.svg`
}