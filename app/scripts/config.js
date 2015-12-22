// PROFILE FIELDS

var profileFields = [

		{
			name: 'firstName',
			type: 'text',
			label: 'First Name',
			order: 1,
			public: true
		},
		{
			name: 'lastName',
			type: 'text',
			label: 'Last Name',
			order: 2,
			public: true
		},
		{
			name: 'gender',
			type: 'radio',
			label: 'Gender',
			options: ['Male', 'Female'],
			order: 3,
			public: true
		},
		{
			name: 'dob',
			type: 'date',
			label: 'Date of Birth',
			order: 4
		},
		{
			name: 'email',
			type: 'email',
			label: 'Email',
			order: 5
		},
		{
			name: 'address',
			type: 'text',
			label: 'Address',
			order: 6
		},
		{
			name: 'suburb',
			type: 'text',
			label: 'Suburb',
			order: 7,
			public: true
		},
		{
			name: 'state',
			type: 'select',
			label: 'State',
			options: ['VIC','NSW','QLD','ACT','WA','SA','TAS'],
			order: 8,
			public: true
		}
			
	]

// SERVICE FIELDS

var serviceFields = [
		{
			name: 'name',
			type: 'text',
			label: 'Service',
			order: 1
		},		
		{
			name: 'level',
			type: 'radio',
			label: 'Level',
			options: ["Begginer", "Intermediate", "Advanced"],
			order: 2
		},	
		{
			name: 'description',
			type: 'textarea',
			label: 'Description',
			order: 3
		},		
	]



app.constant('configData', {

	'profileFields': profileFields,
	'serviceFields': serviceFields

})