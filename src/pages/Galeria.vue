<template>
    <main>

        <section class="container">
            <div class="filtro">
                <span>Filtro:</span>
                <button v-on:click="selectClassOne" :class="{active: activeOne}" >2º semestre</button>
                <button v-on:click="selectClassTwo" :class="{active: activetwo}">3º semestre</button>
            </div>
            <div class="galerias"> 
                <div class="galeria" v-for="(galeria, index) in galerias" :key="index" :class="galeria.classe ">
                    <img :src="galeria.thumb" :alt="galeria.title">
                    <a :href="'/user/' + index">{{galeria.title}}</a>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import apei from "../services/apei.js"
export default {

    name: 'Galeria',
    data(){
        return{
            galerias: [],
            classOne: false,
            active: false,
            activeOne: false,
            activetwo: false,
        }

    },
    mounted(){
        apei.get('/api.json').then(response => {
                this.galerias = response.data
            })
    },
    methods:{

            selectClassOne: function(){
                if(this.activeOne === true){
                    this.activeOne = false
                }else if(this.activeOne === false){
                    this.activeOne = true
                }
                for (var i = 0; i <= this.galerias.length; i++) {
                    if(this.galerias[i].classe =='b2'){
                        this.galerias[i].classe = 'hide2'
                    }
                    else{
                       if(this.galerias[i].classe =='hide2'){
                        this.galerias[i].classe = 'b2'
                    } 
                    }
                }
               

            },

            selectClassTwo: function(){
                if(this.activetwo === true){
                    this.activetwo = false
                }else if(this.activetwo === false){
                    this.activetwo = true
                }
                for (var i = 0; i <= this.galerias.length; i++) {
                    if(this.galerias[i].classe =='b1'){
                        this.galerias[i].classe = 'hide3'
                    }
                    else{
                       if(this.galerias[i].classe =='hide3'){
                        this.galerias[i].classe = 'b1'
                    } 
                    }
                }
               

            }
    },
}
</script>
<style scoped>
    .container{
        flex-direction: column;
    }
    .hide2{
        display: none !important;;
    }
    .hide3{
        display: none !important;;
    }
    .galerias{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 20px
    }
    .galeria{
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .galeria a{
        margin-top:10px;
        font-size: 16px;
        font-weight: 600;
    }
    .galerias img{
        width: 300px;
        box-shadow: 2px 2px 2px #ccc;
    }
    .filtro{
        padding:  20px 0;
    }
    .filtro label{
        margin-left: 10px;
    }
    .filtro button{
        color: #fff;
        padding: 5px;
        background: #FFB98B;
        border-radius: 5px;
        border: none;
        margin-left: 10px;
    }
    .filtro button.active{
        border: 1px solid #000;
    }
    main{
        align-items: flex-start;
        }
    @media (min-width: 700px){

        .galerias{
            flex-direction: row;
            flex-wrap: wrap;
        }
        .galeria{
            margin-left: 30px;
            width: 300px;
        }
        .galeria img{
            width: 100%;
        }
    }
</style>