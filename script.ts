
interface ResumeData {
    name: string;
    email: string;
    contact: string;
    education: string;
    experience: string;
    skills: string;
    profilePicture: string; 
}


function generateResume(event: Event) {
    event.preventDefault();

    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

   
    const reader = new FileReader();
    reader.onload = function () {
        const profilePicture = reader.result as string;

        
        const resumeData: ResumeData = {
            name,
            email,
            contact,
            education,
            experience,
            skills,
            profilePicture: profilePicture,
        };

       
        displayResume(resumeData);
    };

    if (profilePictureInput.files && profilePictureInput.files[0]) {
        reader.readAsDataURL(profilePictureInput.files[0]); 
    }
}


function displayResume(data: ResumeData) {
    const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

    
    resumeDisplay.innerHTML = `
        <div class="resume">
            <h2><span contenteditable="true">${data.name}</span></h2>
            <img src="${data.profilePicture}" alt="Profile Picture" style="width: 150px; height: 150px;">
            <p><strong>Email:</strong><span contenteditable="true"> ${data.email}</span></p>
            <p><strong>Contact:</strong><span contenteditable="true"> ${data.contact}</span></p>
            <h3>Education</h3>
            <p><span contenteditable="true">${data.education}</span></p>
            <h3>Experience</h3>
            <p><span contenteditable="true">${data.experience}</span></p>
            <h3>Skills</h3>
            <p><span contenteditable="true">${data.skills}</span></p>
        </div>
    `;
}


const form = document.getElementById('Resume-form') as HTMLFormElement;
form.addEventListener('submit', generateResume);
