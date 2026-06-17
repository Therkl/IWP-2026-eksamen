module.exports = (req, res, next) => {
  const { title, content } = req.body;

  // Add code for input validation here.
  if (!title || !content) {
    return res.status(400).send('Title and content are required.');
  }

  next();
};