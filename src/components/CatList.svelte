<script lang="ts">
  // 型定義ファイルを作ってインポートできるか要検討
  type catType = {
    id: String;
    name: String;
  };
  export let cats: catType[];
</script>

<ul>
  {#each cats as cat, i}
    <li class="cat-list">
      <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
        {i + 1}: {cat.name}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  .cat-list {
    margin-top: 8px;
  }

  .cat-list:first-child {
    margin-top: 0;
  }
</style>
