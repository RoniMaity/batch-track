import students from "../../../data/students.js";

export default function StudentDetailPage({ params }) {
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    return <div style={{ padding: 24 }}>Student not found.</div>;
  }

  console.log(student)

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{student.name}</h1>
    </div>
  );
}
