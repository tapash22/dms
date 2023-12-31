<template>
  <div class="grid p-fluid">
    <div class="col-12">
      <div class="card card-w-title">
        <h5>Menubar</h5>
        <Menubar :model="nestedMenuitems">
          <template #end>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText type="text" placeholder="Search" />
            </span>
          </template>
        </Menubar>
      </div>
    </div>

    <div class="col-12">
      <div class="card card-w-title">
        <h5>Breadcrumb</h5>
        <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card card-w-title">
        <h5>Steps</h5>
        <p>Steps and TabMenu are integrated with the same child routes.</p>
        <Steps :model="nestedRouteItems" :readonly="false" />
        <router-view />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card card-w-title">
        <h5>TabMenu</h5>
        <p>Steps and TabMenu are integrated with the same child routes.</p>
        <TabMenu :model="nestedRouteItems" />
        <router-view />
      </div>
    </div>

    <div class="col-12 md:col-4">
      <div class="card">
        <h5>Tiered Menu</h5>
        <TieredMenu :model="tieredMenuItems" />
      </div>
    </div>

    <div class="col-12 md:col-4">
      <div class="card">
        <h5>Plain Menu</h5>
        <Menu :model="menuitems" />
      </div>
    </div>

    <div class="col-12 md:col-4">
      <div class="card">
        <h5>Overlay Menu</h5>

        <Menu ref="menu" :model="overlayMenuItems" :popup="true" />
        <Button
          type="button"
          label="Options"
          icon="pi pi-angle-down"
          @click="toggleMenu"
          style="width: auto"
        />
      </div>

      <div class="card" @contextmenu="onContextRightClick">
        <h5>ContextMenu</h5>
        Right click to display.
        <ContextMenu ref="contextMenu" :model="contextMenuItems" />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>MegaMenu - Horizontal</h5>
        <MegaMenu :model="megamenuItems" />

        <h5 style="margin-top: 1.55em">MegaMenu - Vertical</h5>
        <MegaMenu :model="megamenuItems" orientation="vertical" />
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>PanelMenu</h5>
        <PanelMenu :model="panelMenuitems" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  nestedMenuitems,
  breadcrumbItems1,
  nestedRouteItems,
  tieredMenuItems,
  overlayMenuItems,
  menuitems,
  contextMenuItems,
  megamenuItems,
  panelMenuitems,
} from "../storejson/storejson";

export default {
  data() {
    return {
      nestedMenuitems: nestedMenuitems,
      breadcrumbHome: { icon: "pi pi-home", to: "/" },
      breadcrumbItems: breadcrumbItems1,
      nestedRouteItems: nestedRouteItems,
      tieredMenuItems: tieredMenuItems,
      overlayMenuItems: overlayMenuItems,
      menuitems: menuitems,
      contextMenuItems: contextMenuItems,
      megamenuItems: megamenuItems,
      panelMenuitems: panelMenuitems,
    };
  },
  methods: {
    toggleMenu(event) {
      this.$refs.menu.toggle(event);
    },
    onContextRightClick(event) {
      this.$refs.contextMenu.show(event);
    },
  },
};
</script>