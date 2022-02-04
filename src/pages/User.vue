<template>
    <main>
        <section class="container">
            <div class="user">
                <img :src="users.thumb" :alt="users.title">
                <div class="perfil">
                    <span class="nome">Nome:  {{users.title}}</span>
                    <span class="tamanho">Tamanho:  {{users.tamanho}}</span>
                    <span class="idade">Idade  :</span>
                    <span class="turma">Turma: </span>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import apei from '../services/apei.js'
export default {
    name: "User",
    data(){
        return{
            users: []
        }

    },
    mounted(){
        apei.get('/api.json').then(response => {
                var parametro = this.$route.params.id
                this.users = response.data[parametro]
                console.log(response.data[parametro])
                
            })
    }
}
</script>

<style scoped>
    main{
        align-items: flex-start;
    }
    .user{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 30px
    }
    .perfil{
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin: 30px
    }
    .user img{
        width: 320px;

    }
    @media (min-width: 700px){
        .user img{
            width: 500px;
        }
         .user{
             flex-direction: row;
         }
    }
</style>