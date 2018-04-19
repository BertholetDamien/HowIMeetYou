<template>
  <q-list
    no-border
    link
    dense
    inset-delimiter
  >
    <slot></slot>
    <q-item to="stories">
      <q-item-side icon="chat"/>
      <q-item-main label="Read a story"/>
    </q-item>
    <q-item to="story/write">
      <q-item-side icon="edit" />
      <q-item-main label="Write a story"/>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'how-menu',
  data() {
    return {};
  },
};
</script>

<style>
</style>
