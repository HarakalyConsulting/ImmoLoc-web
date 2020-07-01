
<script>
import EssentialLink from 'components/EssentialLink.vue'

export default
{
    name: 'MainLayout',
    components:
    {
        EssentialLink
    },
    data()
    {
        return {
            leftDrawerOpen: false,
            essentialLinks:
            [
                {title: 'Dashboard', caption: 'quasar.dev', icon: 'school', link: 'https://quasar.dev'}
            ]
        };
    }
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">

    <q-header>
      <q-toolbar class="bg-grey-8">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
        <q-toolbar-title>APP</q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" content-class="bg-grey-9 text-white">
      <q-list>
        <q-item-label header class="text-grey-1">Essential Links</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

