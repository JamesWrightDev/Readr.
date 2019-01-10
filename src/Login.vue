<template>
    <v-app>
       <v-container>
           <v-layout justify-center="true" align-center='true'>
            <v-flex xs12 md4>
                <v-card>
                     <v-form
                        class='pa-5'
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        >
                        <v-icon color="grey">person</v-icon>
                        <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Username"
                        required
                        ></v-text-field>

                        <v-icon color="grey">lock</v-icon>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Password"
                        required
                        ></v-text-field>

                        <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                        ></v-checkbox>

                        <v-btn
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
