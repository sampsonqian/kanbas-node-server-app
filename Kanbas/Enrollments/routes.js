import * as enrollmentDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    // Enroll a user from a course
      app.post("/api/enrollments/:enrollmentId", async (req, res) => {
        const { userId, courseId } = req.body;
        const newEnrollment = await enrollmentDao.enrollUserInCourse(userId, courseId);
        res.send(newEnrollment);
        
      });
    
      // Unenroll a user from a course
      app.delete("/api/enrollments:enrollmentId", async (req, res) => {
        const { enrollmentId } = req.params;
        const status= await enrollmentDao.unenrollUserFromCourse(enrollmentId);
        res.send(status);
      });
}