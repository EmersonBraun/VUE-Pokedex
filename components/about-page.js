Vue.component('about-page',{
    template:
    `
    <div>
        <router-link to="/"  class="back-button"  > &lt; </router-link>
    
        <div class="poke-profile" >
            <div>#{{ $route.params.number }} - {{pkm.name}}</div>
            <img class="poke-sprite" :src="'https://serebii.net/sunmoon/pokemon/'+$route.params.number+'.png'" />
        </div>
        
        <ul class="poke-types" >
            <li v-for="type in pkm.types" >
                <img :src="'https://serebii.net/pokedex-bw/type/'+type.name+'.gif'" />
            </li>   
        </ul>
        
        <table class="table col-md-6 offset-md-3" >
            <thead>
                <tr>
                    <th scope="col">Attack</th>
                    <th scope="col">Defense</th>
                    <th scope="col">Sp Atk</th>
                    <th scope="col">Sp Def</th>
                    <th scope="col">Speed</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ pkm.attack }}</td>
                <td>{{ pkm.defense }}</td>
                <td>{{ pkm.sp_atk }}</td>
                <td>{{ pkm.sp_def }}</td>
                <td>{{ pkm.speed }}</td>
            </tr>
            </tbody>
        </table>
        
    </div>
    `,
    data: function(){
        return {
            pkm: { types: [] }
        }
    },
    mounted: function(){
        PokeService.API.Pokemon.find(this.$route.params.number)
            .then(pokemon => { this.pkm = pokemon });
    }
})
