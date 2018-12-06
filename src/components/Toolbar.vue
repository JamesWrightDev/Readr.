<template>
<div>
<v-toolbar dark color="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

            <v-toolbar-title class="white--text">FEED.Me</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>refresh</v-icon>
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
                 <v-expansion-panel>
                  <v-expansion-panel-content
                    v-for="(item,i) in 3"
                    :key="i"
                  >
                    <div slot="header">Group {{i + 1}}</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="item in items" :key="item.title" @click="">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
</div>
</template>
<script>
export default {
        data: function(){
            return{
                drawer: false
            }
        }
}
</script>
<style>


</style>
