<template>
    <v-app>
       <v-container>
           <v-toolbar-title justify-center='true' class="logo text-xs-center mb-3">readr|</v-toolbar-title>
           <v-layout justify-center="true" align-center='true'>
               
            <v-flex xs12 md4>
                <v-card>
                    
                     <v-form
                        class='pa-5'
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        >
                        <!-- <h1 class='text-xs-center'>Sign In</h1> -->
                        <v-layout justify-center="true" align-center='true'>
                            <v-flex xs2>
                                <v-icon color="grey">person</v-icon>
                            </v-flex>
                            <v-flex xs11>
                                <v-text-field
                                    v-model="name"
                                    :counter="10"
                                    :rules="nameRules"
                                    label="Username"
                                    required
                                    >
                                    </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout justify-center="true" align-center='true'>
                            <v-flex xs2>
                                <v-icon color="grey">lock</v-icon>
                            </v-flex>
                            <v-flex xs11>
                                   <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        :type="show2 ? 'text' : 'password'"
                        label="Password"
                        required
                        ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-btn
                        block
                        :disabled="!valid"
                        color="primary"
                        @click="validate"
                        >
                        Login
                        </v-btn>
                    </v-form>
                </v-card>
            </v-flex>
           </v-layout>
           </v-container> 
    
    
                 
    </v-app>
</template>

<script>
    import EventBus from './event-bus.js';
   
   export default {
        name: 'Login',
        components: {
        },
        data() {
            return {
                valid: true,

            }
        },
    }
</script>
<style>

</style>
