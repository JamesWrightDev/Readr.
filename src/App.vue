<template>
    <v-app>
       <tool-bar></tool-bar>
        <v-container >
          
                <feed-item></feed-item>
                
     
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
            }
        }
    }
</script>
<style>

.v-card{

}
</style>
