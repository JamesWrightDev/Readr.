<template>
    <v-app>
       <tool-bar></tool-bar>
        <v-container>
          <v-flex xs12 md6>
            <v-card color="white" class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-container>
       <add-feed></add-feed>
    </v-app>
</template>

<script>
    import ToolBar from './components/Toolbar.vue'
    
    import AddFeed from './components/AddFeed.vue'
    export default {
        name: 'App',
        components: {
          ToolBar,AddFeed
        },
        data() {
            return {
                drawer: null,
            }
        }
    }
</script>