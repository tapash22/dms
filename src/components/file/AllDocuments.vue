<script>
import ProductService from "../../service/ProductService";
import {sortOptions} from '../../storejson/storejson';
export default {
  data() {
    return {
      dataviewValue: null,
      layout: "grid",
      sortOrder: null,
      sortField: null,
      sortOptions: sortOptions,
    };
  },
  created() {
    this.productService = new ProductService();
  },
  mounted() {
    this.productService
      .getProducts()
      .then((data) => (this.dataviewValue = data));
  },
};
</script>

<template>
  <DataView
    :value="dataviewValue"
    :layout="layout"
    :paginator="true"
    :rows="9"
    :sortOrder="sortOrder"
    :sortField="sortField"
  >
    <template #header>
      <div class="grid grid-nogutter">
        <div class="col-6 text-left">
          <span class="p-input-icon-right">
            <InputText type="text" placeholder="Search" />
            <i class="pi pi-search" />
          </span>
        </div>
        <div class="col-6 text-right">
          <DataViewLayoutOptions v-model="layout" />
        </div>
      </div>
    </template>
    <template #list="slotProps">
      <div class="col-12">
        <div class="flex flex-column md:flex-row align-items-center p-3 w-full">
          <!-- <img
              :src="'images/product/' + slotProps.data.image"
              :alt="slotProps.data.name"
              class="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5"
            /> -->
          <i
            class="pi pi-image mx-4"
            style="font-size: 3rem; cursor: pointer"
          ></i>
          <div class="flex-1 text-center md:text-left">
            <div class="font-bold text-2xl">{{ slotProps.data.name }}</div>
            <div class="mb-3">{{ slotProps.data.description }}</div>
            <!-- <Rating
                :modelValue="slotProps.data.rating"
                :readonly="true"
                :cancel="false"
                class="mb-2"
              ></Rating> -->
            <!-- <div class="flex align-items-center">
                <i class="pi pi-tag mr-2"></i>
                <span class="font-semibold">{{ slotProps.data.category }}</span>
              </div> -->
          </div>
          <!-- <div
              class="
                flex flex-row
                md:flex-column
                justify-content-between
                w-full
                md:w-auto
                align-items-center
                md:align-items-end
                mt-5
                md:mt-0
              "
            >
              <span
                class="
                  text-2xl
                  font-semibold
                  mb-2
                  align-self-center
                  md:align-self-end
                "
                >${{ slotProps.data.price }}</span
              >
              <Button
                icon="pi pi-shopping-cart"
                label="Add to Cart"
                :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                class="mb-2"
              ></Button>
              <span
                :class="
                  'product-badge status-' +
                  slotProps.data.inventoryStatus.toLowerCase()
                "
                >{{ slotProps.data.inventoryStatus }}</span
              >
            </div> -->
        </div>
      </div>
    </template>

    <template #grid="slotProps">
      <div class="col-12 md:col-4">
        <div class="card m-3 border-1 surface-border">
          <div class="flex align-items-center justify-content-between">
            <!-- <div class="flex align-items-center">
                <i class="pi pi-tag mr-2"></i>
                <span class="font-semibold">{{ slotProps.data.category }}</span>
              </div> -->
            <!-- <span
                :class="
                  'product-badge status-' +
                  slotProps.data.inventoryStatus.toLowerCase()
                "
                >{{ slotProps.data.inventoryStatus }}</span
              > -->
          </div>
          <div class="text-center">
            <!-- <img
                :src="'images/product/' + slotProps.data.image"
                :alt="slotProps.data.name"
                class="w-9 shadow-2 my-3 mx-0"
              /> -->
            <i class="pi pi-image" style="font-size: 3rem; cursor: pointer"></i>
            <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
            <div class="mb-3">{{ slotProps.data.description }}</div>
            <!-- <Rating
                :modelValue="slotProps.data.rating"
                :readonly="true"
                :cancel="false"
              ></Rating> -->
          </div>
          <!-- <div class="flex align-items-center justify-content-between">
              <span class="text-2xl font-semibold"
                >${{ slotProps.data.price }}</span
              >
              <Button
                icon="pi pi-shopping-cart"
                :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
              ></Button>
            </div> -->
        </div>
      </div>
    </template>
  </DataView>
</template>