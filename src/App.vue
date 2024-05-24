<template>
  <header>
    <pv-toolbar class="toolbar">
      <template #start>
        <h1>Footballers</h1>
      </template>
      <template #center>
        <div class="spacer"></div>
      </template>
      <template #end>
        <div>
          <router-link v-for="item in items" :to="item.to" :key="item.label">
            <pv-button class="fb-button">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        { label: "Forwards", to: "/forwards" },
        { label: "Midfielders", to: "/midfielders" },
        { label: "Defenders", to: "/defenders" },
        { label: "Goalkeepers", to: "/goalkeepers" }
      ]
    }
  }
}
</script>
<style>
* {
  margin: 0;
  font-family: sans-serif;
}

header {
  display: block;
}

.toolbar {
  background-color: blueviolet;
  display: flex;
  padding: 20px;
}

h1 {
  color: white;
}

.spacer {
  width: 800px;

  @media (max-width: 1120px) {
    width: 100px;
  }
}

.fb-button {
  background-color: blueviolet;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  margin-right: 10px;
}

.fb-button:hover {
  background-color: rgb(163, 96, 225);
  cursor: pointer;
}
</style>
