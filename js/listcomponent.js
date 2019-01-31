Vue.component('poke-list', {
    template: `
        <li class="poke-list-item" >
            <img :src="'https://serebii.net/pokedex-xy/icon/'+pokemon.number+'.png'" />
            <span>{{pokemon.number | pokeNumber}} - {{pokemon.name}}</span>
        </li>
    `,
    props: ['pokemon']
})