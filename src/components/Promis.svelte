<script lang="ts">
  const getExampleHtml = async () => {
    const res = await fetch("http://example.com");
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  };

  let promise = getExampleHtml();
</script>

<!-- 押して再実行しても意味がないので一旦コメントアウト -->
<!-- <button on:click={handleClick}> generate random number </button> -->

<!-- Promise実行時→Promiseの返りで表示を変更する場合 -->
<!-- {#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await} -->
{#await promise then value}
  <p>the value is {value.length}</p>
{/await}
