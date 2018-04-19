<template>
  <q-layout view="hhh LpR fff">
    <q-layout-header>
      <q-toolbar color="white" class="items-stretch q-pa-none">
        <q-btn
          flat
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="lt-sm"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="font-xl brand-family q-pa-none">
          <a class="q-pl-md q-pr-lg q-py-xl" href="/">How I Met You</a>
        </q-toolbar-title>

        <how-menu class="gt-xs row q-py-none"></how-menu>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
      <how-menu class="side-bar">
        <q-list-header class="list-header font-xl brand-family">
          How I Met You
        </q-list-header>
      </how-menu>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HowMenu from 'components/how-menu';

export default {
  name: 'LayoutDefault',
  components: {
    'how-menu': HowMenu,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
  },
};
</script>

<style lang="stylus">
  @import '~variables'

  .q-toolbar
    border-bottom 6px solid $primary
    color $dark !important

    .q-toolbar-title
      margin-bottom: -10px;
      flex-shrink 0
      flex-grow 0
      flex-basis inherit
      font-weight bold
      color palette("Green", '900')
      letter-spacing: -2px;
      font-size: 3rem;
      font-weight: bold;
      a
        display block
        &:hover
          background-color rgba(189,189,189,0.5)

    .q-list
      .q-item
        padding-left 10px
        padding-right 10px

        .q-item-side
          min-width inherit

  .side-bar
    padding-top: 2px;

    .list-header
      border-bottom 6px solid $primary
      font-weight bold
      color palette("Green", '900')

    .q-item
      padding-top 10px
      padding-bottom 10px

  .q-list
    .q-item
      font-size 28px
    .q-item-side i
      font-size 32px
</style>
