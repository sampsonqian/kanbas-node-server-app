import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.delete("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const status = await assignmentDao.deleteAssignment(assignmentID);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const assignmentUpdates = req.body;
        const newAssignment = await assignmentDao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(newAssignment);
      });

      app.get("/api/enrollments/:userId", async (req, res) => {
        const { userId } = req.params;
        const enrollments = Database.enrollments.filter(
          (enrollment) => enrollment.user === userId
        );
        res.json(enrollments);
      });
}