<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import ProductService from "../../service/ProductService";
import {categories,leafStatuses,categoryTypes,dropdownItems,sortOptions} from '../../storejson/storejson';

export default {
  data() {
    return {
      display: false,
      expandedRows: [],

      leafStatus: null,
      dropdownItem: null,
      categoryType: null,
      categories:null,

      filters1: null,
      filters2: null,

      loading1: true,
      dataviewValue: null,
      layout: "grid",
      sortOrder: null,
      sortField: null,
      sortOptions:sortOptions,
      loading: [false, false, false],
    };
  },
  customerService: null,
  productService: null,

  created() {
    this.initFilters1();
    this.initFilters2();
    this.productService = new ProductService();
  },
  mounted() {
    this.productService
      .getProducts()
      .then((data) => (this.dataviewValue = data));
      this.categories = categories;
    this.loading1 = false;
  },
  methods: {
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
    initFilters1() {
      this.filters1 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
      };
    },

    initFilters2() {
      this.filters2 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
      };
    },

    clearFilter1() {
      this.initFilters1();
    },
    clearFilter2() {
      this.initFilters2();
    },

    expandAll() {
      this.expandedRows = this.categories.filter((c) => c.id);
    },
    collapseAll() {
      this.expandedRows = null;
    },
    onSortChange(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    },
    load(index) {
      this.loading[index] = true;
      setTimeout(() => (this.loading[index] = false), 1000);
    },
  },
};
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div>
        <!-- <h5>File List</h5> -->
        <DataTable
          v-model:expandedRows="expandedRows"
          :value="categories"
          :paginator="true"
          class="p-datatable-gridlines"
          :rows="10"
          dataKey="id"
          :rowHover="true"
          v-model:filters="filters1"
          filterDisplay="menu"
          :loading="loading1"
          :filters="filters1"
          responsiveLayout="scroll"
          :globalFilterFields="['name', 'sequence', 'status']"
        >
          <template #header>
            <div class="flex justify-content-between flex-column sm:flex-row">
              <Button
                type="button"
                icon="pi pi-filter-slash"
                label="Clear"
                class="p-button-outlined mb-2"
                @click="clearFilter1()"
              />
              <Button
                icon="pi pi-plus"
                label="Expand All"
                @click="expandAll"
                class="mr-2 mb-2"
              />
              <Button
                icon="pi pi-minus"
                label="Collapse All"
                @click="collapseAll"
                class="mb-2"
              />
              <span class="p-input-icon-right mb-2">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters1['global'].value"
                  placeholder="Keyword Search"
                  style="width: 100%"
                />
              </span>
            </div>
          </template>

          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <Column :expander="true" headerStyle="width: 3rem" />
          <Column field="name" header="Title" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.name }}
            </template>
          </Column>

          <Column
            field="category_type"
            class="text-left"
            header="Reference"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              {{ data.category_type }}
            </template>
          </Column>

          <Column
            field="is_leaf"
            class="text-left"
            header="Date"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              {{ data.is_leaf ? "Yes" : "No" }}
            </template>
          </Column>

          <Column
            field="status"
            header="Status"
            :filterMenuStyle="{ width: '14rem' }"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              <span :class="'customer-badge status-' + data.status">{{
                data.status
              }}</span>
            </template>
          </Column>

          <Column
            field="verified"
            header="Action"
            dataType="boolean"
            bodyClass="text-center"
            style="min-width: 8rem"
          >
            <template #body="{ data }">
              <a href="javascript:void(0)" @click="open(data)" class="btn"
                ><i class="btn pi text-pink-500 pi-eye mr-5"></i
              ></a>
            </template>
          </Column>
          <template #expansion>
            <div class="p-3">
              <h5>Custom attributes</h5>
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
                      <!-- <Dropdown
                        v-model="sortKey"
                        :options="sortOptions"
                        optionLabel="label"
                        placeholder="Sort By Price"
                        @change="onSortChange($event)"
                      /> -->
                    </div>
                    <div class="col-6 text-right">
                      <DataViewLayoutOptions v-model="layout" />
                    </div>
                  </div>
                </template>
                <template #list="slotProps">
                  <div class="col-12">
                    <div
                      class="
                        flex flex-column
                        md:flex-row
                        align-items-center
                        p-3
                        w-full
                      "
                    >
                      <div class="flex-1 text-center md:text-left">
                        <div class="font-bold text-lg">
                          {{ slotProps.data.name }}
                        </div>
                        <div class="mb-3">{{ slotProps.data.description }}</div>
                      </div>
                    </div>
                  </div>
                </template>

                <template #grid="slotProps">
                  <div class="col-12 md:col-4">
                    <div class="card m-3 border-1 surface-border">
                      <div
                        class="flex align-items-center justify-content-between"
                      ></div>
                      <div class="text-center">
                        <div class="text-lg font-bold">
                          {{ slotProps.data.name }}
                        </div>
                        <div class="mb-3">{{ slotProps.data.description }}</div>
                      </div>
                    </div>
                  </div>
                </template>
              </DataView>
              <!-- <DataTable
                :value="slotProps.data.children"
                responsiveLayout="scroll"
              >
                <template #header>
                  <div
                    class="flex justify-content-between flex-column sm:flex-row"
                  >
                    <Button
                      type="button"
                      icon="pi pi-filter-slash"
                      label="Clear"
                      class="p-button-outlined mb-2"
                      @click="clearFilter2()"
                    />
                    <span class="p-input-icon-right mb-2">
                      <i class="pi pi-search" />
                      <InputText
                        v-model="filters2['global'].value"
                        placeholder="Keyword Search"
                        style="width: 100%"
                      />
                    </span>
                  </div>
                </template>
                <Column field="name" header="Category" style="min-width: 12rem">
                  <template #body="{ data }">
                    {{ data.name }}
                  </template>
                </Column>

                <Column
                  field="category_type"
                  class="text-left"
                  header="Category Type"
                  style="min-width: 12rem"
                >
                  <template #body="{ data }">
                    {{ data.category_type }}
                  </template>
                </Column>

                <Column
                  field="is_leaf"
                  class="text-left"
                  header="Is Leaf"
                  style="min-width: 12rem"
                >
                  <template #body="{ data }">
                    {{ data.is_leaf ? "Yes" : "No" }}
                  </template>
                </Column>

                <Column
                  field="status"
                  header="Status"
                  :filterMenuStyle="{ width: '14rem' }"
                  style="min-width: 12rem"
                >
                  <template #body="{ data }">
                    <span :class="'customer-badge status-' + data.status">{{
                      data.status
                    }}</span>
                  </template>
                </Column>
                <Column
                  field="verified"
                  header="Action"
                  dataType="boolean"
                  bodyClass="text-center"
                  style="min-width: 8rem"
                >
                  <template #body="{ data }">
                    <a href="javascript:void(0)" @click="open" class="btn"
                      ><i class="btn pi text-pink-500 pi-plus mr-2"></i
                    ></a>
                    <a href="javascript:void(0)" class="btn"
                      ><i class="btn pi text-pink-500 pi-user-edit mr-2"></i
                    ></a>
                    <a href="javascript:void(0)" class="btn"
                      ><i class="btn pi text-pink-500 pi-trash"></i
                    ></a>
                  </template>
                </Column>
              </DataTable> -->
            </div>
          </template>
        </DataTable>
      </div>
    </div>
  </div>

  <Dialog
    header="Show All Files"
    v-model:visible="display"
    :breakpoints="{ '960px': '75vw' }"
    :style="{ width: '60vw' }"
    :modal="true"
  >
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
          <div
            class="flex flex-column md:flex-row align-items-center p-3 w-full"
          >
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
              <i
                class="pi pi-image"
                style="font-size: 3rem; cursor: pointer"
              ></i>
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

    <template #footer>
      <Button
        label="Ok"
        @click="close"
        icon="pi pi-check"
        class="p-button-outlined"
      />
    </template>
  </Dialog>
</template>

<style scoped lang="scss">
@import "../../assets/demo/badges.scss";

::v-deep(.p-datatable-frozen-tbody) {
  font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
  font-weight: bold;
}
</style>
