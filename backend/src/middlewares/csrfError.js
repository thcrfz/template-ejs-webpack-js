/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
export default function checkCsrfError(err, req, res, next) {
  if (err && err.code === 'EBADCSRFTOKEN') return res.render('404');
}
