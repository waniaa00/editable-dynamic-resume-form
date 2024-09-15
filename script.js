function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePictureInput = document.getElementById('profilePicture');
    var reader = new FileReader();
    reader.onload = function () {
        var profilePicture = reader.result;
        var resumeData = {
            name: name,
            email: email,
            contact: contact,
            education: education,
            experience: experience,
            skills: skills,
            profilePicture: profilePicture,
        };
        displayResume(resumeData);
    };
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
}
function displayResume(data) {
    var resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = "\n        <div class=\"resume\">\n            <h2><span contenteditable=\"true\">".concat(data.name, "</span></h2>\n            <img src=\"").concat(data.profilePicture, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px;\">\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(data.email, "</span></p>\n            <p><strong>Contact:</strong><span contenteditable=\"true\"> ").concat(data.contact, "</span></p>\n            <h3>Education</h3>\n            <p><span contenteditable=\"true\">").concat(data.education, "</span></p>\n            <h3>Experience</h3>\n            <p><span contenteditable=\"true\">").concat(data.experience, "</span></p>\n            <h3>Skills</h3>\n            <p><span contenteditable=\"true\">").concat(data.skills, "</span></p>\n        </div>\n    ");
}
var form = document.getElementById('Resume-form');
form.addEventListener('submit', generateResume);
