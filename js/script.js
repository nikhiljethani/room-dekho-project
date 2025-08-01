// Dummy data for demonstration. In a real application, this would come from a backend.
const properties = [
    {
        id: 'prop1',
        name: 'Modern PG for Boys',
        type: 'pg',
        gender: 'boys',
        area: 'malviya-nagar',
        rent: 7500,
        description: 'Spacious and fully furnished PG with all amenities, including AC, attached washroom, and daily cleaning. Located in a prime area with easy access to markets and transport. Ideal for students and working professionals.',
        amenities: ['wifi', 'ac', 'cleaning', 'geyser'],
        contact: '+919876543210',
        address: '123, Gandhi Path, Malviya Nagar, Jaipur',
        college: 'manipal-university',
        lat: 26.8500,
        lng: 75.8000,
        image: 'https://placehold.co/400x200/00796b/e0f2f1?text=Property+Image'
    },
    {
        id: 'prop2',
        name: 'Cozy Flat for Girls',
        type: 'flat',
        gender: 'girls',
        area: 'vaishali-nagar',
        rent: 12000,
        description: 'A charming 2 BHK flat perfect for students or young professionals. Features a spacious living area, two bedrooms, and a fully equipped kitchen. Secure locality with 24/7 security and parking available.',
        amenities: ['parking', 'security', 'geyser'],
        contact: '+919988776655',
        address: '456, Amrapali Circle, Vaishali Nagar, Jaipur',
        college: 'rajasthan-university',
        lat: 26.9124,
        lng: 75.7873,
        image: 'https://placehold.co/400x200/00796b/e0f2f1?text=Property+Image'
    },
    {
        id: 'prop3',
        name: 'Shared Room (Co-ed)',
        type: 'hostel',
        gender: 'both',
        area: 'c-scheme',
        rent: 5000,
        description: 'Budget-friendly shared accommodation in a vibrant hostel. Includes daily meals, laundry service, and common study areas. Great for meeting new people and close to city center attractions.',
        amenities: ['wifi', 'cleaning', 'meals'],
        contact: '+919123456789',
        address: '789, Ashok Marg, C-Scheme, Jaipur',
        college: 'jecrc-university',
        lat: 26.9000,
        lng: 75.8200,
        image: 'https://placehold.co/400x200/00796b/e0f2f1?text=Property+Image'
    },
    {
        id: 'prop4',
        name: 'Spacious Room for Boys',
        type: 'room',
        gender: 'boys',
        area: 'mansarovar',
        rent: 6000,
        description: 'Large single room with attached bathroom, ideal for students. Close to public transport and local markets.',
        amenities: ['wifi', 'geyser'],
        contact: '+918765432109',
        address: '101, Vijay Path, Mansarovar, Jaipur',
        college: 'poornima-university',
        lat: 26.8600,
        lng: 75.7600,
        image: 'https://placehold.co/400x200/00796b/e0f2f1?text=Property+Image'
    },
    {
        id: 'prop5',
        name: 'Luxury PG for Girls',
        type: 'pg',
        gender: 'girls',
        area: 'jagatpura',
        rent: 9000,
        description: 'Premium PG with all modern facilities, including AC rooms, healthy meals, and 24/7 security. Near Manipal University.',
        amenities: ['wifi', 'ac', 'cleaning', 'security', 'meals'],
        contact: '+917654321098',
        address: '202, Model Town, Jagatpura, Jaipur',
        college: 'manipal-university',
        lat: 26.8700,
        lng: 75.8800,
        image: 'https://placehold.co/400x200/00796b/e0f2f1?text=Property+Image'
    },
    {
        id: 'prop6',
        name: 'Shared Flat for Professionals',
        type: 'flat',
        gender: 'both',
        area: 'tonk-road',
        rent: 15000,
        description: '3 BHK flat available for sharing, ideal for working professionals. Fully furnished with power backup.',
        amenities: ['wifi', 'parking', 'ac', 'security'],
        contact: '+919012345678',
        address: '303, Gopalpura Bypass, Tonk Road, Jaipur',
        college: 'none', // For working professionals or general
        lat: 26.8800,
        lng: 75.8100,
        image: 'https://placehold.co/400x200/00796b/e0f2f1?text=Property+Image'
    }
];

const messServices = [
    {
        id: 'mess1',
        name: 'Healthy Home Cooked Meals',
        type: 'tiffin',
        area: 'malviya-nagar',
        price: 2500,
        description: 'Daily tiffin service with fresh, hygienic, and delicious home-style food. Customizable plans available.',
        contact: '+919876543211',
        image: 'https://placehold.co/400x200/004d40/a7ffeb?text=Mess+Service'
    },
    {
        id: 'mess2',
        name: 'Student Mess Point',
        type: 'mess',
        area: 'jagatpura',
        price: 3000,
        description: 'Economical mess service providing breakfast, lunch, and dinner. Special student discounts.',
        contact: '+919123456780',
        image: 'https://placehold.co/400x200/004d40/a7ffeb?text=Mess+Service'
    },
    {
        id: 'mess3',
        name: 'Delicious Tiffin Service',
        type: 'tiffin',
        area: 'c-scheme',
        price: 2800,
        description: 'Variety of North Indian and South Indian meals, delivered fresh daily.',
        contact: '+918877665544',
        image: 'https://placehold.co/400x200/004d40/a7ffeb?text=Mess+Service'
    }
];

// Dummy data for college mates and groups
const collegeStudents = [
    {
        id: 'student1',
        name: 'Anjali Sharma',
        college: 'manipal-university',
        course: 'B.Tech CSE',
        year: '2nd',
        gender: 'female',
        budget: '5000-10000',
        lookingFor: ['roommate', 'pg'],
        preferredAreas: ['malviya-nagar', 'jagatpura'],
        about: 'Looking for a friendly roommate to share a PG or flat. Prefer quiet study environment.',
        contact: '+919876543212'
    },
    {
        id: 'student2',
        name: 'Rahul Singh',
        college: 'jecrc-university',
        course: 'B.Tech ECE',
        year: '3rd',
        gender: 'male',
        budget: '0-5000',
        lookingFor: ['hostel', 'roommate'],
        preferredAreas: ['mansarovar', 'tonk-road'],
        about: 'Seeking a hostel or shared room near college. Easy-going and adjustable.',
        contact: '+919988776656'
    }
];

const collegeGroups = [
    {
        id: 'group1',
        name: 'Manipal Flatmates (Girls)',
        college: 'manipal-university',
        gender: 'girls',
        members: 2,
        lookingFor: 1,
        budget: '10000-15000',
        area: 'jagatpura',
        description: 'Two girls looking for a third flatmate for a 3 BHK flat near Manipal University. Friendly and cooperative.',
        contact: '+919876543213'
    },
    {
        id: 'group2',
        name: 'JECRC Boys Hostel Group',
        college: 'jecrc-university',
        gender: 'boys',
        members: 3,
        lookingFor: 1,
        budget: '0-5000',
        area: 'mansarovar',
        description: 'Group of 3 boys seeking one more person to share a 4-bed room in a hostel. Fun-loving and disciplined.',
        contact: '+919988776657'
    }
];

const rentReminders = [
    {
        id: 'rem1',
        property: 'Modern PG for Boys',
        dueDate: '2024-08-01',
        amount: 7500,
        status: 'upcoming'
    },
    {
        id: 'rem2',
        property: 'Cozy Flat for Girls',
        dueDate: '2024-07-25',
        amount: 12000,
        status: 'overdue'
    },
    {
        id: 'rem3',
        property: 'Shared Room (Co-ed)',
        dueDate: '2024-07-01',
        amount: 5000,
        status: 'paid'
    }
];

// --- UI Logic ---

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// --- Filter and Search Functions ---

function renderProperties(filteredProperties) {
    const grid = document.getElementById('mainPropertiesGrid');
    grid.innerHTML = ''; // Clear existing properties

    if (filteredProperties.length === 0) {
        grid.innerHTML = '<p class="text-center col-span-full text-gray-600">No properties found matching your criteria.</p>';
        return;
    }

    filteredProperties.forEach(property => {
        const amenitiesHtml = property.amenities.map(amenity => {
            let icon = '';
            switch (amenity) {
                case 'wifi': icon = '<i class="fas fa-wifi"></i>'; break;
                case 'parking': icon = '<i class="fas fa-car"></i>'; break;
                case 'ac': icon = '<i class="fas fa-snowflake"></i>'; break;
                case 'geyser': icon = '<i class="fas fa-tint"></i>'; break;
                case 'cleaning': icon = '<i class="fas fa-broom"></i>'; break;
                case 'security': icon = '<i class="fas fa-shield-alt"></i>'; break;
                case 'meals': icon = '<i class="fas fa-utensils"></i>'; break;
            }
            return `<span>${icon} ${amenity.charAt(0).toUpperCase() + amenity.slice(1)}</span>`;
        }).join('');

        grid.innerHTML += `
            <div class="property-card">
                <img src="${property.image}" alt="${property.name}">
                <div class="property-card-content">
                    <h3>${property.name}</h3>
                    <p>${property.description.substring(0, 100)}...</p>
                    <div class="property-info">
                        <span><i class="fas fa-map-marker-alt"></i> ${property.area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                        <span><i class="fas fa-users"></i> ${property.gender === 'boys' ? 'Boys Only' : property.gender === 'girls' ? 'Girls Only' : 'Co-ed'}</span>
                        <span><i class="fas fa-home"></i> ${property.type.toUpperCase()}</span>
                        ${amenitiesHtml}
                    </div>
                    <div class="property-price">₹ ${property.rent.toLocaleString()}/month</div>
                    <div class="property-actions">
                        <button class="btn btn-primary" onclick="openPropertyModal(${JSON.stringify(property).replace(/"/g, '&quot;')})">View Details</button>
                        <button class="btn btn-secondary" onclick="openMapModal({name: '${property.name}', lat: ${property.lat}, lng: ${property.lng}})">
                            <i class="fas fa-map-marker-alt"></i> Map
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function applyAllFilters() {
    const searchInput = document.getElementById('sidebarSearchInput').value.toLowerCase();
    const areaFilter = document.getElementById('sidebarAreaFilter').value;
    const typeFilter = document.getElementById('sidebarTypeFilter').value;
    const genderFilter = document.getElementById('sidebarGenderFilter').value;
    const priceFilter = document.getElementById('sidebarPriceFilter').value;
    const collegeFilter = document.getElementById('sidebarCollegeFilter').value;
    const selectedAmenities = Array.from(document.querySelectorAll('input[name="sidebarAmenities"]:checked')).map(cb => cb.value);

    let filtered = properties.filter(property => {
        const matchesSearch = property.name.toLowerCase().includes(searchInput) ||
                              property.description.toLowerCase().includes(searchInput) ||
                              property.area.toLowerCase().includes(searchInput);

        const matchesArea = areaFilter === '' || property.area === areaFilter;
        const matchesType = typeFilter === '' || property.type === typeFilter;
        const matchesGender = genderFilter === '' || property.gender === genderFilter;
        const matchesCollege = collegeFilter === '' || property.college === collegeFilter;

        const matchesPrice = priceFilter === '' || (function() {
            const [min, max] = priceFilter.split('-').map(Number);
            if (priceFilter.includes('+')) {
                return property.rent >= min;
            }
            return property.rent >= min && property.rent <= max;
        })();

        const matchesAmenities = selectedAmenities.every(amenity => property.amenities.includes(amenity));

        return matchesSearch && matchesArea && matchesType && matchesGender && matchesPrice && matchesCollege && matchesAmenities;
    });

    renderProperties(filtered);
}

function performTopSearch() {
    const topSearchValue = document.getElementById('topSearchInput').value.toLowerCase();
    // This search can be broad, covering both properties and mess services
    // For properties, it will directly filter and render
    // For mess services, it will switch to the mess section and filter there.

    // First, try to filter properties
    let filteredProps = properties.filter(property => {
        return property.name.toLowerCase().includes(topSearchValue) ||
               property.description.toLowerCase().includes(topSearchValue) ||
               property.area.toLowerCase().includes(topSearchValue) ||
               property.type.toLowerCase().includes(topSearchValue);
    });
    renderProperties(filteredProps); // Render properties first

    // Then, consider filtering mess services (and potentially switching to that tab)
    const messSection = document.getElementById('mess');
    const propertiesSection = document.getElementById('properties-listing');

    const filteredMess = messServices.filter(mess => {
        return mess.name.toLowerCase().includes(topSearchValue) ||
               mess.description.toLowerCase().includes(topSearchValue) ||
               mess.area.toLowerCase().includes(topSearchValue) ||
               mess.type.toLowerCase().includes(topSearchValue);
    });

    // If mess results are more relevant or if properties are empty, switch to mess tab
    if (filteredProps.length === 0 && filteredMess.length > 0) {
        propertiesSection.style.display = 'none';
        messSection.style.display = 'block';
        renderMessServices(filteredMess);
        // Also update the active tab for mess
        document.querySelectorAll('.mess-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelector('.mess-tab[onclick="showMessCategory(\'all\')"]').classList.add('active');
    } else {
        propertiesSection.style.display = 'block';
        messSection.style.display = 'block'; // Keep mess visible if it has content
        renderMessServices(messServices); // Render all mess services by default if no specific mess search
    }
}


function resetFilters() {
    document.getElementById('sidebarSearchInput').value = '';
    document.getElementById('sidebarAreaFilter').value = '';
    document.getElementById('sidebarTypeFilter').value = '';
    document.getElementById('sidebarGenderFilter').value = '';
    document.getElementById('sidebarPriceFilter').value = '';
    document.getElementById('sidebarCollegeFilter').value = '';
    document.querySelectorAll('input[name="sidebarAmenities"]:checked').forEach(cb => cb.checked = false);
    document.getElementById('topSearchInput').value = ''; // Clear top search bar too
    
    // Reset main property tabs to 'All Properties' active
    document.querySelectorAll('#properties-listing .type-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('#properties-listing .type-tab[data-property-type="all"]').classList.add('active');

    applyAllFilters(); // Re-render with no filters
    filterMainProperties('all'); // Ensure all properties are shown
}

function filterMainProperties(type) {
    // Update active tab for main properties
    document.querySelectorAll('#properties-listing .type-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`#properties-listing .type-tab[data-property-type="${type}"]`).classList.add('active');

    let filtered = properties;
    if (type !== 'all') {
        filtered = properties.filter(property => property.type === type);
    }
    // Apply sidebar filters on top of this type filter
    const searchInput = document.getElementById('sidebarSearchInput').value.toLowerCase();
    const areaFilter = document.getElementById('sidebarAreaFilter').value;
    const genderFilter = document.getElementById('sidebarGenderFilter').value;
    const priceFilter = document.getElementById('sidebarPriceFilter').value;
    const collegeFilter = document.getElementById('sidebarCollegeFilter').value;
    const selectedAmenities = Array.from(document.querySelectorAll('input[name="sidebarAmenities"]:checked')).map(cb => cb.value);

    filtered = filtered.filter(property => {
        const matchesSearch = property.name.toLowerCase().includes(searchInput) ||
                              property.description.toLowerCase().includes(searchInput) ||
                              property.area.toLowerCase().includes(searchInput);
        const matchesArea = areaFilter === '' || property.area === areaFilter;
        const matchesGender = genderFilter === '' || property.gender === genderFilter;
        const matchesCollege = collegeFilter === '' || property.college === collegeFilter;
        const matchesPrice = priceFilter === '' || (function() {
            const [min, max] = priceFilter.split('-').map(Number);
            if (priceFilter.includes('+')) {
                return property.rent >= min;
            }
            return property.rent >= min && property.rent <= max;
        })();
        const matchesAmenities = selectedAmenities.every(amenity => property.amenities.includes(amenity));

        return matchesSearch && matchesArea && matchesGender && matchesPrice && matchesCollege && matchesAmenities;
    });

    renderProperties(filtered);
}

function renderMessServices(filteredMess) {
    const grid = document.getElementById('messGrid');
    grid.innerHTML = ''; // Clear existing mess items

    if (filteredMess.length === 0) {
        grid.innerHTML = '<p class="text-center col-span-full text-gray-600">No mess or tiffin services found matching your criteria.</p>';
        return;
    }

    filteredMess.forEach(mess => {
        grid.innerHTML += `
            <div class="mess-card">
                <img src="${mess.image}" alt="${mess.name}">
                <div class="mess-card-content">
                    <h3>${mess.name}</h3>
                    <p>${mess.description.substring(0, 100)}...</p>
                    <div class="mess-info">
                        <span><i class="fas fa-utensils"></i> ${mess.type === 'tiffin' ? 'Tiffin Service' : 'Mess'}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${mess.area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                        <span><i class="fas fa-truck"></i> Delivery</span>
                    </div>
                    <div class="mess-price">₹ ${mess.price.toLocaleString()}/month</div>
                    <div class="mess-actions">
                        <button class="btn btn-primary">Order Now</button>
                        <button class="btn btn-secondary"><i class="fas fa-phone"></i> Contact</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function showMessCategory(category) {
    document.querySelectorAll('.mess-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.mess-tab[onclick="showMessCategory('${category}')"]`).classList.add('active');

    let filtered = messServices;
    if (category !== 'all') {
        filtered = messServices.filter(mess => mess.type === category);
    }
    renderMessServices(filtered);
}

// --- College Matching Functions ---

function filterByCollege() {
    const college = document.getElementById('collegeSelect').value;
    const gender = document.getElementById('collegeGenderFilter').value;
    const budget = document.getElementById('collegeBudgetFilter').value;

    // Filter properties near college
    let filteredCollegeProperties = properties.filter(prop => {
        const matchesCollege = college === '' || prop.college === college;
        const matchesGender = gender === '' || prop.gender === gender || prop.gender === 'both'; // 'both' matches any gender filter
        const matchesBudget = budget === '' || (function() {
            const [min, max] = budget.split('-').map(Number);
            if (budget.includes('+')) {
                return prop.rent >= min;
            }
            return prop.rent >= min && prop.rent <= max;
        })();
        return matchesCollege && matchesGender && matchesBudget;
    });
    renderPropertiesForCollege(filteredCollegeProperties, 'collegePropertiesGrid');

    // Filter fellow students
    let filteredStudents = collegeStudents.filter(student => {
        const matchesCollege = college === '' || student.college === college;
        const matchesGender = gender === '' || student.gender === gender;
        const matchesBudget = budget === '' || (function() {
            const [min, max] = budget.split('-').map(Number);
            if (budget.includes('+')) {
                return student.budget.split('-')[0] >= min;
            }
            return student.budget.split('-')[0] >= min && student.budget.split('-')[0] <= max;
        })();
        return matchesCollege && matchesGender && matchesBudget;
    });
    renderStudents(filteredStudents, 'collegeStudentsGrid');

    // Filter room sharing groups
    let filteredGroups = collegeGroups.filter(group => {
        const matchesCollege = college === '' || group.college === college;
        const matchesGender = gender === '' || group.gender === gender || group.gender === 'both';
        const matchesBudget = budget === '' || (function() {
            const [min, max] = budget.split('-').map(Number);
            if (budget.includes('+')) {
                return group.budget.split('-')[0] >= min;
            }
            return group.budget.split('-')[0] >= min && group.budget.split('-')[0] <= max;
        })();
        return matchesCollege && matchesGender && matchesBudget;
    });
    renderGroups(filteredGroups, 'collegeGroupsGrid');
}

function renderPropertiesForCollege(filteredProperties, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    if (filteredProperties.length === 0) {
        grid.innerHTML = '<p class="text-center col-span-full text-gray-600">No properties found near this college matching criteria.</p>';
        return;
    }
    filteredProperties.forEach(property => {
        const amenitiesHtml = property.amenities.map(amenity => {
            let icon = '';
            switch (amenity) {
                case 'wifi': icon = '<i class="fas fa-wifi"></i>'; break;
                case 'parking': icon = '<i class="fas fa-car"></i>'; break;
                case 'ac': icon = '<i class="fas fa-snowflake"></i>'; break;
                case 'geyser': icon = '<i class="fas fa-tint"></i>'; break;
                case 'cleaning': icon = '<i class="fas fa-broom"></i>'; break;
                case 'security': icon = '<i class="fas fa-shield-alt"></i>'; break;
                case 'meals': icon = '<i class="fas fa-utensils"></i>'; break;
            }
            return `<span>${icon} ${amenity.charAt(0).toUpperCase() + amenity.slice(1)}</span>`;
        }).join('');

        grid.innerHTML += `
            <div class="property-card">
                <img src="${property.image}" alt="${property.name}">
                <div class="property-card-content">
                    <h3>${property.name}</h3>
                    <p>${property.description.substring(0, 100)}...</p>
                    <div class="property-info">
                        <span><i class="fas fa-map-marker-alt"></i> ${property.area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                        <span><i class="fas fa-users"></i> ${property.gender === 'boys' ? 'Boys Only' : property.gender === 'girls' ? 'Girls Only' : 'Co-ed'}</span>
                        <span><i class="fas fa-home"></i> ${property.type.toUpperCase()}</span>
                        ${amenitiesHtml}
                    </div>
                    <div class="property-price">₹ ${property.rent.toLocaleString()}/month</div>
                    <div class="property-actions">
                        <button class="btn btn-primary" onclick="openPropertyModal(${JSON.stringify(property).replace(/"/g, '&quot;')})">View Details</button>
                        <button class="btn btn-secondary" onclick="openMapModal({name: '${property.name}', lat: ${property.lat}, lng: ${property.lng}})">
                            <i class="fas fa-map-marker-alt"></i> Map
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderStudents(filteredStudents, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    if (filteredStudents.length === 0) {
        grid.innerHTML = '<p class="text-center col-span-full text-gray-600">No fellow students found matching your criteria.</p>';
        return;
    }
    filteredStudents.forEach(student => {
        grid.innerHTML += `
            <div class="student-card property-card">
                <div class="property-card-content">
                    <h3>${student.name}</h3>
                    <p><strong>College:</strong> ${document.querySelector(`#collegeSelect option[value="${student.college}"]`).textContent}</p>
                    <p><strong>Course:</strong> ${student.course}, ${student.year} Year</p>
                    <p><strong>Looking For:</strong> ${student.lookingFor.map(lf => lf.charAt(0).toUpperCase() + lf.slice(1)).join(', ')}</p>
                    <p><strong>Budget:</strong> ₹ ${student.budget}</p>
                    <p>${student.about.substring(0, 100)}...</p>
                    <div class="property-actions">
                        <button class="btn btn-primary" onclick="alert('Contact: ${student.contact}')">Contact ${student.name.split(' ')[0]}</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderGroups(filteredGroups, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    if (filteredGroups.length === 0) {
        grid.innerHTML = '<p class="text-center col-span-full text-gray-600">No room sharing groups found matching your criteria.</p>';
        return;
    }
    filteredGroups.forEach(group => {
        grid.innerHTML += `
            <div class="group-card property-card">
                <div class="property-card-content">
                    <h3>${group.name}</h3>
                    <p><strong>College:</strong> ${document.querySelector(`#collegeSelect option[value="${group.college}"]`).textContent}</p>
                    <p><strong>Gender:</strong> ${group.gender.charAt(0).toUpperCase() + group.gender.slice(1)}</p>
                    <p><strong>Members:</strong> ${group.members} + ${group.lookingFor} more</p>
                    <p><strong>Budget:</strong> ₹ ${group.budget}</p>
                    <p><strong>Area:</strong> ${group.area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                    <p>${group.description.substring(0, 100)}...</p>
                    <div class="property-actions">
                        <button class="btn btn-primary" onclick="alert('Contact: ${group.contact}')">Join Group</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function showCollegeSection(sectionId) {
    document.querySelectorAll('.college-section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('.college-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.college-tab[onclick="showCollegeSection('${sectionId}')"]`).classList.add('active');

    filterByCollege(); // Re-apply filters for the active college section
}

// --- Rent Reminders Functions ---

function renderReminders(filteredReminders, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    if (filteredReminders.length === 0) {
        grid.innerHTML = '<p class="text-center col-span-full text-gray-600">No reminders found for this category.</p>';
        return;
    }
    filteredReminders.forEach(reminder => {
        const statusClass = reminder.status === 'overdue' ? 'overdue' : reminder.status === 'paid' ? 'paid' : '';
        const dueDateText = reminder.status === 'paid' ? `Paid on: ${reminder.dueDate}` : `Due: ${reminder.dueDate}`;
        grid.innerHTML += `
            <div class="reminder-card ${statusClass}">
                <div class="reminder-card-content">
                    <h4>${reminder.property}</h4>
                    <p>Amount: <strong>₹ ${reminder.amount.toLocaleString()}</strong></p>
                    <p class="due-date">${dueDateText}</p>
                    <div class="reminder-actions">
                        ${reminder.status === 'upcoming' || reminder.status === 'overdue' ? `<button class="btn btn-primary" onclick="markRentPaid('${reminder.id}')">Mark as Paid</button>` : ''}
                        ${reminder.status !== 'paid' ? `<button class="btn btn-secondary" onclick="setReminder('${reminder.id}')">Set Reminder</button>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
}

function showReminderSection(sectionId) {
    document.querySelectorAll('.reminder-section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId + 'Reminders').classList.add('active'); // Assuming IDs are e.g., 'upcomingReminders'

    document.querySelectorAll('.reminder-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.reminder-tab[onclick="showReminderSection('${sectionId}')"]`).classList.add('active');

    const filtered = rentReminders.filter(rem => rem.status === sectionId || (sectionId === 'upcoming' && rem.status === 'upcoming') || (sectionId === 'overdue' && rem.status === 'overdue') || (sectionId === 'history' && rem.status === 'paid'));
    renderReminders(filtered, sectionId + 'RemindersGrid');
}

function markRentPaid(reminderId) {
    const reminderIndex = rentReminders.findIndex(rem => rem.id === reminderId);
    if (reminderIndex !== -1) {
        rentReminders[reminderIndex].status = 'paid';
        rentReminders[reminderIndex].dueDate = new Date().toISOString().slice(0, 10); // Mark paid today
        alert(`Rent for ${rentReminders[reminderIndex].property} marked as paid!`);
        showReminderSection('upcoming'); // Refresh the view
    }
}

function setReminder(reminderId) {
    alert('Reminder functionality would be implemented here, e.g., integrating with calendar or sending notifications.');
}

// --- Modals Logic ---

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Property Details Modal
function openPropertyModal(property) {
    const modalBody = document.getElementById('propertyModalBody');
    modalBody.innerHTML = `
        <div class="property-detail-card">
            <img src="${property.image}" alt="${property.name}">
            <div class="property-detail-content">
                <h3>${property.name}</h3>
                <div class="location-price">
                    <span><i class="fas fa-map-marker-alt"></i> ${property.area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                    <span class="price">₹ ${property.rent.toLocaleString()}/month</span>
                </div>
                <p class="property-detail-description">${property.description}</p>
                
                <div class="property-detail-amenities">
                    <h4>Amenities</h4>
                    <div class="amenities-list">
                        ${property.amenities.map(amenity => {
                            let icon = '';
                            switch (amenity) {
                                case 'wifi': icon = '<i class="fas fa-wifi"></i>'; break;
                                case 'parking': icon = '<i class="fas fa-car"></i>'; break;
                                case 'ac': icon = '<i class="fas fa-snowflake"></i>'; break;
                                case 'geyser': icon = '<i class="fas fa-tint"></i>'; break;
                                case 'cleaning': icon = '<i class="fas fa-broom"></i>'; break;
                                case 'security': icon = '<i class="fas fa-shield-alt"></i>'; break;
                                case 'meals': icon = '<i class="fas fa-utensils"></i>'; break;
                            }
                            return `<span>${icon} ${amenity.charAt(0).toUpperCase() + amenity.slice(1)}</span>`;
                        }).join('')}
                    </div>
                </div>

                <div class="property-detail-contact">
                    <h4>Contact Details</h4>
                    <p><i class="fas fa-phone"></i> ${property.contact}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${property.address}</p>
                </div>

                <div class="property-detail-actions">
                    <button class="btn btn-primary" onclick="openBookingModal('${property.id}', '${property.name}')">Book Now</button>
                    <button class="btn btn-secondary" onclick="openReviewModal('${property.id}', 'property')">Write a Review</button>
                    <button class="btn btn-secondary" onclick="openReviewsDisplayModal('${property.id}')">View Reviews</button>
                </div>
            </div>
        </div>
    `;
    openModal('propertyModal');
}

function closePropertyModal() {
    closeModal('propertyModal');
}

// Booking Modal
function openBookingModal(propertyId, propertyName) {
    document.getElementById('bookingPropertyId').value = propertyId;
    document.getElementById('bookingModalTitle').textContent = `Book: ${propertyName}`;
    openModal('bookingModal');
}

function closeBookingModal() {
    closeModal('bookingModal');
    document.getElementById('bookingForm').reset(); // Clear form
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // In a real app, send this data to a server
    const formData = new FormData(this);
    const bookingData = Object.fromEntries(formData.entries());
    
    // For demonstration, display a summary
    const summaryDiv = document.getElementById('bookingSummary');
    summaryDiv.innerHTML = `
        <h4 class="text-lg font-semibold text-green-700 mt-4">Booking Summary:</h4>
        <p><strong>Property:</strong> ${document.getElementById('bookingModalTitle').textContent.replace('Book: ', '')}</p>
        <p><strong>Name:</strong> ${bookingData.tenantName}</p>
        <p><strong>Contact:</strong> ${bookingData.tenantContact}</p>
        <p><strong>Move-in Date:</strong> ${bookingData.moveInDate}</p>
        <p class="text-green-600 font-bold">Booking Confirmed! Owner will contact you soon.</p>
    `;
    summaryDiv.style.display = 'block'; // Show summary
    // Optionally, disable form after submission or close modal after a delay
    // setTimeout(() => closeModal('bookingModal'), 3000);
});

// Review Modal
let currentRating = 0;
let categoryRatings = {};

function setupStarRating(containerParam, isOverall = false) {
    let container;
    // Check if containerParam is a string (ID) or a DOM element
    if (typeof containerParam === 'string') {
        container = document.getElementById(containerParam);
    } else {
        container = containerParam; // Assume it's already a DOM element
    }

    // If container is still null, log an error and exit
    if (!container) {
        console.error('Star rating container not found:', containerParam);
        return;
    }

    const stars = container.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            stars.forEach((s, index) => {
                if (index < this.dataset.rating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });

        star.addEventListener('mouseout', function() {
            if (!isOverall || currentRating === 0) {
                stars.forEach(s => s.classList.remove('selected'));
            } else if (isOverall) {
                stars.forEach((s, index) => {
                    if (index < currentRating) {
                        s.classList.add('selected');
                    } else {
                        s.classList.remove('selected');
                    }
                });
            }
        });

        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            if (isOverall) {
                currentRating = rating;
                document.getElementById('ratingValue').value = currentRating;
            } else {
                const category = container.dataset.category;
                categoryRatings[category] = rating;
            }
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });
}

function openReviewModal(id, type) {
    document.getElementById('reviewPropertyId').value = id;
    document.getElementById('reviewType').value = type;
    document.getElementById('reviewModalTitle').textContent = `Write a Review for ${type === 'property' ? 'Property' : 'Mess'}`;
    
    // Reset form and ratings
    document.getElementById('reviewForm').reset();
    currentRating = 0;
    categoryRatings = {};
    document.getElementById('overallRating').querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
    document.querySelectorAll('.category-rating').forEach(cat => cat.querySelectorAll('.star').forEach(s => s.classList.remove('selected')));

    openModal('reviewModal');
}

function closeReviewModal() {
    closeModal('reviewModal');
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // In a real app, send this review data to a server
    const formData = new FormData(this);
    const reviewData = Object.fromEntries(formData.entries());
    reviewData.overallRating = currentRating;
    reviewData.categoryRatings = categoryRatings; // Add category ratings
    
    if (currentRating === 0) {
        alert('Please provide an overall rating.');
        return;
    }

    alert('Review submitted successfully! Thank you for your feedback.');
    console.log('Review Data:', reviewData);
    closeReviewModal();
});

// Reviews Display Modal
function renderReviews(reviews, summaryId, listId) {
    const summaryDiv = document.getElementById(summaryId);
    const listDiv = document.getElementById(listId);
    listDiv.innerHTML = '';

    if (reviews.length === 0) {
        summaryDiv.innerHTML = '<p class="text-center text-gray-600">No reviews yet.</p>';
        listDiv.innerHTML = '';
        return;
    }

    const totalRating = reviews.reduce((sum, r) => sum + r.overallRating, 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);
    const starsHtml = '★'.repeat(Math.round(avgRating)) + '☆'.repeat(5 - Math.round(avgRating));

    summaryDiv.innerHTML = `
        <div class="overall-rating">${avgRating}</div>
        <div class="stars-display">${starsHtml}</div>
        <div class="total-reviews">${reviews.length} Reviews</div>
    `;

    reviews.forEach(review => {
        const reviewStars = '★'.repeat(review.overallRating) + '☆'.repeat(5 - review.overallRating);
        listDiv.innerHTML += `
            <div class="review-item">
                <div class="reviewer-info">
                    <span class="reviewer-name">${review.reviewerName}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">${reviewStars}</div>
                <p class="review-text">${review.reviewText}</p>
                <div class="review-pros-cons">
                    ${review.pros ? `<div class="pros"><h5>Pros:</h5><p>${review.pros}</p></div>` : ''}
                    ${review.cons ? `<div class="cons"><h5>Cons:</h5><p>${review.cons}</p></div>` : ''}
                </div>
            </div>
        `;
    });
}

function openReviewsDisplayModal(propertyId) {
    // Dummy reviews for demonstration. In a real app, fetch reviews for propertyId
    const dummyReviews = [
        {
            reviewerName: 'Priya S.',
            date: '2024-07-20',
            overallRating: 5,
            reviewText: 'Excellent PG! Clean rooms, good food, and very supportive owner. Highly recommended for girls.',
            pros: 'Cleanliness, Food, Owner behavior',
            cons: 'None'
        },
        {
            reviewerName: 'Amit K.',
            date: '2024-07-15',
            overallRating: 4,
            reviewText: 'Good value for money. Location is great, but sometimes cleaning is a bit slow.',
            pros: 'Location, Price',
            cons: 'Cleaning service can be improved'
        }
    ];
    document.getElementById('reviewsDisplayTitle').textContent = `Reviews for Property ID: ${propertyId}`;
    renderReviews(dummyReviews, 'reviewsSummary', 'reviewsList');
    openModal('reviewsDisplayModal');
}

function closeReviewsDisplayModal() {
    closeModal('reviewsDisplayModal');
}

// Map Modal
let mapInstance = null; // To store the Leaflet map instance

function openMapModal(location) {
    document.getElementById('mapModalTitle').textContent = `Location: ${location.name}`;
    document.getElementById('mapInfo').innerHTML = `Showing location for <strong>${location.name}</strong>`;
    openModal('mapModal');

    // Initialize map after modal is displayed to ensure the map container has dimensions
    setTimeout(() => {
        if (mapInstance) {
            mapInstance.remove(); // Remove existing map instance if any
        }
        mapInstance = L.map('map').setView([location.lat, location.lng], 16); // 16 is zoom level

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance);

        L.marker([location.lat, location.lng]).addTo(mapInstance)
            .bindPopup(`<b>${location.name}</b><br>Exact location.`)
            .openPopup();
        
        mapInstance.invalidateSize(); // Invalidate size to fix tile loading issues in modals
    }, 100); // Small delay to ensure modal is rendered
}

function closeMapModal() {
    closeModal('mapModal');
    if (mapInstance) {
        mapInstance.remove(); // Clean up map instance
        mapInstance = null;
    }
}

// Join Community Modal
function openJoinCommunityModal() {
    openModal('joinCommunityModal');
}

function closeJoinCommunityModal() {
    closeModal('joinCommunityModal');
    document.getElementById('joinCommunityForm').reset();
}

document.getElementById('joinCommunityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const studentData = Object.fromEntries(formData.entries());
    studentData.lookingFor = Array.from(this.querySelectorAll('input[name="lookingFor"]:checked')).map(cb => cb.value);
    studentData.preferredAreas = Array.from(this.querySelectorAll('input[name="preferredAreas"]:checked')).map(cb => cb.value);

    alert('Your community profile has been submitted! You will be connected with relevant students.');
    console.log('Student Community Data:', studentData);
    closeJoinCommunityModal();
});


// Initial rendering on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProperties(properties); // Render all properties initially
    renderMessServices(messServices); // Render all mess services initially
    filterByCollege(); // Render initial college matching data
    showReminderSection('upcoming'); // Show upcoming reminders by default

    // Setup star rating for review modal
    setupStarRating('overallRating', true);
    document.querySelectorAll('.category-rating').forEach(container => {
        setupStarRating(container); // Pass the element directly instead of its ID
    });
});