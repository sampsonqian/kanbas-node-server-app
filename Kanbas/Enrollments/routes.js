import * as enrollmentDao from "./dao.js";
import * as courseDao from "../Courses/dao.js";

export default function EnrollmentRoutes(app) {
  // Enroll a user from a course
  app.post("/api/enrollments/:enrollmentId", async (req, res) => {
    const { userId, courseId } = req.body;
    console.log(`Enroll Request: userId=${userId}, courseId=${courseId}`);
    const newEnrollment = await enrollmentDao.enrollUserInCourse(
      userId,
      courseId
    );
    res.status(200).send({ message: "Enrolled successfully" });
    //res.send(newEnrollment);
  });

  // Unenroll a user from a course
  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentDao.unenrollUserFromCourse(userId, courseId );
    res.send(status);
  });

  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
    const enrollments = await courseDao.findCoursesForEnrolledUser(userId);
    //  Database.enrollments.filter(
    //   (enrollment) => enrollment.user === userId
    // );

    res.status(200).json(enrollments);
  });
}
