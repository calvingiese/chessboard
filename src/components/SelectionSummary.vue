<script setup lang="ts">
  defineProps(['selections'])
</script>

<template>
  <v-table class="pa-1 rounded" density="compact">
    <thead class="bg-plain">
      <tr>
        <th>Order</th>
        <th>Square</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="selection in selections">
        <td>{{ (selections.indexOf(selection) + 1) + "." }}</td>
        <td>{{ selection }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style>
  tbody tr:nth-of-type(odd) {
	  background-color: rgb(var(--v-theme-light));
    color: black;
  }

  tbody tr:nth-of-type(even) {
	  background-color: rgb(var(--v-theme-dark));
    color: white;
  }
</style>
