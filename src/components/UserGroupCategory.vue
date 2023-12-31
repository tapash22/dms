<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">

				<div class="p-fluid formgrid grid">


					<div class="field col-12 md:col-4">
						<label for="state">User Group</label>
						<Dropdown id="state" :filter="true" v-model="userGroup" :options="userGroups" optionLabel="name"
							placeholder="Select One">


						</Dropdown>
					</div>

					<!-- <div class="field col-12 md:col-4">
						<label for="state">Folders</label>
						<MultiSelect v-model="category" :options="categories" optionLabel="name"
							placeholder="Select UIs" :filter="true">
							<template #value="slotProps">
								<div class="inline-flex align-items-center py-1 px-2 bg-primary text-primary border-round mr-2"
									v-for="option of slotProps.value" :key="option.code">
									<span :class="'mr-2 flag flag-' + option.code.toLowerCase()"
										style="width:18px; height: 12px" />
									<div>{{ option.name }}</div>
								</div>
								<template v-if="!slotProps.value || slotProps.value.length === 0">
									<div class="p-1">Select Folders</div>
								</template>
							</template>
							<template #option="slotProps">
								<div class="flex align-items-center">
									<span :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()"
										style="width:18px; height: 12px" />
									<div>{{ slotProps.option.name }}</div>
								</div>
							</template>
						</MultiSelect>

					</div> -->
					<!-- <div class="field col-12 md:col-4">
						
						<Button label="Get Uis" class="mt-5"></Button>
					</div> -->
					<div class="field col-12 md:col-4">
						<label for="state">UIs</label>
						<MultiSelect v-model="ui" :options="uis" optionLabel="name" placeholder="Select UIs"
							:filter="true">
							<template #value="slotProps">
								<div class="inline-flex align-items-center py-1 px-2 bg-primary text-primary border-round mr-2"
									v-for="option of slotProps.value" :key="option.code">
									<span :class="'mr-2 flag flag-' + option.code.toLowerCase()"
										style="width:18px; height: 12px" />
									<div>{{ option.name }}</div>
								</div>
								<template v-if="!slotProps.value || slotProps.value.length === 0">
									<div class="p-1">Select Uis</div>
								</template>
							</template>
							<template #option="slotProps">
								<div class="flex align-items-center">
									<span :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()"
										style="width:18px; height: 12px" />
									<div>{{ slotProps.option.name }}</div>
								</div>
							</template>
						</MultiSelect>

					</div>

					<div class="field col-12 md:col-4">
						<label for="state">Status</label>
						<Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name"
							placeholder="Select One">

						</Dropdown>
					</div>
				</div>
				<Button label="Save" class="p-button-outlined mr-2 mb-2" icon="pi pi-check" />
				<Button label="Cancel" class="p-button-outlined p-button-danger mr-2 mb-2" icon="pi pi-times" />
			</div>
			<div class="card">
				<h5>User Group Categories & Uis</h5>
				<DataTable :value="categoryUis" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id"
					:rowHover="true" v-model:filters="filters1" filterDisplay="menu" :loading="loading1"
					:filters="filters1" responsiveLayout="scroll" :globalFilterFields="['name', 'sequence', 'status']">

					<template #header>
						<div class="flex justify-content-between flex-column sm:flex-row">
							<Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined mb-2"
								@click="clearFilter1()" />
							<span class="p-input-icon-left mb-2">
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
					<Column field="user_groups" header="User Groups" style="min-width:12rem">
						<template #body="{ data }">
							{{ data.user_groups }}
						</template>

					</Column>
					<!-- <Column field="name" header="Categories" style="min-width:12rem">
						<template #body="{ data }">
							{{ data.name }}
						</template>

					</Column> -->

					<Column field="uis" header="UIs" style="min-width:12rem">
						<template #body="{ data }">
							{{ data.uis }}
						</template>

					</Column>



					<!-- <Column field="is_leaf" class="text-left" header="Is Leaf" style="min-width:12rem">
						<template #body="{ data }">
							{{ data.is_leaf ? 'Yes' : 'No' }}
						</template>

					</Column> -->



					<Column field="status" header="Status" :filterMenuStyle="{ 'width': '14rem' }"
						style="min-width:12rem">
						<template #body="{ data }">
							<span :class="'customer-badge status-' + data.status">{{ data.status }}</span>
						</template>
					</Column>

					<Column field="verified" header="Action" dataType="boolean" bodyClass="text-center"
						style="min-width:8rem">
						<template #body="{ data }">
							<a href="javascript:void(0)" class="btn"><i
									class="btn pi text-pink-500  pi-user-edit mr-5"></i></a>
							<a href="javascript:void(0)" class="btn"><i
									class="btn pi text-pink-500  pi-trash mr-5"></i></a>



						</template>


					</Column>
				</DataTable>
			</div>

		</div>
	</div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { dropdownItems,userGroups } from '../storejson/storejson'

export default {

	data() {
		return {

			dropdownItem: null,
			dropdownItems: dropdownItems,
			userGroup: null,
			userGroups: userGroups,

			category: null,
			categories: [
				{ name: "HR > Mirpur > Dhaka > Logic Software Ltd > Asrotex Group", code: 'so' },
				{ name: "HR > Mirpur > Dhaka > ABFL > Islam Group", code: 'st' },
				{ name: "Development > Mirpur > Dhaka > ABFL > Islam Group", code: 'st' },

			],

			ui: null,
			uis: [
				{ name: 'Invoice', code: 'so' },
				{ name: 'Sales Order', code: 'st' },
				{ name: 'Mrr', code: 'do' },
			],

			categoryUis: null,

			filters1: null,

			loading1: true,

		}
	},
	customerService: null,

	created() {

		this.initFilters1();
	},
	mounted() {

		this.categoryUis = [
			{ user_groups: "Group One", uis: 'Invoice, Mrr', name: "HR > Mirpur > Dhaka > Logic Software Ltd > Asrotex Group", is_leaf: true, parent: "Mirpur > Dhaka > Logic Software Ltd > Asrotex Group", sequence: 2, status: "Active" },
			{ user_groups: "Group Two", uis: 'Lc, Mrr', name: "HR > Mirpur > Dhaka > ABFL > Islam Group", is_leaf: true, parent: "Mirpur > Dhaka > ABFL > Islam Group", sequence: 2, status: "Active" },
		]
		this.loading1 = false

	},
	methods: {
		initFilters1() {
			this.filters1 = {
				'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
				'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
				'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
			}
		},
		clearFilter1() {
			this.initFilters1();
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
