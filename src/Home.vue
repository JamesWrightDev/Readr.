<template>
    <v-app>
       <tool-bar :feed_list='this.feed_list'></tool-bar>

       <v-alert
      dismissible
      v-if="error"
      :value="true"
      type="error"
        >
        Error fetching feed, please try again.
        </v-alert>


        <v-container >
                    <v-layout v-if='loading' justify-center="true" align-center='true'>
                        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
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
        name: 'Home',
        components: {
          ToolBar,AddFeed, FeedItem
        },
        data() {
            return {
                drawer: null,
                feed:null,
                feed_list: null,
                loading: true,
                error: false
            }
        },
        methods:{
            pullfeed: function(params) {
                let id = params
                this.loading = true;
                let url = 'http://127.0.0.1:8000/api/feed/';
                console.log(url);

                this.axios.get(url).then((response) => {
                    console.log(response);
                    let data = response.data;
                    this.feed = data.articles;
                    this.feed_list = data.feeds;
                    this.loading = false;
                })
            },
            selectfeed: function(params){
                let id = params
                console.log(params);
                this.loading = true;
                let url = 'http://127.0.0.1:8000/api/feed/'+ params;
                console.log(url);

                this.axios.get(url)
                
                .then((response) => {
                    let data = response.data;
                    this.feed = data.articles;
                    console.log(response);
                    this.loading = false;
                })
                .catch((error)=>{
                    console.log(error);
                    this.loading = false;
                    this.error = true;
                })

            }
            
            },
        beforeMount () {
            this.pullfeed();
            
        },
        mounted (){
            EventBus.$on('refreshfeed', (params) => {
                this.pullfeed(params);
            });
             EventBus.$on('selectfeed', (params) => {
                this.selectfeed(params);
            });
        }
        
    }
</script>
<style>

.v-alert{
    margin: 0;
    border-color: red;

}
</style>
