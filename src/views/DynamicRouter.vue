<template>
    <div></div>
</template>

<script>
import axios from "axios"
export default {
    created () {
        const seed = this.$route.params.id;
        console.log(this.$route.params.id)
        axios.get(`https://randomuser.me/api/?seed=${seed}`)
            .then((res) => {
                console.log(res);
            })
    }
}
</script>
