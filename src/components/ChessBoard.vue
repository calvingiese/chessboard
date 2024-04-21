<script setup lang="ts">
  import { onMounted } from 'vue'
  import { theme } from '../plugins/vuetify'

  const emit = defineEmits(['select'])

  let rows = ['8', '7', '6', '5', '4', '3', '2', '1']
  let cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  onMounted(() => {
    colorSquares()
  })

  function colorSquares() {
    rows.forEach((row) => {
      cols.forEach((col) => {
        let square = document.getElementById(col + row)
        const isLightSquare = (rows.indexOf(row) + cols.indexOf(col)) % 2 === 0

        square.style.backgroundColor = isLightSquare ? theme.colors.lightSquare : theme.colors.darkSquare
        square.style.color = isLightSquare ? theme.colors.darkSquare : theme.colors.lightSquare
      })
    })
  }
</script>

<template>
  <div class="d-flex flex-column">
    <div v-for="row in rows" class="d-flex">
      <v-card v-for="col in cols" :id="col + row" class="d-flex flex-column fill-height rounded-0 square" @click="emit('select', col + row)" data-cy="square">
        <p class="d-flex square-labels mx-1">{{ col === 'a' ? row : '' }}</p>  
        <p class="d-flex align-end justify-end square-labels mx-1">{{ row === '1' ? col : '' }}</p>  
      </v-card>
    </div>
  </div>
</template>

<style>
  .square {
    width: 200px;
    aspect-ratio: 1;
  }

  .square-labels {
    height: 50%;
    font-weight: bold;
  }
</style>
  