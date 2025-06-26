import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/manag',
    name: 'manag',
    component: () => import(/* webpackChunkName: "manage" */ '../views/Manag.vue')
  },
  {
  path:'/chest',
  name: 'chest',
  component: () => import(/* webpackChunkName: "chest" */ '../views/Chest.vue')
  },
  {
  path: '/cooking',
    name: 'cooking',
    component: () => import(/* webpackChunkName: "cooking" */ '../views/Cooking.vue')
  },

  {
path: '/fishing',
    name: 'fishing',
    component: () => import(/* webpackChunkName: "fishing" */ '../views/Fishing.vue')
  },

  {path: '/npcandrelationship',
    name: 'npcandrelationship',
    component: () => import(/* webpackChunkName: "npcandrelationship" */ '../views/NpcAndRelationship.vue')
  },
  
  {path: '/crafting',
    name: 'crafting',
    component: () => import(/* webpackChunkName: "crafting" */ '../views/Crafting.vue')
  },
  {path: '/quest',
    name: 'quest',
    component: () => import(/* webpackChunkName: "quest" */ '../views/Quest.vue')
  },
  
  {
    path:'/oceanfish',
    name:'oceanfish',
    component:()=> import(/* webpackChunkName: "oceanfish" */ '../views/OceanFish.vue')



  },

  {

     path:'/riverfish',
    name:'riverfish',
    component:()=> import(/* webpackChunkName: "riverfish" */ '../views/RiverFish.vue')


  },

{

 path:'/mountainfish',
    name:'mountainfish',
    component:()=> import(/* webpackChunkName: "riverfish" */ '../views/MountainFish.vue')

},

{

 path:'/desertfish',
    name:'desertfish',
    component:()=> import(/* webpackChunkName: "desertfish" */ '../views/DesertFish.vue')

},

{

path:'/gingerisland',
    name:'gingerisland',
    component:()=> import(/* webpackChunkName: "gingerisland" */ '../views/GingerIsland.vue')

},

{
  path: '/emily_opis',
  name: 'emily_opis',
  component: () => import(/* webpackChunkName: "emily_opis" */ '../views/ljudi_opisi/emily_opis.vue')
},
{
  path: '/haley_opis',
  name: 'haley_opis',
  component: () => import(/* webpackChunkName: "haley_opis" */ '../views/ljudi_opisi/haley_opis.vue')
},
{
  path: '/leah_opis',
  name: 'leah_opis',
  component: () => import(/* webpackChunkName: "leah_opis" */ '../views/ljudi_opisi/leah_opis.vue')
},
{
  path: '/maru_opis',
  name: 'maru_opis',
  component: () => import(/* webpackChunkName: "maru_opis" */ '../views/ljudi_opisi/maru_opis.vue')
},
{
  path: '/penny_opis',
  name: 'penny_opis',
  component: () => import(/* webpackChunkName: "penny_opis" */ '../views/ljudi_opisi/penny_opis.vue')
},
{
  path: '/abigail_opis',
  name: 'abigail_opis',
  component: () => import(/* webpackChunkName: "abigail_opis" */ '../views/ljudi_opisi/abigail_opis.vue')
},
{
  path: '/alex_opis',
  name: 'alex_opis',
  component: () => import(/* webpackChunkName: "alex_opis" */ '../views/ljudi_opisi/alex_opis.vue')
},
{
  path: '/elliot_opis',
  name: 'elliot_opis',
  component: () => import(/* webpackChunkName: "elliot_opis" */ '../views/ljudi_opisi/elliot_opis.vue')
},
{
  path: '/harvey_opis',
  name: 'harvey_opis',
  component: () => import(/* webpackChunkName: "harvey_opis" */ '../views/ljudi_opisi/harvey_opis.vue')
},
{
  path: '/sam_opis',
  name: 'sam_opis',
  component: () => import(/* webpackChunkName: "sam_opis" */ '../views/ljudi_opisi/sam_opis.vue')
},
{
  path: '/sebastian_opis',
  name: 'sebastian_opis',
  component: () => import(/* webpackChunkName: "sebastian_opis" */ '../views/ljudi_opisi/sebastian_opis.vue')
},
{
  path: '/shane_opis',
  name: 'shane_opis',
  component: () => import(/* webpackChunkName: "shane_opis" */ '../views/ljudi_opisi/shane_opis.vue')
},
{
  path: '/willy_opis',
  name: 'willy_opis',
  component: () => import(/* webpackChunkName: "willy_opis" */ '../views/ljudi_opisi/willy_opis.vue')
},
{
  path: '/wizard_opis',
  name: 'wizard_opis',
  component: () => import(/* webpackChunkName: "wizard_opis" */ '../views/ljudi_opisi/wizard_opis.vue')
},
{
  path: '/robin_opis',
  name: 'robin_opis',
  component: () => import(/* webpackChunkName: "robin_opis" */ '../views/ljudi_opisi/robin_opis.vue')
},
{
  path: '/demetrious_opis',
  name: 'demetrious_opis',
  component: () => import(/* webpackChunkName: "demetrious_opis" */ '../views/ljudi_opisi/demetrious_opis.vue')
},
{
  path: '/marnie_opis',
  name: 'marnie_opis',
  component: () => import(/* webpackChunkName: "marnie_opis" */ '../views/ljudi_opisi/marnie_opis.vue')
},
{
  path: '/pierre_opis',
  name: 'pierre_opis',
  component: () => import(/* webpackChunkName: "pierre_opis" */ '../views/ljudi_opisi/pierre_opis.vue')
},
{
  path: '/lewis_opis',
  name: 'lewis_opis',
  component: () => import(/* webpackChunkName: "lewis_opis" */ '../views/ljudi_opisi/lewis_opis.vue')
},
{
  path: '/linus_opis',
  name: 'linus_opis',
  component: () => import(/* webpackChunkName: "linus_opis" */ '../views/ljudi_opisi/linus_opis.vue')
},
{
  path: '/gus_opis',
  name: 'gus_opis',
  component: () => import(/* webpackChunkName: "gus_opis" */ '../views/ljudi_opisi/gus_opis.vue')
},
{
  path: '/pam_opis',
  name: 'pam_opis',
  component: () => import(/* webpackChunkName: "pam_opis" */ '../views/ljudi_opisi/pam_opis.vue')
},
{
  path: '/caroline_opis',
  name: 'caroline_opis',
  component: () => import(/* webpackChunkName: "caroline_opis" */ '../views/ljudi_opisi/caroline_opis.vue')
},
{
  path: '/kent_opis',
  name: 'kent_opis',
  component: () => import(/* webpackChunkName: "kent_opis" */ '../views/ljudi_opisi/kent_opis.vue')
},
{
  path: '/jodi_opis',
  name: 'jodi_opis',
  component: () => import(/* webpackChunkName: "jodi_opis" */ '../views/ljudi_opisi/jodi_opis.vue')
},

{

 path: '/story_zadaci',
  name: 'story_zadaci',
  component: () => import(/* webpackChunkName: "story_zadaci" */ '../views/zadaci/story_zadaci.vue')

},

{

 path: '/help_wanted',
  name: 'help_wanted',
  component: () => import(/* webpackChunkName: "help_wanted" */ '../views/zadaci/help_wanted.vue')

},

{

 path: '/special_orders',
  name: 'special_orders',
  component: () => import(/* webpackChunkName: "special_orders" */ '../views/zadaci/special_orders.vue')

},

{

 path: '/chesttype',
  name: 'chesttype',
  component: () => import(/* webpackChunkName: "chesttype" */ '../views/kovceg/ChestType.vue')

},


{

 path: '/malichest',
  name: 'malichest',
  component: () => import(/* webpackChunkName: "malichest" */ '../views/kovceg/MaliChest.vue')

},


{

 path: '/velikichest',
  name: 'velikichest',
  component: () => import(/* webpackChunkName: "velikichest" */ '../views/kovceg/VelikiChest.vue')

},

{

path: '/map',
  name: 'map',
  component: () => import(/* webpackChunkName: "map" */ '../views/kovceg/Map.vue')

},
{
path: '/chests',
  name: 'chests',
  component: () => import(/* webpackChunkName: "chests" */ '../views/kovceg/Chests.vue')
},

{

path: '/bombs',
  name: 'bombs',
  component: () => import(/* webpackChunkName: "bombs" */ '../views/CraftingOpis/Bombs.vue')

},

{

path: '/fences',
  name: 'fences',
  component: () => import(/* webpackChunkName: "fences" */ '../views/CraftingOpis/Fences.vue')

},

{

path: '/fertilizer',
  name: 'fertilizer',
  component: () => import(/* webpackChunkName: "fertilizer" */ '../views/CraftingOpis/Fertilizer.vue')

},

{

path: '/sprinklers',
  name: 'sprinklers',
  component: () => import(/* webpackChunkName: "sprinklers" */ '../views/CraftingOpis/Sprinklers.vue')

}
,
{

path: '/artisanequipment',
  name: 'artisanequipment',
  component: () => import(/* webpackChunkName: "artisanequipment" */ '../views/CraftingOpis/ArtisanEquipment.vue')

}
,

{

path: '/vegetablemedley',
  name: 'vegetablemedley',
  component: () => import(/* webpackChunkName: "vegetablemedley" */ '../views/kuhanje/VegetableMedley.vue')

},
{
path: '/spicyeeel',
  name: 'spicyeeel',
  component: () => import(/* webpackChunkName: "spicyeeel" */ '../views/kuhanje/SpicyEel.vue')

},

{path: '/bakedfish',
  name: 'bakedfish',
  component: () => import(/* webpackChunkName: "bakedfish" */ '../views/kuhanje/BakedFish.vue')},

  {path: '/bread',
  name: 'bread',
  component: () => import(/* webpackChunkName: "bread" */ '../views/kuhanje/Bread.vue')},


  {path: '/chocolatecake',
  name: 'chocolatecake',
  component: () => import(/* webpackChunkName: "chocolatecake" */ '../views/kuhanje/ChocolateCake.vue')},


{
path: '/completebreakfast',
  name: 'completebreakfast',
  component: () => import(/* webpackChunkName: "completebreakfast" */ '../views/kuhanje/CompleteBreakfast.vue')

},

{
path: '/fishtaco',
  name: 'fishtaco',
  component: () => import(/* webpackChunkName: "fishtaco" */ '../views/kuhanje/FishTaco.vue')

},

{
path: '/hashbrowns',
  name: 'hashbrowns',
  component: () => import(/* webpackChunkName: "hashbrowns" */ '../views/kuhanje/Hashbrowns.vue')

},

{
path: '/makiroll',
  name: 'makiroll',
  component: () => import(/* webpackChunkName: "makiroll" */ '../views/kuhanje/MakiRoll.vue')

},

{
path: '/omlet',
  name: 'omlet',
  component: () => import(/* webpackChunkName: "omlet" */ '../views/kuhanje/Omlet.vue')

},

{
path: '/pizza',
  name: 'pizza',
  component: () => import(/* webpackChunkName: "pizza" */ '../views/kuhanje/Pizza.vue')

},

{
path: '/pinkcake',
  name: 'pinkcake',
  component: () => import(/* webpackChunkName: "pinkcake" */ '../views/kuhanje/PinkCake.vue')

},

{
path: '/rhubarbpie',
  name: 'rhubarbpie',
  component: () => import(/* webpackChunkName: "rhubarbpie" */ '../views/kuhanje/RhubarbPie.vue')

},

{
path: '/salad',
  name: 'salad',
  component: () => import(/* webpackChunkName: "salad" */ '../views/kuhanje/Salad.vue')

},

{
path: '/cheesec',
  name: 'cheesec',
  component: () => import(/* webpackChunkName: "cheesec" */ '../views/kuhanje/CheeseC.vue')

}


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}





)

export default router
