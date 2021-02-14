<script lang="ts">
  // Propsはデフォルト値も入れておける
  export let propsText: string;
  export let propsNo: number = 0;
</script>

<p>コンポーネントテキスト</p>
<p>{propsText}</p>
<p>{propsNo}</p>
