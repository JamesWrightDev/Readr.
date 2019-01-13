<template>
    <v-app>
        <v-container>
            <v-layout column class="mb-5 mt-5">
                <h1>READR.</h1>
            <h3>Your <span class='strike-through'><span class='black-strike'>fake</span></span> news.</h3>
            </v-layout>
            
            <v-layout wrap justify-center="true" class="mt-5">                    
                    <v-flex>
                        <v-layout >
                        <v-flex class="mb-5">
                            <v-btn flat large class="primary" to="/register">Register</v-btn>
                            <v-btn small flat class="" fob to="/login">Sign In</v-btn>
                        </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex>
                        <img class='screen mb-5' src="./assets/screen.png" alt="">
                    </v-flex>
                </v-layout>
        </v-container>

     
    </v-app>
</template>

<script>
    import EventBus from './event-bus.js';
    import router from './router'
   
   export default {
        name: 'Home',
        components:{
            
        }
   }
</script>
<style>

h1{
    font-size: 6em;
}

h3{
    font-size: 3em;

}

h1, h3{
    font-family: futura;
    line-height: 100px;
}
.strike-through {
    text-decoration: line-through;
    color: black;
    
}
.black-strike{
    color: #FF2857; 
    
}
.screen{
    width: 250px;
    border-radius: 10px;
}
p{
    color: white;
}


@media (min-width: 650px){
    h1{
        font-size: 12em;
        
    }
    h3{
        font-size: 6em;
    }
    
}

</style>
