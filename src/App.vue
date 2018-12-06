<template>
    <v-app>
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
        <!-- Add Button -->
        <v-btn fab dark color="primary" slot="activator">
            <v-icon dark>add</v-icon>
        </v-btn>

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
                    v-for="(item,i) in 4"
                    :key="i"
                  >
                    <div slot="header">Group {{i + 1}}</div>
                    <v-card>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
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
        <v-container>
          <v-flex xs12 md6>
            <v-card color="white" class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Unlimited music now</div>
                  <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
        


        <div class="text-xs-center">
            <v-dialog v-model="dialog" width="500">
                <v-btn fab dark color="primary" slot="activator">
                    <v-icon dark>add</v-icon>
                </v-btn>

                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        Add new Feed
                    </v-card-title>

                    <v-divider></v-divider>
                    <form class='pa-5'>
                        <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                        <v-text-field v-model="email" :error-messages="emailErrors" label="RSS Feed" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                        <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Group" required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>

                        <v-btn @click="submit">Add Feed</v-btn>
                    </form>

                </v-card>
            </v-dialog>
        </div>
    
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data() {
            return {
                drawer: null,
            }
        }
    }
</script>