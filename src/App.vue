<template>
    <v-app>
       <tool-bar :feed_list='this.feed_list'></tool-bar>
        <v-container >
                    <v-layout v-if='loading' justify-center="true" align-center='true'>
                        <v-progress-circular indeterminate color="primary" size="64" width='6'></v-progress-circular>
                    </v-layout>
                   <feed-item v-for="item in feed" 
                        :title="item.title" 
                        :description="item.description" 
                        :url="item.link"
                        :date='item.date'
                        :outlet="item.outlet">
                   </feed-item>

              </v-container>
              <add-feed></add-feed>
    </v-app>
</template>

<script>
    import EventBus from './event-bus.js';
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
                loading: true,
            }
        },
        methods:{
            pullfeed: function() {
                this.loading = true;
                this.axios.get('http://127.0.0.1:8000/api/feed').then((response) => {
                    let data = response.data;
                    this.feed = data.articles;
                    this.feed_list = data.outlets;
                    console.log(response);
                    this.loading = false;
                })
            }
            
            },
        beforeMount () {
            this.pullfeed();
            
        },
        mounted (){
            EventBus.$on('refreshfeed', () => {
                this.pullfeed();
            });
             
        }
        
    }
</script>
<style>

.v-card{

}
</style>
