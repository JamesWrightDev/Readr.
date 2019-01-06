<template>
<div class="text-xs-center">
            <v-dialog v-model="dialog" width="500">
                <v-btn fab fixed bottom right color="primary" slot="activator">
                    <v-icon dark>add</v-icon>
                </v-btn>

                <v-card>
                    <v-card-title class="headline primary" secondary-title>
                        Add Feed
                    </v-card-title>

                    <v-divider></v-divider>
                    <form class='pa-5'>
                        <v-text-field v-model="new_feed.feed_url" label="RSS Feed" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                        <v-btn class="secondary" @click="submit">Add Feed</v-btn>
                    </form>
                    <v-alert :value="error" type="error">Feed not valid</v-alert>
                </v-card>
                
            </v-dialog>
            <button></button>
        </div>
    
</template>
<script>
import EventBus from '../event-bus.js';
export default {
    data(){
        return{
            dialog:'',
            error:false,
            new_feed:{
                'feed_url': '',
            }
        }
    },
    methods:{
        
        submit(){         
            this.axios.post('http://127.0.0.1:8000/api/feed/new', this.new_feed).then((response) => {
                console.log(response);
                this.dialog = false;
                this.new_feed.feed_url='';
                EventBus.$emit('refreshfeed');
                this.error = false; 
            }).catch((error) =>{
                console.log(error);
                this.error = true;
                this.new_feed.feed_name ='';
                this.new_feed.feed_url='';
            });
            
        }
    }
    
}
</script>
<style>

.headline{
    color: white;
    margin-bottom: 0;
}
</style>

