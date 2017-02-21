let env = 'snapshot';

process.argv.forEach((val) => {
	let arg = val.split('=');
	if (arg[0] && arg[1] && arg[0] === '--env') { env = arg[1]; }
});

let isProduction = env === 'production';

console.log(`Using ${env} configuration`);

module.exports = { env, isProduction };
