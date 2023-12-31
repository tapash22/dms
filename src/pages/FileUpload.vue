<template>
  <main class="grid">
    <nav class="col-12 card">
      <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
    </nav>
    <aside class="col-2">
      <div class="">
        <Listbox
          v-model="listboxValue"
          :options="listboxValues"
          optionLabel="name"
          :filter="true"
        />
      </div>
    </aside>
    <article class="col-10">
      <TabView>
        <TabPanel>
          <template #header>
            <i class="pi pi-table"></i> &nbsp;
            <span>List </span>
          </template>
          <ListFile />
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-pencil"></i> &nbsp;
            <span>Create / Edit </span>
          </template>
          <FormFile />
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-list"></i> &nbsp;
            <span>All Documents </span>
          </template>
          <AllDocuments />
        </TabPanel>
      </TabView>
    </article>
  </main>
</template>

<script>
import FormFile from "../components/file/FormFile.vue";
import ListFile from "../components/file/ListFile.vue";
import AllDocuments from "../components/file/AllDocuments.vue";

import { listboxValues } from '../storejson/storejson';

export default {
  components: {
    FormFile,
    ListFile,
    AllDocuments,
  },
  data() {
    return {
      breadcrumbHome: null,
      breadcrumbItems: [],
      listboxValues:listboxValues,
      listboxValue: null,
    };
  },
  created() {},
  mounted() {
    this.breadcrumbHome = { icon: "pi pi-home", to: "/" };
    this.breadcrumbItems = [
      { label: "Folders", slug: "lst" },
      { label: "Report", slug: "dhaka" },
      { label: "Hospital Report", slug: "banani" },
    ];
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../assets/demo/badges.scss";
</style>
