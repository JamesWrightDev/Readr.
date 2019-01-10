<template>
    <h1>app</h1>
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

                this.axios.get(url).then((response) => {

                    let data = response.data;
                    this.feed = data.articles;
                    console.log(response);
                    this.loading = false;
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

.v-card{

}
</style>
