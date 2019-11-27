<template>
    <div class="container">
        <article>
            <h1 class="title"> {{post.title}}</h1>
            <p>{{post.content}}</p>
        </article>
        <aside>
            <h3>Post you might enjoy</h3>
            <ul>
                <li v-for="related in relatedPosts">
                    <!-- <nuxt-link :to="`/posts/${related.id}`"> -->
                    <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">
                        {{related.title}}
                    </nuxt-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    head () {
        return {
            title: this.post.title,
            meta: [
                {name: 'twitter:title', content: this.post.title},
                {name: 'twitter:description', content: this.post.content}
            ]
        }
    },
    data () {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        post () {
            // return this.posts.find(post => post.id === this.id)
            return this.$store.state.posts.all.find(post => post.id === this.id)
        },
        relatedPosts () {
            return this.$store.state.posts.all.filter(post => post.id !== this.id)
        }

    }
    
}
</script>

<style scoped>

</style>