document.addEventListener("DOMContentLoaded", () => {
    const hospital = new Hospital(); // Create an instance of the Hospital class

    // Get the form containers
    const patientForm = document.querySelector(".patient-form");
    const doctorForm = document.querySelector(".doctor-form");
    const nurseForm = document.querySelector(".nurse-form");
    const wardStaffForm = document.querySelector(".ward-staff-form");
    const admissionRecordForm = document.querySelector(".admission-record-form");
    const dischargeRecordForm = document.querySelector(".discharge-record-form");

    // Get the list containers
    const patientList = document.querySelector(".patient-list");
    const doctorList = document.querySelector(".doctor-list");
    const nurseList = document.querySelector(".nurse-list");
    const wardStaffList = document.querySelector(".ward-staff-list");
    const admissionRecordsList = document.querySelector(".admission-records-list");
    const dischargeRecordsList = document.querySelector(".discharge-records-list");

    // Function to switch between windows (form and list containers)
    function switchWindow(activeWindow, inactiveWindows) {
        activeWindow.style.display = "block";
        inactiveWindows.forEach(window => window.style.display = "none");
    }

    // Show patient form and hide other windows
    const patientTile = document.querySelector(".patient-tile");
    patientTile.addEventListener("click", () => {
        switchWindow(patientForm, [doctorForm, nurseForm, wardStaffForm, admissionRecordForm, dischargeRecordForm,
            doctorList, nurseList, wardStaffList, admissionRecordsList, dischargeRecordsList
        ]);
    });

    // Show doctor form and hide other windows
    const doctorTile = document.querySelector(".doctor-tile");
    doctorTile.addEventListener("click", () => {
        switchWindow(doctorForm, [patientForm, nurseForm, wardStaffForm, admissionRecordForm, dischargeRecordForm,
            patientList, nurseList, wardStaffList, admissionRecordsList, dischargeRecordsList
        ]);
    });

    // Show nurse form and hide other windows
    const nurseTile = document.querySelector(".nurse-tile");
    nurseTile.addEventListener("click", () => {
        switchWindow(nurseForm, [patientForm, doctorForm, wardStaffForm, admissionRecordForm, dischargeRecordForm,
            patientList, doctorList, wardStaffList, admissionRecordsList, dischargeRecordsList
        ]);
    });

    // Show ward staff form and hide other windows
    const wardStaffTile = document.querySelector(".ward-staff-tile");
    wardStaffTile.addEventListener("click", () => {
        switchWindow(wardStaffForm, [patientForm, doctorForm, nurseForm, admissionRecordForm, dischargeRecordForm,
            patientList, doctorList, nurseList, admissionRecordsList, dischargeRecordsList
        ]);
    });

    // Show admission record form and hide other windows
    const admissionRecordsTile = document.querySelector(".admission-records-tile");
    admissionRecordsTile.addEventListener("click", () => {
        switchWindow(admissionRecordForm, [patientForm, doctorForm, nurseForm, wardStaffForm, dischargeRecordForm,
            patientList, doctorList, nurseList, wardStaffList, dischargeRecordsList
        ]);
    });

    // Show discharge record form and hide other windows
    const dischargeRecordsTile = document.querySelector(".discharge-records-tile");
    dischargeRecordsTile.addEventListener("click", () => {
        switchWindow(dischargeRecordForm, [patientForm, doctorForm, nurseForm, wardStaffForm, admissionRecordForm,
            patientList, doctorList, nurseList, wardStaffList, admissionRecordsList
        ]);
    });
     // Function to add a patient to the table
     function addPatientToTable(patient) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${patient.patientId}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
        `;
        patientsTableBody.appendChild(newRow);
    }

    // Function to populate the patient table when the page loads
    function populatePatientTable() {
        const patients = hospital.patients;
        patientsTableBody.innerHTML = ""; // Clear existing rows
        patients.forEach((patient) => {
            addPatientToTable(patient);
        });
    }

    // Function to add entities to the table (for doctors, nurses, and ward staff)
    function addToTable(entity, tableBody) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${entity.id}</td>
            <td>${entity.name}</td>
            ${entity.specialization ? `<td>${entity.specialization}</td>` : ''}
        `;
        tableBody.appendChild(newRow);
    }

     // Function to populate the doctors table when the page loads
     function populateDoctorsTable() {
        const doctors = hospital.doctors;
        doctorsTableBody.innerHTML = ""; // Clear existing rows
        doctors.forEach((doctor) => {
            addToTable(doctor, doctorsTableBody);
        });
    }

    // Function to add a doctor to the table
    function addDoctor(name, specialization) {
        const doctorId = new Date().getTime(); // Generate a unique doctor ID (not ideal in production, use a better approach)
        const doctor = { id: doctorId, name, specialization };
        hospital.addDoctor(doctor); // Add the doctor to the hospital

        // Add the doctor to the table
        addToTable(doctor, doctorsTableBody);
    }

    // Function to populate the nurses table when the page loads
    function populateNursesTable() {
        const nurses = hospital.nurses;
        nursesTableBody.innerHTML = ""; // Clear existing rows
        nurses.forEach((nurse) => {
            addToTable(nurse, nursesTableBody);
        });
    }

     // Function to add a nurse to the table
     function addNurse(name) {
        const nurseId = new Date().getTime(); // Generate a unique nurse ID (not ideal in production, use a better approach)
        const nurse = { id: nurseId, name };
        hospital.addNurse(nurse); // Add the nurse to the hospital

        // Add the nurse to the table
        addToTable(nurse, nursesTableBody);
    }

    // Function to populate the ward staff table when the page loads
    function populateWardStaffTable() {
        const wardStaff = hospital.wardStaff;
        wardStaffTableBody.innerHTML = ""; // Clear existing rows
        wardStaff.forEach((staff) => {
            addToTable(staff, wardStaffTableBody);
        });
    }

    // Function to add ward staff to the table
    function addWardStaff(name) {
        const staffId = new Date().getTime(); // Generate a unique ward staff ID (not ideal in production, use a better approach)
        const wardStaff = { id: staffId, name };
        hospital.addWardStaff(wardStaff); // Add the ward staff to the hospital

        // Add the ward staff to the table
        addToTable(wardStaff, wardStaffTableBody);
    }

    // Function to populate the admission records table when the page loads
    function populateAdmissionRecordsTable() {
        const admissionRecords = hospital.admissionRecords;
        admissionRecordsTableBody.innerHTML = ""; // Clear existing rows
        admissionRecords.forEach((record) => {
            addRecordToTable(record, admissionRecordsTableBody);
        });
    }

    // Function to add a record to the table
    function addRecordToTable(record, tableBody) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${record.recordId}</td>
            <td>${record.patientId}</td>
            <td>${record.admissionDate}</td>
            <td>${record.roomId}</td>
        `;
        tableBody.appendChild(newRow);
    }

     // Function to populate the discharge records table when the page loads
     function populateDischargeRecordsTable() {
        const dischargeRecords = hospital.dischargeRecords;
        dischargeRecordsTableBody.innerHTML = ""; // Clear existing rows
        dischargeRecords.forEach((record) => {
            addRecordToTable(record, dischargeRecordsTableBody);
        });
    }

    // Populate patient table when the page loads
    populatePatientTable();

    // Populate doctors table when the page loads
    populateDoctorsTable();

    // Populate nurses table when the page loads
    populateNursesTable();

    // Populate ward staff table when the page loads
    populateWardStaffTable();

    // Populate admission records and discharge records tables when the page loads
    populateAdmissionRecordsTable();
    populateDischargeRecordsTable();

     // Form submission for adding a doctor
     const addDoctorForm = document.getElementById("add-doctor-form");
     addDoctorForm.addEventListener("submit", (event) => {
         event.preventDefault();
 
         // Get form values
         const name = document.getElementById("doctor-name").value;
         const specialization = document.getElementById("specialization").value;
 
         // Add the doctor
         addDoctor(name, specialization);
 
         // Clear form fields
         addDoctorForm.reset();
     });
 
     // Form submission for adding a nurse
     const addNurseForm = document.getElementById("add-nurse-form");
     addNurseForm.addEventListener("submit", (event) => {
         event.preventDefault();
 
         // Get form values
         const name = document.getElementById("nurse-name").value;
 
         // Add the nurse
         addNurse(name);
 
         // Clear form fields
         addNurseForm.reset();
     });
 
     // Form submission for adding ward staff
     const addWardStaffForm = document.getElementById("add-ward-staff-form");
     addWardStaffForm.addEventListener("submit", (event) => {
         event.preventDefault();
 
         // Get form values
         const name = document.getElementById("ward-staff-name").value;
 
         // Add the ward staff
         addWardStaff(name);
 
         // Clear form fields
         addWardStaffForm.reset();
     });
 
     // Form submission for adding an admission record
     const addAdmissionRecordForm = document.getElementById("add-admission-record-form");
     addAdmissionRecordForm.addEventListener("submit", (event) => {
         event.preventDefault();
 
         // Get form values
         const patientId = parseInt(document.getElementById("patient-id").value);
         const roomId = parseInt(document.getElementById("room-id").value);
 
         // Admit the patient
         hospital.admitPatient(patientId, roomId);
 
         // Clear form fields
         addAdmissionRecordForm.reset();
 
         // Refresh admission records list
         populateAdmissionRecordsTable();
     });
 
     // Form submission for adding a discharge record
     const addDischargeRecordForm = document.getElementById("add-discharge-record-form");
     addDischargeRecordForm.addEventListener("submit", (event) => {
         event.preventDefault();
 
         // Get form values
         const patientId = parseInt(document.getElementById("patient-id-discharge").value);
 
         // Discharge the patient
         hospital.dischargePatient(patientId);
 
         // Clear form fields
         addDischargeRecordForm.reset();
 
         // Refresh discharge records list
         populateDischargeRecordsTable();
     });
 
     
 
     // Show patient form and hide other windows
     patientTile.addEventListener("click", () => {
         switchWindow(patientForm, [patientList, doctorList, nurseList, wardStaffList, admissionRecordsList, dischargeRecordsList]);
     });
 
     // Show patient list and hide other windows
     patientList.addEventListener("click", () => {
         switchWindow(patientList, [patientForm, doctorList, nurseList, wardStaffList, admissionRecordsList, dischargeRecordsList]);
     });
 
     // Show doctor list and hide other windows
     doctorTile.addEventListener("click", () => {
         switchWindow(doctorList, [patientForm, patientList, nurseList, wardStaffList, admissionRecordsList, dischargeRecordsList]);
     });
 
     // Show nurse list and hide other windows
     nurseTile.addEventListener("click", () => {
         switchWindow(nurseList, [patientForm, patientList, doctorList, wardStaffList, admissionRecordsList, dischargeRecordsList]);
     });
 
     // Show ward staff list and hide other windows
     wardStaffTile.addEventListener("click", () => {
         switchWindow(wardStaffList, [patientForm, patientList, doctorList, nurseList, admissionRecordsList, dischargeRecordsList]);
     });
 
     // Show admission records list and hide other windows
     admissionRecordsTile.addEventListener("click", () => {
         switchWindow(admissionRecordsList, [patientForm, patientList, doctorList, nurseList, wardStaffList, dischargeRecordsList]);
     });
 
     // Show discharge records list and hide other windows
     dischargeRecordsTile.addEventListener("click", () => {
         switchWindow(dischargeRecordsList, [patientForm, patientList, doctorList, nurseList, wardStaffList, admissionRecordsList]);
     });
 });
 
