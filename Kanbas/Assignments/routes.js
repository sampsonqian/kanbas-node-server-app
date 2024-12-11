import * as assignmentDao from "./dao.js";
import Database from "../Database/index.js";

export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentDao.deleteAssignment(assignmentId);
    res.send(status);
  });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const newAssignment = await assignmentDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(newAssignment);
  });
}
