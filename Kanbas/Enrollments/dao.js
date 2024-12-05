import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = enrollments.push({ _id: Date.now(), user: userId, course: courseId });
  console.log(newEnrollment);
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(enrollment => !(enrollment.course === courseId && enrollment.user == userId ));
  }
  