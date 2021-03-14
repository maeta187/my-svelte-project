<script lang="ts">
	import CatList from "./components/CatList.svelte";
	import Color from "./components/Color.svelte";
	import Events from "./components/Events.svelte";
	// import Inner from "./components/Inner.svelte";
	import Nested from "./components/Nested.svelte";
	import Outer from "./components/Outer.svelte";
	import Promis from "./components/Promis.svelte";
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

	// 型定義ファイルを作ってインポートできるか要検討
	type userType = {
		loggedIn: Boolean;
	};
	export let user: userType;
	const toggle = () => {
		user.loggedIn = !user.loggedIn;
	};
	export let num: number;
	// 型定義ファイルを作ってインポートできるか要検討
	type catType = {
		id: String;
		name: String;
	};
	export let cats: catType[];

	// 型定義ファイルを作ってインポートできるか要検討
	type colorType = {
		id: number;
		color: String;
	};
	export let colors: colorType[];
	const removeColor = () => {
		colors = colors.slice(1);
	};

	// 型定義ファイルを作ってインポートできるか要検討
	type axisType = {
		x: number;
		y: number;
	};
	export let axis: axisType;

	const handleMessage = (event) => {
		alert(event.detail.text);
	};
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
			homeroomTeacherFlag={teacher.homeroomTeacherFlag}
		/>
	</div>
	<div>
		{#if user.loggedIn}
			<button on:click={toggle}> Log out </button>
		{:else}
			<button on:click={toggle}> Log in </button>
		{/if}
		{#if num > 10}
			<p>{num} is greater than 10</p>
		{:else if 5 > num}
			<p>{num} is less than 5</p>
		{:else}
			<p>{num} is between 5 and 10</p>
		{/if}
	</div>
	<div>
		<CatList {cats} />
	</div>
	<div>
		<p>test</p>
		<button on:click={removeColor}> Remove first color </button>

		{#each colors as color}
			<Color current={color.color} />
		{/each}
	</div>
	<div>
		<Promis />
	</div>
	<div>
		<Events {axis} />
	</div>
	<div>
		<!-- on:sayHelloは子コンポーネントで呼ばれる -->
		<!-- <Inner on:sayHello={handleMessage} /> -->
		<!-- Innerで実行したイベントをOuter経由で呼ばれている -->
		<Outer on:sayHello={handleMessage} />
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
