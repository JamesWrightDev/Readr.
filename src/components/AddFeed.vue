<template>
<div class="text-xs-center">
            <v-dialog v-model="dialog" width="500">
                <v-btn fab fixed bottom right color="primary" slot="activator">
                    <v-icon dark>add</v-icon>
                </v-btn>

                <v-card>
                    <v-card-title class="headline primary" primary-title>
                        Add Feed
                    </v-card-title>

                    <v-divider></v-divider>
                    <form class='pa-5'>
                        <v-text-field v-model="new_feed.name" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                        <v-text-field v-model="new_feed.feed_url" label="RSS Feed" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                        <v-btn class="secondary" @click="submit">Add Feed</v-btn>
                    </form>

                </v-card>
            </v-dialog>
        </div>
    
</template>
<script>
export default {
    data(){
        return{
            dialog:'',
            new_feed:{
                'name': '',
                'feed_url': '',
            }
        }
    },
    methods:{
        
        submit(){         
            this.axios.post('http://127.0.0.1:8000/api/feed/new', this.new_feed).then((response) => {
                console.log(response);
            }).catch((error) =>{
                console.log(error);
            });
            
        }
    }
    
}
</script>
