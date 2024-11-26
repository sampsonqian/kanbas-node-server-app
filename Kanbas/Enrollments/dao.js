import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(enrollmentId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(enrollment => !(enrollment._id === enrollmentId ));
  }