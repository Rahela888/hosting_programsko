<template>
  <div class="chests-container">
    <div class="form">
    <h1>Your Chests</h1>
    <div class="chests-grid">
      <div class="chest" v-for="(chest, index) in chests" :key="index">
        <img 
          :src="chestImage" 
          alt="Chest"
          @mouseover="hoveredChest = index"
          @mouseleave="hoveredChest = null"
          class="chest-icon"
        >
        <div v-if="hoveredChest === index" class="tooltip">
          <h3>Chest at: {{ chest.location }}</h3>
          
          <!-- Food section -->
          <div v-if="hasItems(chest.food)">
            <h4>Food:</h4>
            <ul>
              <li v-for="itemData in getItemsWithQuantity(chest.food)" :key="itemData.name">
                {{ formatItemName(itemData.name) }}: {{ itemData.quantity }}
              </li>
            </ul>
          </div>
          
          <!-- Gems section -->
          <div v-if="hasItems(chest.gems)">
            <h4>Gems:</h4>
            <ul>
              <li v-for="itemData in getItemsWithQuantity(chest.gems)" :key="itemData.name">
                {{ formatItemName(itemData.name) }}: {{ itemData.quantity }}
              </li>
            </ul>
          </div>
          
          <!-- Fish section -->
          <div v-if="hasItems(chest.fish)">
            <h4>Fish:</h4>
            <ul>
              <li v-for="itemData in getItemsWithQuantity(chest.fish)" :key="itemData.name">
                {{ formatItemName(itemData.name) }}: {{ itemData.quantity }}
              </li>
            </ul>
          </div>
          
          <!-- Fertilizer section -->
          <div v-if="hasItems(chest.fertilizer)">
            <h4>Fertilizer:</h4>
            <ul>
              <li v-for="itemData in getItemsWithQuantity(chest.fertilizer)" :key="itemData.name">
                {{ formatItemName(itemData.name) }}: {{ itemData.quantity }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChestsPage',
  data() {
    return {
      chests: [],
      hoveredChest: null,
      chestImage: require('@/assets/veliki_chest.png') // Slika iz assets-a
    }
  },
  mounted() {
    this.loadChests();
  },
  methods: {
    loadChests() {
      try {
        // Čitanje iz browser storagea (samo frontend!)
        const savedChests = JSON.parse(localStorage.getItem('chests'));
        this.chests = savedChests || [];
      } catch (e) {
        console.error("Error loading chests:", e);
        this.chests = [];
      }
    },
    hasItems(category) {
      // Provjera ima li stavki s količinom > 0 (samo frontend!)
      return category && Object.values(category).some(quantity => quantity > 0);
    },
    formatItemName(item) {
      // Formatiranje imena (npr. "pink_cake" → "Pink Cake")
      return item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    },
    getItemsWithQuantity(category) {
      // Vraća niz objekata { name, quantity } za sve stavke s količinom > 0
      if (!category || typeof category !== 'object') return [];
      return Object.entries(category)
        .filter(([_, quantity]) => quantity > 0)
        .map(([name, quantity]) => ({ name, quantity }));
    }
  }
}
</script>

<style scoped>
.chests-container {
  background-image: url('@/assets/pozadina_svega.png');
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
}

.chests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.chest {
  position: relative;
  text-align: center;
   
}
.form {
background-color:#FFAB56;
  border-radius: 20px;
  padding: 100px;
  width: 500px;
  margin:auto ;
  margin-bottom:50px;
  margin-top:50px;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chest-icon {
    width: 100px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s;
  cursor: pointer;
  transition: transform 0.2s;
}

.chest-icon:hover {
  transform: scale(1.1);
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  min-width: 200px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 100;
  text-align: left;
}

.tooltip h3 {
  margin-top: 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.tooltip h4 {
  margin-bottom: 5px;
  color: #8b5a2b;
}

.tooltip ul {
  padding-left: 20px;
  margin: 0;
}

.tooltip li {
  margin-bottom: 3px;
}
</style>
