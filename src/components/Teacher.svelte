<script lang="ts">
  export let teacherName;
  export let teacherAge;
  export let teacherSubject;
  export let homeroomTeacherFlag;
</script>

<p>先生のプロフィール</p>
<p>先生の名前は:{teacherName}</p>
<p>先生の年齢は:{teacherAge}</p>
<p>先生の担当教科は:{teacherSubject}</p>
{#if homeroomTeacherFlag}
  担当クラス有
{:else}
  担当クラス無
{/if}
