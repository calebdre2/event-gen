type EventInfo = {
	name: string
	host: string
	about: About
	date: Date
	startTime: string
	endTime: string
	location: string
	routeInfo: RouteInfo
	foodServed: string[]
	packetPickupInfo: PacketPickupInfo
	paymentMethods: PaymentMethod[]
	registrationInfo: RegistrationInfo
	contactInfo: ContactInfo
	parkingInfo: string
	sponsorInfo: SponsorInfo
	bibPickupInfo: BibPickupInfo
	organizationInfo: string
}

type About = {
	title: string
	description: string
}
type PacketPickupInfo = {
	startdate: Date
	endDate: Date
	timeStart: string
	timeEnd: string
	location: string
}
type BibPickupInfo = {
	videoUrl?: string
	description: string
}
type SponsorInfo = {
	message: string
	pitch?: string
	sponsors: Sponsor[]
}
type RouteInfo = {
	location: string
	mapImage: string
	mapLink?: string
	description: string
}

type RegistrationProduct = {
	name: string
	registerSameDayCost?: number
	image: string
	tiers: {
		name: string
		price: number
		participantType: ParticipantType
		validUntil: Date
		gifts: string[]
	}[]
}

type PaymentMethod = {
	method: string
	instructions: string
}

type ParticipantType = 'Adult' | 'Youth'


type RegistrationInfo = {
	products: RegistrationProduct[]
	disclaimer: string
}

type ContactInfo = {
	name: string
	email: string
	phone: string
	whatsapp: string
}

type Sponsor = {
	name: string
	logo: string
}

export let eventInfo: EventInfo = {
	name: 'Masquerade 5K',
	host: 'STRIDE592',
	date: new Date('2023-12-03'),
	startTime: '6:30 AM',
	endTime: '11 AM',
	location: 'Seawall Band Stand',
	about: {
		title: "HIP HIP HOORAY FOR THE HOLIDAYS!",
		description: `STRIDE592 holiday Masquerade 5K walk/run will take place on Sunday, December 3, 2023 at 6:30 AM. Kick off the holiday in a fun way, get decked out and festive for this 5K. Proceeds from this race will be donated to bring holiday joy and cheer to the children at XXXXX. 
	
		The 3.1 mile course takes you from the Seawall Band Stand down High Street and along the holiday festive Main Street.  Culminating at the Christmas Village’s displays with traditional Christmas lighted figures, Santa, angels, and many local favorites before heading back up the avenue for an exciting finish on the Seawall. 
		
		The Masquerade 5K will serve up pepperpot, homemade style bread, ginger beer and other holiday refreshments and will feature photos with Bam Bam Sally, a holiday costume contest, and much more!
		
		 The Masquerade 5K will be especially popular among families and groups of friends.
		Go for your best time or enjoy a leisurely walk through the route with friends and family.`,
	},
	foodServed: ['Pepperpot', 'Homemade Bread', 'Ginger Beer'],
	routeInfo: {
		description: `Starting at the Seawall Bandstand, exit south on to High street, moving along for ½ mile down to Main St the Bank of Guyana and lopping back up main street. Right onto Young St, left onto Camp Street for an exciting finish at the Seawall.`,
		location: 'Seawall Bandstand- Seawall Rd',
		mapImage: 'images/class/map.png',
	},

	packetPickupInfo: {
		timeStart: '11:30 AM',
		timeEnd: '6:00 PM',
		location: 'Strides592 Office',
		startdate: new Date('2023-11-30'),
		endDate: new Date('2023-12-02')
	},
	paymentMethods: [
		{ method: 'Credit Card', instructions: 'Click the Register Button...' },
		{
			method: 'MMG Online or In Person',
			instructions: `Click the Register Button
            Create your free Race Roster account (18+ years or older)
            Click to sign-up for yourself or for someone else
            Fill in all of the required information
            In the PROMO CODE FIELD, Enter the code M527624
            Add Another Participant or Continue
            Follow steps to credit card payment page, your total will $0.00 
            Submit your registration and use MMG to process your payment
            Use your confirmation form to pay MMG online or in person
            Please keep your ALL registration and payment confirmations as you will need this to collect your race package.`
		}
	],
	bibPickupInfo: {
		description: `Pre-registered runners and walkers can pick-up bibs at  Date and Time TBA
Strollers are welcome with the understanding they will start behind all other runners and push in a safe and prudent manner.`
	},
	registrationInfo: {
		products: [
			{
				name: '5K Timed',
				image: 'images/class/class1.jpg',
				tiers: [
					{
						name: 'Early Bird',
						price: 25,
						participantType: 'Adult',
						validUntil: new Date('2023-10-31'),
						gifts: [
							'5k T-Shirt',
							'Commemorative Bib',
							'Finish Line Photo',
							"Finisher's Medal",
							'Free Refreshments'
						]
					},
					{
						name: 'Regular',
						price: 30,
						participantType: 'Adult',
						validUntil: new Date('2023-11-25'),
						gifts: [
							'5k T-Shirt',
							'Commemorative Bib',
							'Finish Line Photo',
							"Finisher's Medal",
							'Free Refreshments'
						]
					},
					{
						name: 'Late',
						price: 45,
						participantType: 'Adult',
						validUntil: new Date('2023-11-30'),
						gifts: [
							'5k T-Shirt',
							'Commemorative Bib',
							'Finish Line Photo',
							"Finisher's Medal",
							'Free Refreshments'
						]
					}
				]
			},
			{
				name: '5K Untimed',
				image: 'images/class/class2.jpg',
				registerSameDayCost: 35,
				tiers: [
					{
						name: 'Early Bird',
						price: 20,
						participantType: 'Adult',
						validUntil: new Date('2023-10-31'),
						gifts: [
							'5k T-Shirt',
							'Commemorative Bib',
							'Finish Line Photo',
							"Finisher's Medal",
							'Free Refreshments'
						]
					},
					{
						name: 'Regular',
						price: 25,
						participantType: 'Adult',
						validUntil: new Date('2023-11-25'),
						gifts: [
							'5k T-Shirt',
							'Commemorative Bib',
							'Finish Line Photo',
							"Finisher's Medal",
							'Free Refreshments'
						]
					},
					{
						name: 'Late',
						price: 30,
						participantType: 'Adult',
						validUntil: new Date('2023-11-30'),
						gifts: [
							'5k T-Shirt',
							'Commemorative Bib',
							'Finish Line Photo',
							"Finisher's Medal",
							'Free Refreshments'
						]
					}
				]
			}
		],
		disclaimer:
			'Registration fees and donations cannot be refunded. Your event dollars are put to work immediately and enable STRIDE592 to continue to support critical NGO’s in our community.',
	},
	contactInfo: {
		whatsapp: '640-2444',
		name: 'Onika',
		email: 'info@stride592.com',
		phone: '592 -640- 2444'
	},
	parkingInfo: `- Plenty of free parking will be available along the streets close to the seawall.
        - Police officers and volunteers will be directing traffic and parking.
        - If you can carpool, please do – for parking reasons, but also for the environment!
        - Note, the route will be closed @ 6am on race day – please plan accordingly.`,
	sponsorInfo: {
		message: `We welcome new sponsors. Please contact us at info@stride592.com with questions regarding how you and or your company can be involved with the Masquerade 5K or our organization.
        Thank you to all of our sponsors for your generous support!`,
		pitch: `Become a sponsor of STRIDE592 Masquerade 5K Walk-Run-Walk! Our inaugural holiday race, we aim to elevate the importance of moving for health, wellness and community with an exciting calendar of races. Our ideal sponsors are mission driven companies that want to market their products or services.  We look forward to building a family of sponsors to partner with us for years to drive the improvement of the quality of life- wellness - social connections for all of Guyana. 

        Our events generate brand awareness, marketing and direct access to an enthusiastic audience of hundreds of potential customers.  Join us! For more information, please contact info@stride592.com
`,
		sponsors: [
			{ name: 'Sponsor1', logo: 'Logo1' },
			{ name: 'Sponsor2', logo: 'Logo2' }
		]
	},
	organizationInfo: `STRIDE592: Building on our popular Guyanese culture of “School Sports'', brings people together and promotes health, wellness, and a lifestyle of movement for the people of Guyana. Founded and registered in 2022 with local businesses and community support, STRIDE592 sponsors year-round fun walking and running events to enhance the exposure of the community to the health, social and economic benefits of MOVING.

    STRIDE592: events put FUN in moving, are vibrant, community health focused, and all about showing you a great time while exploring the scenic outdoors of Guyana. Our goal is to give everyone whether a seasoned athlete, first-time participant or tourist alike the chance to win their race by providing them an amazing experience from the time they register until the moment they reach the finish line and celebration after party. 
    
    STRIDE592: events will all follow a similar structure of utilizing an outdoor public space as its anchor base and then extend onto a scenic street route based on city approval. Events will be with 5K (3.1 miles) or 10K (6.1 miles) in length and will be professionally staffed with race production, medical and security teams.
    
    STRIDE592: will collaborate with local and national businesses and sectors, community organizations, schools, and government offices to have diverse participants and community support`
}
