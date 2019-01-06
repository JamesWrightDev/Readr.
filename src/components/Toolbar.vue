<template>
<div>
<v-toolbar dark color="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

            <v-toolbar-title class="white--text"></v-toolbar-title>

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
                <v-list-tile v-for="item in feed_list" :key="item.title" @click="">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item }}</v-list-tile-title>
                    </v-list-tile-content>
                        </v-list-tile>
                    </v-list>

            </v-list>

            
        </v-navigation-drawer>
</div>
</template>
<script>
import EventBus from '../event-bus.js';
export default {
        data: function(){
            return{
                drawer: false
            }
        },
        methods:{
            emitGlobalClickEvent (){
                EventBus.$emit('refreshfeed');
            }
        },
        props: ['feed_list'],
}
</script>
<style>


</style>
