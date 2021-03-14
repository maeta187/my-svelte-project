<script>
  import { createEventDispatcher } from "svelte";
  // svelteからcreateEventDispatcherをインポートすることでdispatchが使えるようになる
  const dispatch = createEventDispatcher();

  // dispatchの第一引数は親コンポーネントのon:のイベント属性とリンクさせる必要がある
  // 今回の場合はsayHelloを親コンポーネントへ渡している
  const sayHello = () => {
    dispatch("sayHello", {
      text: "Hello!",
    });
  };
</script>

<button on:click={sayHello}> Click to say hello </button>
