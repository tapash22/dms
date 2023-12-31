<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <div class="p-fluid formgrid grid">
          <div class="field col-12 md:col-4">
            <label for="firstname2">Title</label>
            <InputText id="firstname2" type="text" />
          </div>

          <div class="field col-12 md:col-4">
            <label for="state">Meta Fields</label>
            <MultiSelect
              v-model="metaField"
              :options="metaFields"
              optionLabel="name"
              placeholder="Select Meta Fields"
              :filter="true"
            >
              <template #value="slotProps">
                <div
                  class="inline-flex align-items-center py-1 px-2 bg-primary text-primary border-round mr-2"
                  v-for="option of slotProps.value"
                  :key="option.code"
                >
                  <span
                    :class="'mr-2 flag flag-' + option.code.toLowerCase()"
                    style="width: 18px; height: 12px"
                  />
                  <div>{{ option.name }}</div>
                </div>
                <template
                  v-if="!slotProps.value || slotProps.value.length === 0"
                >
                  <div class="p-1">Select Meta Fields</div>
                </template>
              </template>
              <template #option="slotProps">
                <div class="flex align-items-center">
                  <span
                    :class="
                      'mr-2 flag flag-' + slotProps.option.code.toLowerCase()
                    "
                    style="width: 18px; height: 12px"
                  />
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </MultiSelect>
          </div>

          <div class="field col-12 md:col-4">
            <label for="state">Status</label>
            <Dropdown
              id="state"
              v-model="dropdownItem"
              :options="dropdownItems"
              optionLabel="name"
              placeholder="Select One"
            ></Dropdown>
          </div>
        </div>
        <Button
          label="Save"
          class="p-button-outlined mr-2 mb-2"
          icon="pi pi-check"
        />
        <Button
          label="Cancel"
          class="p-button-outlined p-button-danger mr-2 mb-2"
          icon="pi pi-times"
        />
      </div>
      <div class="card">
        <h5>Filter Menu</h5>
        <DataTable
          :value="customer1"
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
              <span class="p-input-icon-left mb-2">
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
          <Column field="name" header="UI" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.name }}
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
              <a href="javascript:void(0)" class="btn"
                ><i class="btn pi text-pink-500 pi-user-edit mr-5"></i
              ></a>
              <a href="javascript:void(0)" class="btn"
                ><i class="btn pi text-pink-500 pi-trash mr-5"></i
              ></a>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  data() {
    return {
      dropdownItems: [
        { name: "Active", code: "Active" },
        { name: "Inactive", code: "Inactive" },
      ],
      Types: [
        { name: "Active", code: "Active" },
        { name: "Inactive", code: "Inactive" },
      ],
      dropdownItem: null,
      customer1: null,
      metaField: null,
      metaFields: [
        { name: "Invoice No", code: "invoice_no" },
        { name: "Mrr Ref No", code: "mrr_ref_no" },
        { name: "Quantity", code: "quantity" },
        { name: "Issue Ref No", code: "issue_ref_no" },
        { name: "Requistion Ref No", code: "requisition_ref_no" },
        { name: "Requistion Date", code: "requisition_date" },
      ],

      filters1: null,

      loading1: true,
    };
  },
  customerService: null,

  created() {
    this.initFilters1();
  },
  mounted() {
    this.customer1 = [
      { name: "LC", status: "Active" },
      { name: "MRR", status: "Active" },
      { name: "Invoice", status: "Active" },
      { name: "Issue", status: "Active" },
      { name: "Requisition", status: "Active" },
    ];
    this.loading1 = false;
  },
  methods: {
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
    clearFilter1() {
      this.initFilters1();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/demo/badges.scss";

::v-deep(.p-datatable-frozen-tbody) {
  font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
  font-weight: bold;
}
</style>
