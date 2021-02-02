export default function csrfMiddleware(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}
