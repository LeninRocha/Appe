<template>
    <header>
        <nav class="container">
            <a href="/">
                <img alt="wdev" id="logo" src="https://i.ibb.co/stMhwQh/sacasf-removebg-preview.png"/>
            </a>
            <img alt="Abrir menu" v-on:click="openMenu" id="menu-button" src="https://i.ibb.co/tzBD3qZ/2613915-burger-equals-menu-icon.png"/>
            <div id="menu-overlay" v-if="menuActive" v-on:click="closeMenu"></div>
            <div id="menu-items" :class="{active: menuActive}">
                <img alt="wdev" id="menu-logo" src="https://i.ibb.co/stMhwQh/sacasf-removebg-preview.png"/>
                <ul>
                    <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/galeria">Galeria</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/sobre">Sobre</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default{
        name: 'Header',
        data(){
            return{
                menuActive: false
            }
        },
        methods:{
            openMenu: function(){
                this.menuActive = true;
            },
            closeMenu: function(){
                this.menuActive = false;
            }
        }
    }
</script>

<style scoped>
    header{
        background-color: #FFB98B;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 3px 3px #ccc;
    }
    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #logo{
        width: 100px;
    }
    #menu-button{
        width: 30px;
    }
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background: #000;
        opacity: 0.8;
    }
    #menu-logo{
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: #FFB98B;
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    #menu-items.active{
        display: flex;
    }
    ul{
        list-style: none;
        text-align: center;
    }
    ul li{
        margin: 20px 0px;
    }
    ul li a{
        color: var(--color-text-light)
    }
    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }
        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }
        ul{
            display: flex;
            height: 60px;
            align-items: center;
        }
        ul li{
            margin: 0;
            margin-left: 10px;
        }
    }
</style>