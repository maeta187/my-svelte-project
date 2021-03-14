<script lang="ts">
  export let axis;

  // on:mousemove={handleMousemove} で呼ばれる関数
  // const handleMousemove = (event) => {
  //   axis.x = event.clientX;
  //   axis.y = event.clientY;
  // };
</script>

<!-- HTML要素内に直接書いて実行するパターン -->
<div
  class="mouse-move-area"
  on:mousemove={(e) => (axis = { x: e.clientX, y: e.clientY })}
>
  The mouse position is {axis.x} x {axis.y}
</div>

<!-- イベント発火させ、 script 内で実行するパターン -->

<!-- <div class="mouse-move-area" on:mousemove={handleMousemove}>
  <p>
    The mouse position is {axis.x} x {axis.y}
  </p>
</div> -->
<style>
  .mouse-move-area {
    width: 800px;
    padding: 100px 0;
    background: #bbf5ff;
    margin: 0 auto;
  }
</style>
