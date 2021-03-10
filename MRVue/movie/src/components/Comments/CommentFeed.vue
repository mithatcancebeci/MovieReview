<template>
    
<div>
    <CommentView v-for="reply in comments" :key="reply.id" :reply="reply" />
</div>

</template>



<script>

export default {
  props:['comments']
 }
</script>