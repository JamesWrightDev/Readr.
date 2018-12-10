<template>
    <v-app>
       <tool-bar :feed_list='this.feed_list'></tool-bar>
        <v-container >
                   <feed-item v-for="item in feed" 
                   :title="item.title" 
                   :description="item.description" 
                   :url="item.link"></feed-item>

              </v-container>
              <add-feed></add-feed>
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
                feed_list: null,
            }
        },
        mounted () {
            this.axios.get('http://127.0.0.1:8000/api/feed').then((response) => {
                 let data = response.data[0];
                 this.feed = data.articles;
                 this.feed_list = data.feeds;
                 console.log(this);
                })
            }
    }
</script>
<style>

.v-card{

}
</style>
