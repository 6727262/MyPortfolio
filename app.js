function showProjectDetails(project) {
  const details = document.getElementById("project-details");
  if (project === "parkingSoftware") {
    details.innerHTML = `
          <div class="ss">  <h3>Basic Parking Software</h3>
            <pre class="aa">Project Title: Basic Parking Management System
Description:
I developed a Basic Parking Management System that allows users to input vehicle details and store them in local storage.
 This simple application focuses solely on capturing and retaining essential information about parked vehicles.

Vehicle Entry: Users can enter their vehicle details (e.g., license plate number) when they arrive at the parking facility. 
This information is stored in the browser's local storage.
Data Retrieval: Users can view the list of parked vehicles stored in local storage.
Technologies Used:
Frontend: HTML and CSS for creating a basic user interface.JavaScript: For handling user input and managing local storage.
Learning Experience:
Gained hands-on experience in using local storage for data persistence in web applications.Developed skills in JavaScript for 
managing user interactions and data.

Conclusion:This project provided me with a practical understanding of how to manage simple data storage in a web application.
 I look forward to expanding this project with additional features in the future.</pre><div>
        `;
  } else if (project === "sqlSales") {
    details.innerHTML = `
           <div class="mm"> <h3>SQL-Based Project</h3>
           <pre class="aa">
           <div id="vv"><h3>Project-1</h3>
1) Created a relational database system using SQL to manage and link data across clients, employees, 
departments, and project tasks, improving data organization and accessibility. 

 Developed complex SQL queries and views to generate real-time project reports, track employee performance, 
 and analyze department workloads, enhancing decision-making and operational efficiency. 

 Built stored procedures and triggers to automate data updates and enforce business rules, 
 ensuring data consistency and streamlining workflow management.
<div>
<div id="yy"><h3>project-2</h3>
2) Created an SQL database to manage salesman, customer, and order information, improving data organization
 and tracking. 

Wrote SQL queries to generate sales reports, monitor order statuses, and analyze customer data. 

Automated order updates using stored procedures and triggers, enhancing workflow efficiency. </pre><div><div>
        `;
  }
}
let cl = document.querySelector("#pp");
cl.addEventListener("click", (e) => {
  cl.style.visibility = "hidden";
  setTimeout(() => {
    cl.style.visibility = "visible";
  }, 3000);
  console.log(e);
});

let pp = document.querySelector(".qq");
pp.addEventListener("click", (e) => {
  pp.style.visibility = "hidden";
  setTimeout(() => {
    pp.style.visibility = "visible";
  }, 3000);
  console.log(e);
});

let form=document.querySelector("#ff")
let input=document.getElementsByTagName("input")
let arr=Array.from(input)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data=new FormData(form)
let finaldata=Object.fromEntries(data)
console.log(finaldata);
arr.map((e)=>{
    
e.value=""
})
})
let qa=document.querySelector(".q")
document.addEventListener('DOMContentLoaded', () => {
    const qaa = document.getElementById('transformText');

    qaa.addEventListener('click', () => {
        qaa.classList.toggle('transformed');
    });
});