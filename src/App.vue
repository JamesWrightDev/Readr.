<template>
    <v-app>
       <tool-bar></tool-bar>
        <v-container >
            <div v-for="item in feed">
                <feed-item :title="item.title" :description="item.description" :url="item.site_url"></feed-item>
            </div>
        </v-container>
    </v-app>
</template>

<script>
    import ToolBar from './components/Toolbar.vue'
    import FeedItem from './components/FeedItem.vue'
    import AddFeed from './components/AddFeed.vue'
    export default {
        name: 'App',
        components: {
          ToolBar,AddFeed, FeedItem
        },
        data() {
            return {
                drawer: null,
                feed:null,
            }
        },
        mounted () {
            this.axios.get('http://127.0.0.1:8000/api/feed').then((response) => {
                 this.feed = response.data;
                 console.log(this.feed);
            })
            }
    }
</script>
<style>

.v-card{

}
</style>
