<template>
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
    
</template>
<script>
export default {
    
}
</script>
