<script setup lang="ts">
  import { theme } from './plugins/vuetify'
  import { onMounted, type Ref, ref } from 'vue'
  import ChessBoard from './components/ChessBoard.vue'
  import SelectionSummary from './components/SelectionSummary.vue'

  onMounted(() => {
    resize()
  })

  window.addEventListener("resize", resize)
  function resize() {
    resizeChessboardContainer()
    resizeChessboard()
    orientNavigation()
  }

  function resizeChessboardContainer() {
    let nav = document.getElementById('nav').className
    let navWidth = (document.getElementById('nav').offsetWidth) + 'px'
    const navIsOnRight = nav.includes('v-navigation-drawer--right')
    
    let container = document.getElementById('chessboard-container')
    container.style.width = navIsOnRight ? 'calc(100vw - 17px - ' + navWidth + ')' : '100vw'
    container.style.height = navIsOnRight ? '100vh' : 'calc(100vh - 400px)'
  }

  function resizeChessboard() {
    let container = document.getElementById('chessboard-container')

    const width = container.offsetWidth
    const height = container.offsetHeight
    const minLength = (width > height ? height : width) + 'px'

    let chessboard = document.getElementById('chessboard')
    chessboard.style.width = minLength
    chessboard.style.height = minLength
  }

  let isMobile = ref(false)
  function orientNavigation() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      isMobile.value = true
    }
  }

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
    <v-navigation-drawer id="nav" permanent :location="isMobile ? 'bottom' : 'right'" style="min-height: 400px;"> 
      <SelectionSummary id="selection-summary" :selections="selections" />
    </v-navigation-drawer>
    <div id="chessboard-container" class="d-flex align-center justify-center">
      <ChessBoard id="chessboard" @select="addSelection" />
    </div>
  </v-layout>
</template>
