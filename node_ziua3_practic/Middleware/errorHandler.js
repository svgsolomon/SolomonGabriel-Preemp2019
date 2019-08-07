function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(404);
  res.render("error", { error: err });
}
