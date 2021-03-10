<template>
     <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="#" alt="#">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{this.reply.user.displayName}}@{{this.reply.user.username}}</h5>
        <p class="card-text">{{this.reply.content}}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  </div>

</template>
<script>
export default {
  props:['reply']
}
</script>