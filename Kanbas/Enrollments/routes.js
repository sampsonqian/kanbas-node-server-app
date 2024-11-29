import * as enrollmentDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // Enroll a user from a course
  app.post("/api/enrollments/:enrollmentId", async (req, res) => {
    const { userId, courseId } = req.body;
    const newEnrollment = await enrollmentDao.enrollUserInCourse(
      userId,
      courseId
    );
    res.send(newEnrollment);
  });

  // Unenroll a user from a course
  app.delete("/api/enrollments/:enrollmentId", async (req, res) => {
    const { enrollmentId } = req.params;
    const status = await enrollmentDao.unenrollUserFromCourse(enrollmentId);
    res.send(status);
  });

  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
  
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }
  
    const enrollments = Database.enrollments.filter(
      (enrollment) => enrollment.user === userId
    );
  
    res.status(200).json(enrollments);
  });
  
}
