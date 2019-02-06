Vue.component('home-page',{
    template:
    `
    <div>
        <input v-model="$parent.nameFilter" type="text" id="pokeFilter" placeholder="Search" maxlength="20" />
        <ul class="poke-list" >
            <poke-list v-for="item in $parent.pokeList" :pokemon="item" :key="item.number" ></poke-list>
        </ul>
    </div>
    `
})

