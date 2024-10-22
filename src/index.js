// Services
const services = [
    {
        title: 'Custom Circuits Design',
        imgSrc: 'images/hardware_design.jpeg',
        imgAlt: 'Designing Hardware',
        items: [
            'Hardware designs',
            'Embedded Firmware programming'
        ]
    },
    {
        title: 'PCB design and layout',
        imgSrc: 'images/PCB_layout.jpeg',
        imgAlt: 'PCB Layout',
        items: [
            'Multilayer PCB design',
            'High speed PCB design',
        ],
    },
    {
        title: 'Full stack web development',
        imgSrc: 'images/software_design.jpeg',
        imgAlt: 'Designing software',
        items: [
            'Back End development',
            'Front end development',
        ],
    },
];

// Projects portfolio
const projects = [
    { src: 'images/pr1.jpg', alt: 'First Project' },
    { src: 'images/pr2.jpg', alt: 'Second Project' },
    { src: 'images/pr3.jpg', alt: 'Third Project' },
];

// Create fields for contact section
const fields = [
    { label: 'First Name*:', type: 'text', id: 'first_name', placeholder: 'John', required: true },
    { label: 'Last Name:', type: 'text', id: 'last_name', placeholder: 'Smith' },
    { label: 'Company:', type: 'text', id: 'company_name', placeholder: 'company' },
    { label: 'E-Mail*:', type: 'email', id: 'E-mail', placeholder: 'johnsmith@mail.com', required: true },
    { label: 'Phone*:', type: 'tel', id: 'phone', placeholder: '(XXX) XXX-XXXX', required: true },
];

// Create services section
function createServicesSection(arrobj) {
    const servicesSection = document.createElement('section');
    servicesSection.className = 'services';
    servicesSection.id = 'service'; // used to redirect the link in nav bar to service 

    const servicesHeader = document.createElement('h2');
    servicesHeader.textContent = 'Services';
    servicesSection.appendChild(servicesHeader);

    const serviceListDiv = document.createElement('div');
    serviceListDiv.className = 'service_list';

    // Iterate over services to create elements
    arrobj.forEach(function (service) {
        const serviceDiv = document.createElement('div');

        const serviceTitle = document.createElement('h2');
        serviceTitle.textContent = service.title;

        const serviceImage = document.createElement('img');
        serviceImage.src = service.imgSrc;
        serviceImage.alt = service.imgAlt;
        serviceImage.height = 417;
        serviceImage.width = 425;
        const serviceList = document.createElement('ul');
        service.items.forEach(function (item) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            serviceList.appendChild(listItem);
        });
        serviceDiv.appendChild(serviceTitle);
        serviceDiv.appendChild(serviceImage);
        serviceDiv.appendChild(serviceList);
        serviceListDiv.appendChild(serviceDiv);
    });

    servicesSection.appendChild(serviceListDiv);
    return servicesSection;
}

// Create projects section 
function createProjectsSection(arrobj) {
    const projectSection = document.createElement('section');
    projectSection.className = 'project';
    projectSection.id = 'section_project';

    const projectHeader = document.createElement('h2');
    projectHeader.textContent = 'Past Projects';
    projectSection.appendChild(projectHeader);

    const portfolioDiv = document.createElement('div');
    portfolioDiv.className = 'portfolio';

    // Iterate over projects to create images
    arrobj.forEach(function (project) {
        const img = document.createElement('img');
        img.src = project.src;
        img.alt = project.alt;
        img.height = 417;
        img.width = 425;
        portfolioDiv.appendChild(img);
    });

    projectSection.appendChild(portfolioDiv);
    return projectSection;
}

// Create contact section  
const feedbackForm = document.createElement('form');
function createContactSection(arrobj) {
    const contactSection = document.createElement('section');
    contactSection.className = 'contact';
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Have an idea? We got you covered!';
    contactSection.appendChild(contactHeader);
    feedbackForm.id = 'feedback_form';
    feedbackForm.method = 'POST';
    // Create fields
    arrobj.forEach(function (field) {
        const fieldDiv = document.createElement('div');
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        label.style.color = 'orange';
        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.placeholder = field.placeholder;
        if (field.required) input.required = true;
        if (field.pattern) input.pattern = field.pattern;
        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        //adding a class flex to evenly align the elemnts 
        fieldDiv.style.display = 'flex';
        fieldDiv.style.justifyContent = 'space-between';
        feedbackForm.appendChild(fieldDiv);
    });

    // Create description textarea
    const descriptionDiv = document.createElement('div');
    const descriptionLabel = document.createElement('p');
    descriptionLabel.textContent = 'Tell us about your idea';
    const textarea = document.createElement('textarea');
    textarea.id = 'project_description';
    textarea.placeholder = 'Lorem Ipsum...';
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(textarea);
    feedbackForm.appendChild(descriptionDiv);

    // Create file input
    const fileDiv = document.createElement('div');
    const fileLabel = document.createElement('p');
    fileLabel.textContent = 'Attach a Document';
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'specs';

    fileDiv.appendChild(fileLabel);
    fileDiv.appendChild(fileInput);
    feedbackForm.appendChild(fileDiv);

    // Create submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    feedbackForm.appendChild(submitButton);
    // Append form to contact section
    contactSection.appendChild(feedbackForm);

     //Creating a paragraph after the form to meet requirement to modify innerHTML in response to user interaction 
     const confirmationMessage = document.createElement('p');
     confirmationMessage.id = 'confirmation';
     confirmationMessage.style.color = 'green'; // Style for confirmation message
     confirmationMessage.style.margin='auto'; //center the message on the page 
     contactSection.appendChild(confirmationMessage); // Append it to the contact section
    return contactSection;
}

// Adding an event listener on the form 
feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailField = document.getElementById('E-mail');
    const phoneField = document.getElementById('phone')
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Regex for phone validation  (reference : https://www.javascript-coder.com/form-validation/javascript-form-validation-phone-number/)
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!emailRegex.test(emailField.value)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!phoneRegex.test(phoneField.value)) {
        alert('Please enter a valid phone number.');
        return;
    }
    // We update the paragraph on the page if user succesfully submitted
    const confirmationMessage = document.getElementById('confirmation');
    confirmationMessage.innerText = 'Thank you for your submission! We will get back to you soon.';

    // We reset paragraph back to empty after 5 seconds
    setTimeout(() => {
        confirmationMessage.innerText = '';
    }, 5000); 

    alert('Form submitted successfully!');
    // reset the form 
   feedbackForm.reset();
});

// Create the 3 sections for the main body
const servicesSection = createServicesSection(services);
const projectsSection = createProjectsSection(projects);
const contactSection = createContactSection(fields);

// Add event listeners for project images
const portfolioDiv = projectsSection.querySelector('.portfolio');
const projectImages = portfolioDiv.querySelectorAll('img');
projectImages.forEach(function (img) {
    img.addEventListener('click', function (event) {
        const confirmed = confirm('Interested in this project?');
        if (confirmed) {
            alert("Send us an email at NTN@NTN.com and we'll tell you all about it!");
        }
    });
});

// about us 
const aboutUsSection = document.createElement('section');
//checking if the session was created successfully 
if (aboutUsSection) {
    aboutUsSection.id = 'about_us';
    aboutUsSection.innerHTML = '<h2>Who are we?</h2><p> We are a team of engineers who specialize in custom electronic designs and bespoke microcontroller solutions. Our full-cycle services encompass both cutting-edge hardware design and seamless software development, ensuring your vision comes to life with precision and expertise.</p>';
}
// Using DocumentFragment 
const fragment = document.createDocumentFragment();
fragment.appendChild(servicesSection);
fragment.appendChild(projectsSection);
fragment.appendChild(contactSection);
fragment.appendChild(aboutUsSection)

// Get the main element to add these to them 
const mainElement = document.querySelector('main');
// Append the DocumentFragment to the main element
mainElement.appendChild(fragment);


// using DOM traversal last child to style the form input button
const submit_button = feedbackForm.lastChild;
submit_button.style.backgroundColor = '#eab676';
submit_button.style.fontSize = '1.2em';
submit_button.style.margin = 'auto';


// making the images focus when users hover the mouse over them then back to normal
const imagesElements = mainElement.querySelectorAll('img');
imagesElements.forEach(image => {
    image.addEventListener('mouseover', function (event) {
        event.preventDefault();
        let focusedImage = event.target;
        focusedImage.classList.add('focused');
    });
    image.addEventListener('mouseout', function (event) {
        event.preventDefault();
        let focusedImage = event.target;
        focusedImage.classList.remove('focused');
    })
});