import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';
// import ListHoc from './components/ListHoc';

import { fetchDataList } from './service';

// const StudentListHocFn = ListHoc(StudentList);
// const TeacherListHocFn = ListHoc(TeacherList);
// const StudentListHoc = StudentListHocFn(fetchDataList);
// const TeacherListHoc = TeacherListHocFn(fetchDataList);

const StudentListHoc = StudentList(fetchDataList);
const TeacherListHoc = TeacherList(fetchDataList);

class Main extends React.Component {
  // state = {
  //   studentList: [],
  //   teacherList: [],
  // };

  // async componentDidMount() {
  //   const studentList = await fetchDataList('student');
  //   const teacherList = await fetchDataList('teacher');

  //   this.setState({
  //     studentList: studentList.data,
  //     teacherList: teacherList.data,
  //   });
  // }

  // removeStudent = (id) => {
  //   this.setState({
  //     studentList: this.state.studentList.filter((item) => item.id !== id),
  //   });
  // };

  // likeTeacher = (id) => {
  //   this.setState({
  //     teacherList: this.state.teacherList.map((item) => {
  //       if (item.id === id) {
  //         item.like += 1;
  //       }
  //       return item;
  //     }),
  //   });
  // };

  render() {
    return (
      <>
        <StudentListHoc field={'student'} />
        <TeacherListHoc field={'teacher'} />
        {/* <StudentList
          data={this.state.studentList}
          removeStudent={this.removeStudent}
        />
        <TeacherList
          data={this.state.teacherList}
          likeTeacher={this.likeTeacher}
        /> */}
      </>
    );
  }
}

export default Main;
