import {PrimeIcons} from 'primevue/api';

export const dropdownItems = [
  { name: "Active", code: "Active" },
  { name: "Inactive", code: "Inactive" },
];

export const dropdownItems1= [
  {name: 'Option 1', code: 'Option 1'},
  {name: 'Option 2', code: 'Option 2'},
  {name: 'Option 3', code: 'Option 3'}
]

export const categoryTypes = [
  { name: "Company", sequence: 1, status: "Active" },
  { name: "Business Unit", sequence: 2, status: "Active" },
  { name: "Division", sequence: 3, status: "Active" },
  { name: "Section", sequence: 4, status: "Active" },
  { name: "Department", sequence: 5, status: "Active" },
  { name: "Document", sequence: 6, status: "Active" },
];

export const categoryTypes2 = [
  {name: "Superadmin",  status: "Active"},
  {name: "Admin",  status: "Active"},
  {name: "Editor", status: "Active"},
];

export const categoryTypes1 = [
  {name: "Group One",  status: "Active"},
  {name: "Group Two",  status: "Active"},
  {name: "Group Three", status: "Active"},
];

export const userGroups= [
  { name: 'Group One', code: 'so' },
  { name: 'Group Two', code: 'st' },
  { name: 'Group Three', code: 'st' },
];

export const groups= [
  { name: 'Group One', code: 'go' },
  { name: 'Group Two', code: 'g2' },
  { name: 'Group Three', code: 'g3' },
]

export const roles= [
  { name: 'Superadmin', code: 'go' },
  { name: 'Admin', code: 'g2' },
  { name: 'Editor', code: 'g3' },
];

export const statuses = [
  { name: "Active", code: "Active" },
  { name: "Inactive", code: "Inactive" },
];

export const leafStatuses = [
  { name: "Yes", code: "Yes" },
  { name: "No", code: "No" },
];

export const listboxValues = [
  { name: "PO", code: "NY" },
  { name: "LC", code: "RM" },
  { name: "MRR", code: "LDN" },
  { name: "Accounts", code: "IST" },
  { name: "Sales", code: "PRS" },
];

export const categories = [
  {
    id: 1,
    name: "PO Asro",
    is_leaf: false,
    parent: "N/A",
    category_type: "PO#1",
    sequence: 1,
    status: "Active",
    children: [
      {
        category_type: "Business Unit",
        name: "Logic Software Ltd > Asrotex Group",
        is_leaf: false,
        parent: "Asrotex Group",
        sequence: 2,
        status: "Active",
      },
      {
        category_type: "Division",
        name: "Dhaka > Logic Software Ltd > Asrotex Group",
        is_leaf: false,
        parent: "Logic Software Ltd > Asrotex Group",
        sequence: 2,
        status: "Active",
      },
      {
        category_type: "Section",
        name: "Mirpu > Dhaka > Logic Software Ltd > Asrotex Group",
        is_leaf: false,
        parent: "Dhaka > Logic Software Ltd > Asrotex Group",
        sequence: 2,
        status: "Active",
      },
      {
        category_type: "Department",
        name: "HR > Mirpur > Dhaka > Logic Software Ltd > Asrotex Group",
        is_leaf: true,
        parent: "Mirpur > Dhaka > Logic Software Ltd > Asrotex Group",
        sequence: 2,
        status: "Active",
      },
    ],
  },

  {
    id: 2,
    name: "PO Aftab",
    is_leaf: false,
    parent: "N/A",
    category_type: "PO#2",
    sequence: 1,
    status: "Active",
    children: [
      {
        category_type: "Business Unit",
        name: "ABFL > Islam Group",
        is_leaf: false,
        parent: "Islam Group",
        sequence: 2,
        status: "Active",
      },
      {
        category_type: "Division",
        name: "Dhaka > ABFL > Islam Group",
        is_leaf: false,
        parent: "ABFL > Islam Group",
        sequence: 2,
        status: "Active",
      },
      {
        category_type: "Section",
        name: "Mirpu > Dhaka > ABFL > Islam Group",
        is_leaf: false,
        parent: "Dhaka > ABFL > Islam Group",
        sequence: 2,
        status: "Active",
      },
      {
        category_type: "Department",
        name: "HR > Mirpur > Dhaka > ABFL > Islam Group",
        is_leaf: true,
        parent: "Mirpur > Dhaka > ABFL > Islam Group",
        sequence: 2,
        status: "Active",
      },
    ],
  },
];

export const categories1= [
  {
    id: 1, name: "Asrotex Group", is_leaf: false, parent: "N/A", category_type: "Company", sequence: 1, status: "Active",
    children: [

      { category_type: "Business Unit", name: "Logic Software Ltd > Asrotex Group", is_leaf: false, parent: "Asrotex Group", sequence: 2, status: "Active" },
      { category_type: "Division", name: "Dhaka > Logic Software Ltd > Asrotex Group", is_leaf: false, parent: "Logic Software Ltd > Asrotex Group", sequence: 2, status: "Active" },
      { category_type: "Section", name: "Mirpu > Dhaka > Logic Software Ltd > Asrotex Group", is_leaf: false, parent: "Dhaka > Logic Software Ltd > Asrotex Group", sequence: 2, status: "Active" },
      { category_type: "Department", name: "HR > Mirpur > Dhaka > Logic Software Ltd > Asrotex Group", is_leaf: true, parent: "Mirpur > Dhaka > Logic Software Ltd > Asrotex Group", sequence: 2, status: "Active" },
    ]
  },

  {
    id: 2, name: "Aftab Group", is_leaf: false, parent: "N/A", category_type: "Company", sequence: 1, status: "Active",
    children: [
      { category_type: "Business Unit", name: "ABFL > Islam Group", is_leaf: false, parent: "Islam Group", sequence: 2, status: "Active" },
      { category_type: "Division", name: "Dhaka > ABFL > Islam Group", is_leaf: false, parent: "ABFL > Islam Group", sequence: 2, status: "Active" },
      { category_type: "Section", name: "Mirpu > Dhaka > ABFL > Islam Group", is_leaf: false, parent: "Dhaka > ABFL > Islam Group", sequence: 2, status: "Active" },
      { category_type: "Department", name: "HR > Mirpur > Dhaka > ABFL > Islam Group", is_leaf: true, parent: "Mirpur > Dhaka > ABFL > Islam Group", sequence: 2, status: "Active" },
    ]
  },

];

export const customer1 = [
  {name: "invoice_no", label: "Invoice No", type: "Text",  status: "Active"},
  {name: "mrr_ref_no", label: "Mrr Ref No", type: "Text", status: "Active"},
  {name: "quantity", label: "Quantity", type: "Number", status: "Active"},
  {name: "issue_ref_no", label: "Issue Ref No", type: "Text", status: "Active"},
  {name: "requisition_ref_no", label: "Requistion Ref No", type: "Text",  status: "Active"},
  {name: "requisition_date", label: "Requistion Date", type: "Date",  status: "Active"},
]

export const fieldTypes= [
  { name: 'Text', code: 'Text' },
  { name: 'Number', code: 'Number' },
  { name: 'Date', code: 'Date' },
];

export const sortOptions = [
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
];

export const multiselectValue = [
  { name: "Attribute 1", code: "AU" },
  { name: "Attribute 2", code: "BR" },
  { name: "Attribute 3", code: "CN" },
];

export const multiselectValues = [
  { name: "Attribute 1", code: "AU" },
  { name: "Attribute 2", code: "BR" },
  { name: "Attribute 3", code: "CN" },
  { name: "Attribute 4", code: "EG" },
  { name: "Attribute 5", code: "AU" },
  { name: "Attribute 6", code: "BR" },
  { name: "Attribute 7", code: "CN" },
  { name: "Attribute 8", code: "EG" },
  { name: "Attribute 9", code: "AU" },
  { name: "Attribute 10", code: "BR" },
  { name: "Attribute 11", code: "CN" },
  { name: "Attribute 12", code: "EG" },
  { name: "Attribute 13", code: "AU" },
  { name: "Attribute 14", code: "BR" },
  { name: "Attribute 15", code: "CN" },
  { name: "Attribute 16", code: "EG" },
];

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
export const labels1=[
  'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'
];

export const datasets1= [
  {
    label: 'First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    backgroundColor: '#2f4860',
    borderColor: '#2f4860',
    tension: .4
  },
  {
    label: 'Second Dataset',
    data: [28, 48, 40, 19, 86, 27, 90],
    fill: false,
    backgroundColor: '#00bb7e',
    borderColor: '#00bb7e',
    tension: .4
  }
];

export const datasets2= [
  {
    data: [300, 50, 100],
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ]
  }
];

export const backgroundColor= [
  "#FF6384",
  "#4BC0C0",
  "#FFCE56",
  "#E7E9ED",
  "#36A2EB"
];

export const datasets4= [
  {
    label: 'My First dataset',
    backgroundColor: 'rgba(179,181,198,0.2)',
    borderColor: 'rgba(179,181,198,1)',
    pointBackgroundColor: 'rgba(179,181,198,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(179,181,198,1)',
    data: [65, 59, 90, 81, 56, 55, 40]
  },
  {
    label: 'My Second dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    pointBackgroundColor: 'rgba(255,99,132,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,99,132,1)',
    data: [28, 48, 40, 19, 96, 27, 100]
  }
];

export const 	datasets3= [
  {
    label: 'My First dataset',
    backgroundColor: '#2f4860',
    data: [65, 59, 80, 81, 56, 55, 40]
  },
  {
    label: 'My Second dataset',
    backgroundColor: '#00bb7e',
    data: [28, 48, 40, 19, 86, 27, 90]
  }
]

export const datasets = [
  {
    label: "Revenue",
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    backgroundColor: "#2f4860",
    borderColor: "#2f4860",
    tension: 0.4,
  },
  {
    label: "Sales",
    data: [28, 48, 40, 19, 86, 27, 90],
    fill: false,
    backgroundColor: "#00bb7e",
    borderColor: "#00bb7e",
    tension: 0.4,
  },
];

export const colorLabels = [
  "Red",
  "Green",
  "Yellow",
  "Grey",
  "Blue"
];

export const items = [
  { label: "Add New", icon: "pi pi-fw pi-plus" },
  { label: "Remove", icon: "pi pi-fw pi-minus" },
];

export const metaFields = [
  { name: "Invoice No", code: "invoice_no" },
  { name: "Mrr Ref No", code: "mrr_ref_no" },
  { name: "Quantity", code: "quantity" },
  { name: "Issue Ref No", code: "issue_ref_no" },
  { name: "Requistion Ref No", code: "requisition_ref_no" },
  { name: "Requistion Date", code: "requisition_date" },
];

export const folders = [
  {
    name: "Accounts",
    created_by: "Ahmed",
    date: "07-09-22",
    status: "Active",
  },
  { name: "Hrm", created_by: "Ahmed", date: "07-09-22", status: "Active" },
  {
    name: "Development",
    created_by: "Ahmed",
    date: "07-09-22",
    status: "Active",
  },
  {
    name: "Procurment",
    created_by: "Ahmed",
    date: "07-09-22",
    status: "Active",
  },
  {
    name: "Sales",
    created_by: "Ahmed",
    date: "07-09-22",
    status: "Active",
  },
  {
    name: "Distribution",
    created_by: "Ahmed",
    date: "07-09-22",
    status: "Active",
  },
];

export const folders2 = [
  { name: "Accounts", type: 'Folder', icon:'pi-folder-open', created_by: 'Ahmed', date: '07-09-22', status: "Active" },
  { name: "Hrm", type: 'File', icon:'pi-file', created_by: 'Ahmed', date: '07-09-22', status: "Active" },
  { name: "Development", type: 'Folder', icon:'pi-folder-open', created_by: 'Ahmed', date: '07-09-22', status: "Active" },
  { name: "Server Info", type: 'File', icon:'pi-file', created_by: 'Ahmed', date: '07-09-22', status: "Active" },
  { name: "Sales", type: 'Folder', icon:'pi-folder-open', created_by: 'Ahmed', date: '07-09-22', status: "Active" },
  { name: "Distribution", type: 'Folder', icon:'pi-folder-open', created_by: 'Ahmed', date: '07-09-22', status: "Active" },
];

export const  users= [
  { name: "Sohag", code: "NY" },
  { name: "Minhaz", code: "RM" },
  { name: "Mizan", code: "LDN" },
  { name: "Babu", code: "IST" },
];

export const breadcrumbItems = [
  { label: "Logic Software Ltd", slug: "lst" },
  { label: "Dhaka", slug: "dhaka" },
  { label: "Banani", slug: "banani" },
  { label: "Development", slug: "devlopment" },
  { label: "Erp", slug: "erp" },
];

export const  permissions= [
  { name: "Only Show", code: "OS" },
  { name: "Editable", code: "Edit" },
];

export const data_list= [
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
];

export const listboxValues1= [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];

export const dropdownValues= [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];

export const multiselectValues1= [
  {name: 'Australia', code: 'AU'},
  {name: 'Brazil', code: 'BR'},
  {name: 'China', code: 'CN'},
  {name: 'Egypt', code: 'EG'},
  {name: 'France', code: 'FR'},
  {name: 'Germany', code: 'DE'},
  {name: 'India', code: 'IN'},
  {name: 'Japan', code: 'JP'},
  {name: 'Spain', code: 'ES'},
  {name: 'United States', code: 'US'}
];

export const selectButtonValues1= [
  {name: 'Option 1', code: 'O1'},
  {name: 'Option 2', code: 'O2'},
  {name: 'Option 3', code: 'O3'},
];

export const selectButtonValues2= [
  {name: 'Option 1', code: 'O1'},
  {name: 'Option 2', code: 'O2'},
  {name: 'Option 3', code: 'O3'},
];

export const cities= [
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
];

export const buttonItems= [
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-times'
  },
  {
    separator:true
  },
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
];

export const statuses1= [
  'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
];

export const statuses2= [
  {label: 'INSTOCK', value: 'instock'},
  {label: 'LOWSTOCK', value: 'lowstock'},
  {label: 'OUTOFSTOCK', value: 'outofstock'}
]

export const representatives= [
  {name: "Amy Elsner", image: 'amyelsner.png'},
  {name: "Anna Fali", image: 'annafali.png'},
  {name: "Asiya Javayant", image: 'asiyajavayant.png'},
  {name: "Bernardo Dominic", image: 'bernardodominic.png'},
  {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
  {name: "Ioni Bowcher", image: 'ionibowcher.png'},
  {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
  {name: "Onyama Limba", image: 'onyamalimba.png'},
  {name: "Stephen Shaw", image: 'stephenshaw.png'},
  {name: "XuXue Feng", image: 'xuxuefeng.png'}
];

export const orderlistValue= [
  {name: 'San Francisco', code: 'SF'},
  {name: 'London', code: 'LDN'},
  {name: 'Paris', code: 'PRS'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Berlin', code: 'BRL'},
  {name: 'Barcelona', code: 'BRC'},
  {name: 'Rome', code: 'RM'},
];

export const cardMenu = [
  { label: 'Save', icon: 'pi pi-fw pi-check' },
  { label: 'Update', icon: 'pi pi-fw pi-refresh' },
  { label: 'Delete', icon: 'pi pi-fw pi-trash' },
];

export const toolbarItems= [
  {
    label: 'Save',
    icon: 'pi pi-check'
  },
  {
    label: 'Update',
    icon: 'pi pi-upload'
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash'
  },
  {
    label: 'Home Page',
    icon: 'pi pi-home'
  },
];

export const nestedRouteItems= [
  {
    label: 'Personal',
    to: '/menu'
  },
  {
    label: 'Seat',
    to: '/menu/seat'
  },
  {
    label: 'Payment',
    to: '/menu/payment'
  },
  {
    label: 'Confirmation',
    to: '/menu/confirmation'
  }
];
export const tieredMenuItems= [
  {
    label:'Customers',
    icon:'pi pi-fw pi-table',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-user-plus',
        items:[
          {
            label:'Customer',
            icon:'pi pi-fw pi-plus'
          },
          {
            label:'Duplicate',
            icon:'pi pi-fw pi-copy'
          },

        ]
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-user-edit'
      }
    ]
  },
  {
    label:'Orders',
    icon:'pi pi-fw pi-shopping-cart',
    items:[
      {
        label:'View',
        icon:'pi pi-fw pi-list'
      },
      {
        label:'Search',
        icon:'pi pi-fw pi-search'
      },

    ]
  },
  {
    label:'Shipments',
    icon:'pi pi-fw pi-envelope',
    items:[
      {
        label:'Tracker',
        icon:'pi pi-fw pi-compass'

      },
      {
        label:'Map',
        icon:'pi pi-fw pi-map-marker'

      },
      {
        label:'Manage',
        icon:'pi pi-fw pi-pencil'
      }
    ]
  },
  {
    label:'Profile',
    icon:'pi pi-fw pi-user',
    items:[
      {
        label:'Settings',
        icon:'pi pi-fw pi-cog'
      },
      {
        label:'Billing',
        icon:'pi pi-fw pi-file'
      }
    ]
  },
  {
    separator:true
  },
  {
    label:'Quit',
    icon:'pi pi-fw pi-sign-out'
  }
];
export const overlayMenuItems= [
  {
    label: 'Save',
    icon: 'pi pi-save'
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash'
  },
  {
    separator: true
  },
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
];
export const menuitems= [
  {
    label:'Customers',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-plus',
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-user-edit'
      }
    ]
  },
  {
    label:'Orders',
    items:[
      {
        label:'View',
        icon:'pi pi-fw pi-list'
      },
      {
        label:'Search',
        icon:'pi pi-fw pi-search'
      },

    ]
  }
];
export const contextMenuItems= [
  {
    label: 'Save',
    icon: 'pi pi-save'
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash'
  },
  {
    separator: true
  },
  {
    label: 'Options',
    icon: 'pi pi-cog'
  },
];
export const megamenuItems= [
  {
    label: 'Fashion', icon: 'pi pi-fw pi-tag',
    items: [
      [
        {
          label: 'Woman',
          items: [{label: 'Woman Item'}, {label: 'Woman Item'}, {label: 'Woman Item'}]
        },
        {
          label: 'Men',
          items: [{label: 'Men Item'}, {label: 'Men Item'}, {label: 'Men Item'}]
        }
      ],
      [
        {
          label: 'Kids',
          items: [{label: 'Kids Item'}, {label: 'Kids Item'} ]
        },
        {
          label: 'Luggage',
          items: [{label: 'Luggage Item'}, {label: 'Luggage Item'}, {label: 'Luggage Item'} ]
        }
      ]
    ]
  },
  {
    label: 'Electronics', icon: 'pi pi-fw pi-desktop',
    items: [
      [
        {
          label: 'Computer',
          items: [{label: 'Computer Item'}, {label: 'Computer Item'}]
        },
        {
          label: 'Camcorder',
          items: [{label: 'Camcorder Item'}, {label: 'Camcorder Item'}, {label: 'Camcorder Item'}, ]
        },
      ],
      [
        {
          label: 'TV',
          items: [{label: 'TV Item'}, {label: 'TV Item'}]
        },
        {
          label: 'Audio',
          items: [{label: 'Audio Item'}, {label: 'Audio Item'}, {label: 'Audio Item'} ]
        }
      ],
      [
        {
          label: 'Sports.7',
          items: [{label: 'Sports.7.1'}, {label: 'Sports.7.2'}]
        }
      ]
    ]
  },
  {
    label: 'Furniture', icon: 'pi pi-fw pi-image',
    items: [
      [
        {
          label: 'Living Room',
          items: [{label: 'Living Room Item'}, {label: 'Living Room Item'}, ]
        },
        {
          label: 'Kitchen',
          items: [{label: 'Kitchen Item'}, {label: 'Kitchen Item'}, {label: 'Kitchen Item'} ]
        }
      ],
      [
        {
          label: 'Bedroom',
          items: [{label: 'Bedroom Item'}, {label: 'Bedroom Item'}]
        },
        {
          label: 'Outdoor',
          items: [{label: 'Outdoor Item'}, {label: 'Outdoor Item'}, {label: 'Outdoor Item'} ]
        }
      ]
    ]
  },
  {
    label: 'Sports', icon: 'pi pi-fw pi-star',
    items: [
      [
        {
          label: 'Basketball',
          items: [{label: 'Basketball Item'}, {label: 'Basketball Item'}]
        },
        {
          label: 'Football',
          items: [{label: 'Football Item'}, {label: 'Football Item'}, {label: 'Football Item'}]
        }
      ],
      [
        {
          label: 'Tennis',
          items: [{label: 'Tennis Item'}, {label: 'Tennis Item'}]
        }
      ]
    ]
  }
];
export const panelMenuitems= [
  {
    label:'Customers',
    icon:'pi pi-fw pi-table',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-user-plus',
        items:[
          {
            label:'Customer',
            icon:'pi pi-fw pi-plus'
          },
          {
            label:'Duplicate',
            icon:'pi pi-fw pi-copy'
          },

        ]
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-user-edit'
      }
    ]
  },
  {
    label:'Orders',
    icon:'pi pi-fw pi-shopping-cart',
    items:[
      {
        label:'View',
        icon:'pi pi-fw pi-list'
      },
      {
        label:'Search',
        icon:'pi pi-fw pi-search'
      },

    ]
  },
  {
    label:'Shipments',
    icon:'pi pi-fw pi-envelope',
    items:[
      {
        label:'Tracker',
        icon:'pi pi-fw pi-compass'

      },
      {
        label:'Map',
        icon:'pi pi-fw pi-map-marker'

      },
      {
        label:'Manage',
        icon:'pi pi-fw pi-pencil'
      }
    ]
  },
  {
    label:'Profile',
    icon:'pi pi-fw pi-user',
    items:[
      {
        label:'Settings',
        icon:'pi pi-fw pi-cog'
      },
      {
        label:'Billing',
        icon:'pi pi-fw pi-file'
      }
    ]
  }
];

export const breadcrumbItems1= [
  {label:'Computer'},
  {label:'Notebook'},
  {label:'Accessories'},
  {label:'Backpacks'},
  {label:'Item'}
];

export const nestedMenuitems= [
  {
    label:'Customers',
    icon:'pi pi-fw pi-table',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-user-plus',
        items:[
          {
            label:'Customer',
            icon:'pi pi-fw pi-plus'
          },
          {
            label:'Duplicate',
            icon:'pi pi-fw pi-copy'
          },

        ]
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-user-edit'
      }
    ]
  },
  {
    label:'Orders',
    icon:'pi pi-fw pi-shopping-cart',
    items:[
      {
        label:'View',
        icon:'pi pi-fw pi-list'
      },
      {
        label:'Search',
        icon:'pi pi-fw pi-search'
      },

    ]
  },
  {
    label:'Shipments',
    icon:'pi pi-fw pi-envelope',
    items:[
      {
        label:'Tracker',
        icon:'pi pi-fw pi-compass'

      },
      {
        label:'Map',
        icon:'pi pi-fw pi-map-marker'

      },
      {
        label:'Manage',
        icon:'pi pi-fw pi-pencil'
      }
    ]
  },
  {
    label:'Profile',
    icon:'pi pi-fw pi-user',
    items:[
      {
        label:'Settings',
        icon:'pi pi-fw pi-cog'
      },
      {
        label:'Billing',
        icon:'pi pi-fw pi-file'
      }
    ]
  },
  {
    label:'Quit',
    icon:'pi pi-fw pi-sign-out'
  }
];

export const customEvents= [
  {
      status: 'Ordered',
      date: '15/10/2020 10:30',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
      image: 'game-controller.jpg'
  },
  {
      status: 'Processing', 
      date: '15/10/2020 14:00', 
      icon: 'pi pi-cog', 
      color: '#673AB7'
  },
  {
      status: 'Shipped', 
      date: '15/10/2020 16:15', 
      icon: 'pi pi-envelope', 
      color: '#FF9800'
  },
  {
      status: 'Delivered', 
      date: '16/10/2020 10:00', 
      icon: 'pi pi-check', 
      color: '#607D8B'
  }
];

export const horizontalEvents= [
  '2020', '2021', '2022', '2023'
];

export const itemsButton= [
  {
    label: 'Update',
    icon: PrimeIcons.REFRESH,
              to: '/update'
  },
  {
    label: 'Delete',
    icon: PrimeIcons.TIMES,
              to: '/delete'
  }
]


