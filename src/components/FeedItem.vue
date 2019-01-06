<template>
    <v-layout justify-center="true">
        <v-flex xs12 md6 mt-2 mb-0>
            <a :href="url" target="_blank">
                <v-card color="light darken-2">
                    <v-card-title primary-title>
                 <div>
                 <div class="h1"><a class='h1' :href='url'>{{title}}</a></div>
                  <span class='p'>{{description}} </span>
                  <v-divider></v-divider>
                  <v-chip color='primary' text-color="white">{{outlet}}</v-chip>
                  <v-chip outline>{{date}}</v-chip>                
                </div>
              </v-card-title>
            </v-card></a>
          </v-flex>
        
    </v-layout>
    
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props: ['title','description','url', 'outlet', 'date'],


}
</script>
<style>
.h1{
    font-size: 21px;
    color: primary;
    font-weight: 600;
}
.p{
    color: #9e9e9e;
}
.headline{
    font-size: 21px;
    margin-bottom: 10px;
    
}
a{
    text-decoration: none;
}
a:visited{
    color: grey;
}

.v-divider{
    margin: 20px 0 10px 0;
}

</style>
