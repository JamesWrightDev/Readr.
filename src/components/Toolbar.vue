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
            <v-list class="pa-0" >
                <!-- User Info -->

                <!-- Feed List -->
                <v-subheader inset>Feeds</v-subheader>
                <template v-for="item in feed_list" >
                    <feed-source-item :key="item.feed_id" :feed_id="item.feed_id" :feed_name="item.feed_name"></feed-source-item>
                </template>
                <v-subheader inset>
                    <v-btn outline small color=primary fab depressed>
                        <v-icon>edit</v-icon>
                    </v-btn>
                </v-subheader>
            <v-dialog
                v-model="dialog"
                width="500"
                >
                <v-btn
                outline 
                small 
                color=primary 
                fab 
                depressed
                slot="activator"
                dark>
                    <v-icon>edit</v-icon>
                </v-btn>
            

            <v-card>
                <v-card-title
                class="headline primary lighten-2"
                primary-title
                >
                Edit Feeds
                </v-card-title>

                <v-card-text>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    flat
                    @click="dialog = false"
                >
                    I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
                drawer: false,
            }
        },
        methods:{
            emitGlobalClickEvent (params){
                EventBus.$emit('refreshfeed');
            },
            emitGlobalClick (params){
                console.log(this.feed);
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
