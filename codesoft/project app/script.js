function addProject() {
    const projectName = document.getElementById('projectName').value;
    const deadline = document.getElementById('deadline').value;

    if (projectName && deadline) {
        const projectList = document.getElementById('projectList');

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectDetails = document.createElement('div');
        projectDetails.innerHTML = `<strong>${projectName}</strong> - Deadline: ${deadline}`;
        projectDiv.appendChild(projectDetails);

        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.onclick = function () {
            projectDiv.remove();
        };
        projectDiv.appendChild(deleteBtn);

        projectList.appendChild(projectDiv);

        // Clear input fields
        document.getElementById('projectName').value = '';
        document.getElementById('deadline').value = '';
    }
}

