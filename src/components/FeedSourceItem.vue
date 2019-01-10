<template>
 <v-list-tile @click="emitGlobalClick()">
     <v-list-tile-action>
              <v-icon color="grey">delete</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
        <v-list-tile-title>{{ feed_name }}</v-list-tile-title>
    </v-list-tile-content>
</v-list-tile>
    
</template>
<script>
import EventBus from '../event-bus.js';

export default {
    data(){
        return{
            
        }
    },
    props:['feed_id','feed_name'],
    methods:{
        emitGlobalClick (params){
            console.log(this.feed_id);
                EventBus.$emit('selectfeed', this.feed_id);
            }
    }
}
</script>
<style>


</style>
