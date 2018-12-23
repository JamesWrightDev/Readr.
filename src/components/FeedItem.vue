<template>
    <v-layout justify-center="true">
        <v-flex xs12 md6 mt-3 mb-3>
             <v-card color="light darken-2">
              <v-card-title primary-title>
                <div>
                  <div class="headline secondary--text">{{title}}</div>
                  <span>{{description}}</span>
                </div>
              </v-card-title>
              
              <v-card-actions justify-center='true'>
                    <a :href='url' target="_blank"> <v-btn class='secondary' >Read More</v-btn></a>
              </v-card-actions>
            </v-card>
          </v-flex>
        
    </v-layout>
    
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props: ['title','description','url'],


}
</script>
<style>
.h1{
    font-size: 16px;
}
.headline{
    margin-bottom: 10px;
    
}
a{
    text-decoration: none;
}


</style>
