<script lang="ts">
	import Nested from "./components/Nested.svelte";
	import Teacher from "./components/Teacher.svelte";
	export let name: string;
	export let count: number;
	const handleClick = () => count++;
	$: doubled = count * 2;
	$: if (count >= 10) {
		alert(`${count}でリセットします!!`);
		count = 0;
	}
	export let img: string;
	export let htmlStrongText: string;
	export let numbers: number[];
	const addNumber = () => (numbers[numbers.length] = numbers.length + 1);
	$: sum = numbers.reduce((t, n) => t + n, 0);
	// 型定義ファイルを作ってインポートできるか要検討
	type teacherType = {
		name: String;
		age: number;
		subject: String;
		homeroomTeacherFlag: Boolean;
	};
	export let teacher: teacherType;
</script>

<main class="wrapper">
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<div>
		<h2>1.Introduction</h2>
		<img src={img} alt="DummyImg..." />
		<Nested propsText={"PropsText"} propsNo={1} />
		<p>{@html htmlStrongText}</p>
		<button on:click={handleClick}>
			{count}
		</button>
		<p>{count} doubled is {doubled}</p>
	</div>
	<div>
		<h2>2.Reactivity</h2>
		<p>{numbers.join(" + ")} = {sum}</p>
		<button on:click={addNumber}> Add a number </button>
	</div>
	<div>
		<Teacher
			teacherName={teacher.name}
			teacherAge={teacher.age}
			teacherSubject={teacher.subject}
		/>
	</div>
</main>

<style>
	.wrapper {
		text-align: center;
		padding: 1em;
		max-width: 1100px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
