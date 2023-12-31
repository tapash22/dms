<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">

				<div class="p-fluid formgrid grid">
					<div class="field col-12 md:col-4">
						<label for="firstname2">Company</label>
						<InputText id="firstname2" type="text" />
					</div>



					<div class="field col-12 md:col-4">
						<label for="state">Status</label>
						<Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name"
							placeholder="Select One"></Dropdown>
					</div>
				</div>
				<Button label="Save" class="p-button-outlined mr-2 mb-2" icon="pi pi-check" />
				<Button label="Cancel" class="p-button-outlined p-button-danger mr-2 mb-2" icon="pi pi-times" />
			</div>
			<div class="card">
				<h5>Companies</h5>
				<DataTable v-model:expandedRows="expandedRows" :value="categories" :paginator="true"
					class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" v-model:filters="filters1"
					filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
					:globalFilterFields="['name', 'sequence', 'status']">

					<template #header>
						<div class="flex justify-content-between flex-column sm:flex-row">
							<Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined mb-2"
								@click="clearFilter1()" />
							<Button icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2 mb-2" />
							<Button icon="pi pi-minus" label="Collapse All" @click="collapseAll" class="mb-2" />
							<span class="p-input-icon-right mb-2">
								<i class="pi pi-search" />
								<InputText v-model="filters1['global'].value" placeholder="Keyword Search"
									style="width: 100%" />
							</span>
						</div>
					</template>

					<template #empty>
						No customers found.
					</template>
					<template #loading>
						Loading customers data. Please wait.
					</template>
					<Column :expander="true" headerStyle="width: 3rem" />
					<Column field="name" header="Organogram" style="min-width:12rem">
						<template #body="{ data }">
							{{ data.name }}
						</template>

					</Column>

					<Column field="category_type" class="text-left" header="Type" style="min-width:12rem">
						<template #body="{ data }">
							{{ data.category_type }}
						</template>

					</Column>

					<Column field="is_leaf" class="text-left" header="Is Leaf" style="min-width:12rem">
						<template #body="{ data }">
							{{ data.is_leaf ? 'Yes' : 'No' }}
						</template>

					</Column>



					<Column field="status" header="Status" :filterMenuStyle="{ 'width': '14rem' }"
						style="min-width:12rem">
						<template #body="{ data }">
							<span :class="'customer-badge status-' + data.status">{{ data.status }}</span>
						</template>
					</Column>

					<Column field="verified" header="Action" dataType="boolean" bodyClass="text-center"
						style="min-width:8rem">
						<template #body>
							<a href="javascript:void(0)" @click="open" class="btn"><i
									class="btn pi text-pink-500  pi-plus mr-5"></i></a>
							<a href="javascript:void(0)" class="btn"><i
									class="btn pi text-pink-500  pi-user-edit mr-5"></i></a>
							<a href="javascript:void(0)" class="btn"><i class="btn pi text-pink-500  pi-trash"></i></a>
						</template>
					</Column>
					<template #expansion="slotProps">
						<div class="p-3">
							<h5>Children for {{ slotProps.data.name }}</h5>
							<DataTable :value="slotProps.data.children" responsiveLayout="scroll">
								<template #header>
									<div class="flex justify-content-between flex-column sm:flex-row">
										<Button type="button" icon="pi pi-filter-slash" label="Clear"
											class="p-button-outlined mb-2" @click="clearFilter2()" />
										<span class="p-input-icon-right mb-2">
											<i class="pi pi-search" />
											<InputText v-model="filters2['global'].value" placeholder="Keyword Search"
												style="width: 100%" />
										</span>
									</div>
								</template>
								<Column field="name" header="Organogram" style="min-width:12rem">
									<template #body="{ data }">
										{{ data.name }}
									</template>

								</Column>

								<Column field="category_type" class="text-left" header="Type" style="min-width:12rem">
									<template #body="{ data }">
										{{ data.category_type }}
									</template>

								</Column>

								<Column field="is_leaf" class="text-left" header="Is Leaf" style="min-width:12rem">
									<template #body="{ data }">
										{{ data.is_leaf ? 'Yes' : 'No' }}
									</template>

								</Column>

								<Column field="status" header="Status" :filterMenuStyle="{ 'width': '14rem' }"
									style="min-width:12rem">
									<template #body="{ data }">
										<span :class="'customer-badge status-' + data.status">{{ data.status }}</span>
									</template>
								</Column>
								<Column field="verified" header="Action" dataType="boolean" bodyClass="text-center"
									style="min-width:8rem">
									<template #body>
										<a href="javascript:void(0)" @click="open2" class="btn"><i
												class="btn pi text-pink-500  pi-plus mr-2"></i></a>
										<a href="javascript:void(0)" class="btn"><i
												class="btn pi text-pink-500  pi-user-edit mr-2"></i></a>
										<a href="javascript:void(0)" class="btn"><i
												class="btn pi text-pink-500  pi-trash"></i></a>
									</template>
								</Column>
							</DataTable>
						</div>
					</template>
				</DataTable>
			</div>

		</div>
		<DocumentDetailCard header="Business Unit" v-model:visible="display" />
		<DocumentDetailCard header="Division" v-model:visible="display2" />
		<!-- <Dialog header="Business Unit" v-model:visible="display" :breakpoints="{ '960px': '75vw' }"
			:style="{ width: '45vw' }" :modal="true">
			<div class="gird col-12">
				<div class="col-12">
					<div class="card">

						<div class="p-fluid formgrid grid">
							<div class="field col-12 md:col-3">
								<label for="firstname2">Category</label>
								<InputText id="firstname2" type="text" />
							</div>
						</div>
						<div class="p-fluid formgrid grid">
							<div class="field col-12 md:col-3">
								<label for="firstname2">Category</label>
								<InputText id="firstname2" type="text" />
							</div>
							<div class="field col-12 md:col-1">

								<Button class="p-button-outlined p-button-danger  mt-1 mr-2 mb-2" icon="pi pi-minus" />

							</div>
						</div>
						<div class="p-fluid formgrid grid">
							<div class="field col-12 md:col-3">
								<label for="firstname2">Category</label>
								<InputText id="firstname2" type="text" />
							</div>


							<div class="field col-12 md:col-1">

								<Button class="p-button-outlined  mt-1 mr-2 mb-2" icon="pi pi-plus" />

							</div>
							<div class="field col-12 md:col-1">

								<Button class="p-button-outlined p-button-danger  mt-1 mr-2 mb-2" icon="pi pi-minus" />

							</div>

						</div>
						<Button label="Save" class="p-button-outlined mr-2 mb-2" icon="pi pi-check" />
						<Button label="Cancel" class="p-button-outlined p-button-danger mr-2 mb-2" icon="pi pi-times" />
					</div>
				</div>
			</div>
			<template #footer>
				<Button label="Ok" @click="close" icon="pi pi-check" class="p-button-outlined" />
			</template>
		</Dialog> -->


	</div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import DocumentDetailCard from './card/DocumentDetailCard.vue';
import {dropdownItems,categoryTypes,leafStatuses,categories1} from '../storejson/storejson'

export default {

	data() {
		return {
			display: false,
			display2: false,
			expandedRows: [],
			dropdownItems:dropdownItems,

			categoryTypes:categoryTypes,
			leafStatuses:leafStatuses,
			leafStatus: null,
			dropdownItem: null,
			categoryType: null,
			categories: null,

			filters1: null,
			filters2: null,

			loading1: true,

		}
	},
	customerService: null,

	created() {

		this.initFilters1();
		this.initFilters2();
	},
	mounted() {
		this.categories =categories1;
		this.loading1 = false

	},
	methods: {
		open() {
			this.display = true;
		},
		close() {
			this.display = false;
		},
		open2() {
			this.display2 = true;
		},
		close2() {
			this.display2 = false;
		},
		initFilters1() {
			this.filters1 = {
				'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
				'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
				'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
			}
		},

		initFilters2() {
			this.filters2 = {
				'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
				'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
				'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
			}
		},

		clearFilter1() {
			this.initFilters1();
		},
		clearFilter2() {
			this.initFilters2();
		},

		expandAll() {
			this.expandedRows = this.categories.filter(c => c.id);
		},
		collapseAll() {
			this.expandedRows = null;
		},
	}
}
</script>

<style scoped lang="scss">
@import '../assets/demo/badges.scss';

::v-deep(.p-datatable-frozen-tbody) {
	font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
	font-weight: bold;
}
</style>
