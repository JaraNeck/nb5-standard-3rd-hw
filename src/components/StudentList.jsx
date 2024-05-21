// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList(
  /* 필요한 props를 여기에 전달하세요 */ { filteredStudents }
) {
  return (
    <ul>
      {/* 여기에 학생 목록을 표시하는 로직을 작성하세요. */}
      {/* ex: 홍길동 (20세) - A등급 */}
      {/* key를 index로 사용해도 되는경우
      1. 정적이거나 변경의 여지가 없을 때
      2. id가 없을때
      3. 리스트가 절대로 재정렬되거나 필터링이 되지 않을 때 */}
      {filteredStudents.map((student, index) => (
        <li key={index}>
          {student.name} ({student.age}) - {student.grade}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
