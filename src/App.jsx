export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);

  // In HTML: <element onclick="myScript">
  // In JavaScript: object.onclick = function(){myScript};
  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map((student) => (
          <li
            key={student.name}
            onClick={() => alert(`${student.age}, ${student.grade}`)} // alert는 문자열만 받기 때문에 ${}과 `을 써야한다.
          >
            {student.name}
          </li>
        ))}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
      </ul>
    </div>
  );
}
