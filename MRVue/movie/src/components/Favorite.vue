<template>
<div>
    <div v-for="movie in favorite" :key="movie.id">
        {{movie}}

    </div></div>
</template>
<script>
export default {

props:['favorite']
}
</script>