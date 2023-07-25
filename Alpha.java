import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Hospital {
    private List<Patient> patients;
    private List<Doctor> doctors;
    private List<Nurse> nurses;
    private List<WardStaff> wardStaff;
    private List<AdmissionRecord> admissionRecords;
    private List<DischargeRecord> dischargeRecords;
    private List<MedicalRecord> medicalRecords;

    public Hospital() {
        patients = new ArrayList<>();
        doctors = new ArrayList<>();
        nurses = new ArrayList<>();
        wardStaff = new ArrayList<>();
        admissionRecords = new ArrayList<>();
        dischargeRecords = new ArrayList<>();
        medicalRecords = new ArrayList<>();
    }

    // Rest of the code...
}


public class Patient {
    private int patientId;
    private String name;
    private int age;
    private String gender;

    public Patient(int patientId, String name, int age, String gender) {
        this.patientId = patientId;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Getters and setters for the attributes
    // (Omitted for brevity)
}

public class Doctor {
    private int doctorId;
    private String name;
    private String specialization;

    public Doctor(int doctorId, String name, String specialization) {
        this.doctorId = doctorId;
        this.name = name;
        this.specialization = specialization;
    }

    // Getters and setters for the attributes
    // (Omitted for brevity)
}

public class Nurse {
    private int nurseId;
    private String name;

    public Nurse(int nurseId, String name) {
        this.nurseId = nurseId;
        this.name = name;
    }

    // Getters and setters for the attributes
    // (Omitted for brevity)
}

public class WardStaff {
    private int staffId;
    private String name;

    public WardStaff(int staffId, String name) {
        this.staffId = staffId;
        this.name = name;
    }

    // Getters and setters for the attributes
    // (Omitted for brevity)
}

public class AdmissionRecord {
    private int recordId;
    private int patientId;
    private LocalDate admissionDate;
    private int roomId;

    public AdmissionRecord(int recordId, int patientId, LocalDate admissionDate, int roomId) {
        this.recordId = recordId;
        this.patientId = patientId;
        this.admissionDate = admissionDate;
        this.roomId = roomId;
    }

    // Getters and setters for the attributes
    // (Omitted for brevity)
}

public class DischargeRecord {
    private int recordId;
    private int patientId;
    private LocalDate dischargeDate;

    public DischargeRecord(int recordId, int patientId, LocalDate dischargeDate) {
        this.recordId = recordId;
        this.patientId = patientId;
        this.dischargeDate = dischargeDate;
    }

    // Getters and setters for the attributes
    // (Omitted for brevity)
}

public class MedicalRecord {
    private int recordId;
    private int patientId;
    // Other attributes related to medical records can be added here

    public MedicalRecord(int recordId, int patientId) {
        this.recordId = recordId;
        this.patientId = patientId;
    }

    // Getters and setters for the attributes
    // (Omitted for brevity)
}

    // Methods to perform hospital operations
    // Add patient to the hospital
    public void addPatient(Patient patient) {
        patients.add(patient);
    }

    // Admit patient to a room
    public void admitPatient(int patientId, int roomId) {
        LocalDate admissionDate = LocalDate.now();
        AdmissionRecord admissionRecord = new AdmissionRecord(admissionRecords.size() + 1, patientId, admissionDate, roomId);
        admissionRecords.add(admissionRecord);
    }

    // Add doctor to the hospital
    public void addDoctor(Doctor doctor) {
        doctors.add(doctor);
    }

    // Add nurse to the hospital
    public void addNurse(Nurse nurse) {
        nurses.add(nurse);
    }

    // Add ward staff to the hospital
    public void addWardStaff(WardStaff wardStaff) {
        this.wardStaff.add(wardStaff);
    }

    // Discharge patient from the hospital
    public void dischargePatient(int patientId) {
        // Assuming a patient can have multiple admission records, we discharge the patient from the latest admission.
        for (int i = admissionRecords.size() - 1; i >= 0; i--) {
            AdmissionRecord record = admissionRecords.get(i);
            if (record.getPatientId() == patientId) {
                admissionRecords.remove(i);
                // Add discharge record if needed
                DischargeRecord dischargeRecord = new DischargeRecord(dischargeRecords.size() + 1, patientId, LocalDate.now());
                dischargeRecords.add(dischargeRecord);
                break;
            }
        }
    }

    // Add medical record for a patient
    public void addMedicalRecord(MedicalRecord medicalRecord) {
        medicalRecords.add(medicalRecord);
    }

    // Get patient's medical record
    public MedicalRecord getMedicalRecordByPatientId(int patientId) {
        for (MedicalRecord record : medicalRecords) {
            if (record.getPatientId() == patientId) {
                return record;
            }
        }
        return null;
    }

    // Other methods for medical equipment, medical supply management, etc. can be added similarly.

    public static void main(String[] args) {
        Hospital hospital = new Hospital();

        // Create entities
        Patient patient1 = new Patient(1, "John Doe", 35, "Male");
        // Add the patient to the hospital
        hospital.addPatient(patient1);

        // Create doctor entities
        Doctor doctor1 = new Doctor(101, "Dr. Smith", "Cardiology");
        Doctor doctor2 = new Doctor(102, "Dr. Johnson", "Pediatrics");
        // Add doctors to the hospital
        hospital.addDoctor(doctor1);
        hospital.addDoctor(doctor2);

        // Create nurse entities
        Nurse nurse1 = new Nurse(201, "Nurse Anne");
        Nurse nurse2 = new Nurse(202, "Nurse David");
        // Add nurses to the hospital
        hospital.addNurse(nurse1);
        hospital.addNurse(nurse2);

        // Create ward staff entities
        WardStaff wardStaff1 = new WardStaff(301, "John WardStaff");
        WardStaff wardStaff2 = new WardStaff(302, "Mary WardStaff");
        // Add ward staff to the hospital
        hospital.addWardStaff(wardStaff1);
        hospital.addWardStaff(wardStaff2);

        // Other entity creations and additions to the hospital can be done in a similar fashion.

        // Admit patient to a room
        int roomId = 101; // Assuming room with ID 101 is available for admission
        hospital.admitPatient(patient1.getPatientId(), roomId);

        // Discharge patient from the hospital
        hospital.dischargePatient(patient1.getPatientId());

        // Get patient's medical record
        MedicalRecord medicalRecord = hospital.getMedicalRecordByPatientId(patient1.getPatientId());

        // Add medical record for the patient
        if (medicalRecord == null) {
            medicalRecord = new MedicalRecord(hospital.medicalRecords.size() + 1, patient1.getPatientId());
            hospital.addMedicalRecord(medicalRecord);
        }
    }



