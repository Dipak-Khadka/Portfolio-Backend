import Contact from '../models/contact.model.js';

// Create a new contact
const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    return res.status(200).json({
      message: "Contact created successfully!"
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error creating contact"
    });
  }
};

// Get all contacts
const list = async (req, res) => {
  try {
    let contacts = await Contact.find().select('firstname lastname email');
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error retrieving contacts"
    });
  }
};

// Get contact by ID
const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact)
      return res.status(400).json({
        error: "Contact not found"
      });
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve contact"
    });
  }
};

// Read single contact
const read = (req, res) => {
  return res.json(req.profile);
};

// Update contact
const update = async (req, res) => {
  try {
    let contact = req.profile;
    contact = Object.assign(contact, req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error updating contact"
    });
  }
};

// Delete contact
const remove = async (req, res) => {
  try {
    let contact = req.profile;
    let deletedContact = await contact.deleteOne();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error deleting contact"
    });
  }
};

export default { create, contactByID, read, list, remove, update };
