const data = [
	{
		url: '/',
		title: 'Home',
	},
	{
		url: '/route66',
		title: 'Route66',
	},
	{
		url: '/custom',
		title: 'Custom',
		myProp: 'It worked!',
	},
	{
		url: '/customhook',
		title: 'CustomHook',
		myProp: 'It worked with hook!',
	},
	{
		url: "/htmlsafe",
		title: "HtmlSafe",
		myProp: "<script>It is HTML safe</script>"
	}
];

module.exports = () => data;
