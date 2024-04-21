<script setup lang="ts">
  import ChessBoard from './components/ChessBoard.vue'

  let selections: Ref<string[]> = ref([])
  function addSelection(square: string) {
    if(selections.value.indexOf(square) < 0) {
      let boardSquare = document.getElementById(square)
      selections.value.push(square)
      
      boardSquare.style.backgroundColor = theme.colors.highlighted
    }
  }
</script>

<template>
  <v-layout>
    <div id="chessboard-container" class="d-flex align-center justify-center">
      <ChessBoard id="chessboard" @select="addSelection" />
    </div>
  </v-layout>
</template>
