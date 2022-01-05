<script context="module">
	export const load = async ({ error, status }) => ({
		props: {
			title: `${status}: ${error.message}`
		}
	});
</script>

<script>
	export let title;
</script>

<h1>{title}</h1>
<h2><a href="/">Go to home page</a></h2>

<style>
	h1, h2 {
		text-align: center;
	}

	a {
		text-decoration: underline;
		color: #000;;
	}
</style>