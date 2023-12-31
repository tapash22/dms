<template>
  <div class="grid">
    <div class="col-12">
      <div class="card card-w-title">
        <!-- <h5>Organogram</h5> -->
        <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <div class="grid">
          <h5 class="col">
            <a title="" href="javascript:void(0)" class="btn"
              ><i
                style="font-size: large"
                class="btn pi text-pink-500 pi-folder"
              ></i
            ></a>
            Documents (10)
          </h5>
        </div>

        <DataTable
          :value="folders"
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
          <Column field="name" header="Name" style="min-width: 12rem">
            <template #body="{ data }">
              <a title="Delete" href="javascript:void(0)" class="btn"
                ><i :class="data.icon" class="btn pi text-pink-500 mr-5"></i
              ></a>
              <router-link
                v-if="data.type == 'Folder'"
                :to="{
                  name: 'document-info',
                  params: {
                    type: data.name,
                  },
                }"
                >{{ data.name }}</router-link
              >
              <router-link
                v-else
                :to="{
                  name: 'file-details',
                }"
                >{{ data.name }}</router-link
              >
            </template>
          </Column>
          <Column
            field="date"
            class="text-left"
            header="Date"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              {{ data.date }}
            </template>
          </Column>
          <Column
            field="created_by"
            class="text-left"
            header="Created By"
            style="min-width: 12rem"
          >
            <template #body="{ data }">
              {{ data.created_by }}
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
              <!-- <a title="Map Attributes" href="javascript:void(0)" class="btn"
								@click="openMapAttributesDialog"><i class="btn pi text-pink-500  pi-tag mr-5"></i></a> -->
              <a title="Approve" href="javascript:void(0)" class="btn"
                ><i class="btn pi text-pink-500 pi-check mr-5"></i
              ></a>
            </template>
          </Column>
        </DataTable>
      </div>
      <!-- <div class="card">
				<h5>Documents</h5>
				<DataTable :value="folders" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['name','date','status']" >
					
					<template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined mb-2" @click="clearFilter1()"/>
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        
                    </Column>

					<Column field="date" class="text-right" header="Date" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.date}}
                        </template>
                        
                    </Column>

					<Column field="created_by" class="text-left" header="Uploaded By" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.created_by}}
                        </template>
                        
                    </Column>
                    
                    
                    
                    <Column field="status" header="Status" :filterMenuStyle="{'width':'14rem'}" style="min-width:12rem">
                        <template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                    </Column>
                   
                    <Column field="verified" header="Action" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <a href="javascript:void(0)" class="btn"><i class="btn pi text-pink-500  pi-user-edit mr-5"></i></a>
                            <a href="javascript:void(0)" class="btn"><i class="btn pi text-pink-500  pi-trash mr-5"></i></a>
							
                            
                            
                        </template>
						
                        
                    </Column>
				</DataTable>
			</div> -->
    </div>

    <DocumentDetailCard2
      name="Name"
      customer="Custom Attributes"
      metaFields="metaFields"
    />
    <DocumentDetailCard2
      name="Name"
      customer="Custom Attributes"
      metaFields="metaFields"
    />
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import axios from "axios";
import { statuses, metaFields, folders2 } from "../storejson/storejson";
import DocumentDetailCard2 from "./card/DocumentDetailCard2.vue";

export default {
  data() {
    return {
      display: false,
      mapAttributesOpen: false,
      statuses: statuses,
      is_active: null,
      type: "",
      order: "",
      folders: null,
      filters1: null,
      loading1: true,
      breadcrumbHome: null,
      breadcrumbItems: [],
      metaField: null,
      metaFields: metaFields,
    };
  },
  customerService: null,

  created() {
    this.initFilters1();
  },
  mounted() {
    this.folders = folders2;
    this.breadcrumbHome = { icon: "pi pi-home", to: "/" };
    this.breadcrumbItems = [
      { label: "Logic Software Ltd", slug: "lst" },
      { label: "Pending Approval List", slug: "dhaka" },
    ];
    this.loading1 = false;
  },
  methods: {
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
    openMapAttributesDialog() {
      this.mapAttributesOpen = true;
    },
    closeMapAttributesDialog() {
      this.mapAttributesOpen = false;
    },
    async addData() {
      // axios.defaults.baseURL = 'http://localhost:8000'
      // await axios.post('type', {
      // 	type: this.type,
      // 	order: this.order,
      // 	status: this.status
      // });
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
