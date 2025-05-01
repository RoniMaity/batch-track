import students from "../../../data/students.js";

export default function StudentDetailPage({ params }) {
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    return <div style={{ padding: 24 }}>Student not found.</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{student.name}</h1>
      <p><strong>Roll No:</strong> {student.roll_no}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Graduation Year:</strong> {student.graduation_year}</p>
      <p><strong>Hostel:</strong> {student.hostel}</p>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Phone:</strong> {student.phone_no}</p>
    </div>
  );
}
