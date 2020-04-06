function showProject(project) {
    var projectHtml = document.getElementById(project).innerHTML;
    var projectItem = document.getElementById("project-item");
    var projectsList = document.getElementById("projects-list");
    projectItem.innerHTML = projectHtml;
    projectItem.style.display = "block";
    projectsList.style.display = "none";
}

function showProjectsList() {
    var projectsList = document.getElementById("projects-list");
    var projectItem = document.getElementById("project-item");
    projectItem.style.display = "none";
    projectsList.style.display = "block";
}
