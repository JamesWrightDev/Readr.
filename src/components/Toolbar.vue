<template>
<div>
<v-toolbar dark color="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
                <v-toolbar-title justify-center='true' class="logo justwhite--text">readr|</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon @click="emitGlobalClickEvent()">refresh</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
     </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>James Wright</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                
                <v-divider></v-divider>
                <!-- <feed-source-item></feed-source-item> -->
                <v-list-tile v-for="item in feed_list" :key="item.id" @click="">
                    <v-list-tile-action>
                        <v-icon >{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title @click="emitGlobalClick('39')">{{ item.feed_name }}</v-list-tile-title>
                    </v-list-tile-content>
                        </v-list-tile>
                    </v-list>

            </v-list>

            
        </v-navigation-drawer>
        <div
      id="scrolling-techniques"
      class="scroll-y"
      style="max-height: 600px;"
    >
    </div>
  </div>
</div>
</template>
<script>
import EventBus from '../event-bus.js';
import FeedSourceItem from './FeedSourceItem.vue';

export default {
        components: {
            FeedSourceItem
            },
        data: function(){
            return{
                drawer: false
            }
        },
        methods:{
            emitGlobalClickEvent (params){
                EventBus.$emit('refreshfeed');
            },
            emitGlobalClick (params){
                EventBus.$emit('selectfeed', params);
            }
        },
        props: ['feed_list'],
}
</script>
<style>
.logo{
    font-weight: 100;
    font-size: 3.2rem;
    letter-spacing: 0px;
    font-family: 'Share Tech Mono', monospace;
}


</style>
