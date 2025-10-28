import Project from '../models/project.model.js';

// Create a new project
const create = async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    return res.status(200).json({
      message: "Project created successfully!"
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error creating project"
    });
  }
};

// Get all projects
const list = async (req, res) => {
  try {
    let projects = await Project.find();
    res.json(projects);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error retrieving projects"
    });
  }
};

// Get project by ID
const projectByID = async (req, res, next, id) => {
  try {
    let project = await Project.findById(id);
    if (!project)
      return res.status(400).json({
        error: "Project not found"
      });
    req.profile = project;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve project"
    });
  }
};

// Read single project
const read = (req, res) => {
  return res.json(req.profile);
};

// Update project
const update = async (req, res) => {
  try {
    let project = req.profile;
    project = Object.assign(project, req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error updating project"
    });
  }
};

// Delete project
const remove = async (req, res) => {
  try {
    let project = req.profile;
    let deletedProject = await project.deleteOne();
    res.json(deletedProject);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error deleting project"
    });
  }
};

export default { create, projectByID, read, list, remove, update };
