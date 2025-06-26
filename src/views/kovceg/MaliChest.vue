<template>
  <div class="main-list">
    <div class="form">
    <h1>Put items in chest</h1>
      <h2>Food</h2>
    <div class="category-grid">
      <div v-for="item in foodItems" :key="item" class="item-card">
        <img :src="getImgUrl(item)" :alt="item" class="item-img">
        <div class="quantity-control">
          <button @click="decrement('food', item)" :disabled="chestData.food[item] <= 0">-</button>
          <input type="number" v-model.number="chestData.food[item]" min="0" max="999"
                 @input="validateQuantity('food', item)" :disabled="isInputDisabled('food', item)">
          <button @click="increment('food', item)" :disabled="chestData.food[item] >= 999 || isMaxReached('food', item)">+</button>
        </div>
      </div>
    </div>

    <h2>Gems</h2>
    <div class="category-grid">
      <div v-for="item in gemsItems" :key="item" class="item-card">
        <img :src="getImgUrl(item)" :alt="item" class="item-img">
        <div class="quantity-control">
          <button @click="decrement('gems', item)" :disabled="chestData.gems[item] <= 0">-</button>
          <input type="number" v-model.number="chestData.gems[item]" min="0" max="999"
                 @input="validateQuantity('gems', item)" :disabled="isInputDisabled('gems', item)">
          <button @click="increment('gems', item)" :disabled="chestData.gems[item] >= 999 || isMaxReached('gems', item)">+</button>
        </div>
      </div>
    </div>

    
    <h2>Fish</h2>
    <div class="category-grid">
      <div v-for="item in fishItems" :key="item" class="item-card">
        <img :src="getImgUrl(item)" :alt="item" class="item-img">
        <div class="quantity-control">
          <button @click="decrement('fish', item)" :disabled="chestData.fish[item] <= 0">-</button>
          <input type="number" v-model.number="chestData.fish[item]" min="0" max="999"
                 @input="validateQuantity('fish', item)" :disabled="isInputDisabled('fish', item)">
          <button @click="increment('fish', item)" :disabled="chestData.fish[item] >= 999 || isMaxReached('fish', item)">+</button>
        </div>
      </div>
    </div>

    
    <h2>Fertilizer</h2>
    <div class="category-grid">
      <div v-for="item in fertilizerItems" :key="item" class="item-card">
        <img :src="getImgUrl(item)" :alt="item" class="item-img">
        <div class="quantity-control">
          <button @click="decrement('fertilizer', item)" :disabled="chestData.fertilizer[item] <= 0">-</button>
          <input type="number" v-model.number="chestData.fertilizer[item]" min="0" max="999"
                 @input="validateQuantity('fertilizer', item)" :disabled="isInputDisabled('fertilizer', item)">
          <button @click="increment('fertilizer', item)" :disabled="chestData.fertilizer[item] >= 999 || isMaxReached('fertilizer', item)">+</button>
        </div>
      </div>
    </div>
    
    <button @click="do_mape" class="mapa">Map</button>
    <div v-if="totalItems > 0" class="added-info">
  Dodali ste {{ totalItems }}/{{ maxDistinctItems }} stvari
</div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodItems: [
        'roasted_hazelnuts', 'rice_pudding', 'fiddlehead_risotto', 'hot_pepper',
        'greentea', 'fried_calamari', 'cherry', 'farma_rucak', 'goat_cheese',
        'peach', 'spaghetti', 'pepperpoppers', 'beer', 'sashimi', 'cactusfruit',
        'maplebar', 'jagoda', 'joja', 'cali', 'ginger', 'truffle', 'wine',
        'krastavci', 'supermeal', 'truff', 'friedegg', 'khasoup', 'pomegranate',
        'coconut', 'snack', 'sugar', 'grape', 'ice_cream', 'omlet', 'salad',
        'sir_cvjetaca', 'pecena_riba', 'madley_hrana', 'cijeli_dorucak', 'fish_taco',
        'piza', 'hashbrowns', 'kruh', 'rhubarb_pie', 'maki_roll', 'cokoladna'
      ],
      gemsItems: [
        'aquamarine',
'ametist',
'magma',
'emerald',
'geode',
'ruby',
'prismatic_shard',
'jade',
'topaz',
'diamond',
'omni',
'frozen',

      ],
      fishItems: [
        'albacore', 
        'flounder', 
        'eel', 
        'tuna',
         'sardine', 
         'squid', 
         'lavaeel',
'octopus',
'lionfish',
'pufferfish',
'tilapia',
'sandfish',
'scorpionc',
'legend',
'bass',
'lingcod',
'bullhead',

      ],
      fertilizerItems: [
        'basic_gro', 'speed_gro', 'deluxe_gro', 'quality_gro'
      ],
      chestData: {
        food: {},
        gems: {},
        fish: {},
        fertilizer: {}
      },
      maxDistinctItems: 30,
      maxPerItem: 999
    }
  },
  computed: {
    totalItems() {
      // Calculate total distinct items with quantity > 0
      let count = 0;
      for (const category of ['food', 'gems', 'fish', 'fertilizer']) {
        for (const item in this.chestData[category]) {
          if (this.chestData[category][item] > 0) {
            count++;
          }
        }
      }
      return count;
    }
  },


  
  created() {
    // Load existing chestData from localStorage
    const savedChestData = JSON.parse(localStorage.getItem('chestData')) || {
      food: {},
      gems: {},
      fish: {},
      fertilizer: {}
    };

    // Initialize all items with 0, but keep existing values
    this.foodItems.forEach(item => {
      if (savedChestData.food[item] === undefined) {
        savedChestData.food[item] = 0;
      }
    });
    this.gemsItems.forEach(item => {
      if (savedChestData.gems[item] === undefined) {
        savedChestData.gems[item] = 0;
      }
    });
    this.fishItems.forEach(item => {
      if (savedChestData.fish[item] === undefined) {
        savedChestData.fish[item] = 0;
      }
    });
    this.fertilizerItems.forEach(item => {
      if (savedChestData.fertilizer[item] === undefined) {
        savedChestData.fertilizer[item] = 0;
      }
    });

    this.chestData = savedChestData;
  },
  methods: {
    getImgUrl(name) {
      return require(`@/assets/${name}.png`);
    },
    do_mape() {
      this.saveToLocalStorage();
      this.$router.push('/map');
    },
    saveToLocalStorage() {
      localStorage.setItem('chestData', JSON.stringify(this.chestData));
    },
    increment(category, item) {
      if (this.chestData[category][item] < this.maxPerItem && !this.isMaxReached(category, item)) {
        this.chestData[category][item]++;
        this.saveToLocalStorage();
      }
    },
    decrement(category, item) {
      if (this.chestData[category][item] > 0) {
        this.chestData[category][item]--;
        this.saveToLocalStorage();
      }
    },
    validateQuantity(category, item) {
      if (this.chestData[category][item] < 0) this.chestData[category][item] = 0;
      if (this.chestData[category][item] > this.maxPerItem) {
        this.chestData[category][item] = this.maxPerItem;
      }
      this.saveToLocalStorage();
    },
    isInputDisabled(category, item) {
      return this.chestData[category][item] === 0 && this.totalItems >= this.maxDistinctItems;
    },
    isMaxReached(category, item) {
      return this.totalItems >= this.maxDistinctItems && this.chestData[category][item] === 0;
    }
  }
}
</script>




<style scoped>
.main-list {
 background-image:url('@/assets/pozadina_svega.png');
background-size: cover;
background-position: center;
vertical-align: 100vh;
height: 100%;
width: 100vw;
display: flex;

flex-direction: column;
background-repeat: repeat-x;}

h1{
    font-size:50px;
    color:#80461B;
    text-align: center;
    font-family: Press Start 2P, sans-serif;
  }
  
.form{background-color: #FFAB56 !important;
  border-radius: 20px !important;
  padding: 100px !important;
  width: 700px !important;
  margin: auto !important;
  margin-bottom: 50px !important;
  margin-top: 50px !important;
  background-position: center !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important; }

h2 {
  
  font-size: 30px;
  color: #5a3921;
  margin: 24px 0 10px 0;
  text-align: center;
  background:#CD9148 !important ;
  width:350px !important;
  border-radius:20px;
  
 
  
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-bottom: 25px;
}


.quantity-control {
  display: flex;
  align-items: center;
  gap: 5px;
}
.quantity-control button {
  width: 26px;
  height: 26px;
  border: none;
  background-color: #b68a4e;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  transition: background 0.2s;
}
.quantity-control button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
.quantity-control input {
  width: 38px;
  height: 26px;
  text-align: center;
  border: 1px solid #b68a4e;
  border-radius: 5px;
  background: #fff;
}

.mapa{

 background-color: #974805;
    color: #FFAB56;
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 20px;
    cursor: pointer;
    width: 150px;
    font-size:25px;


}
</style>

