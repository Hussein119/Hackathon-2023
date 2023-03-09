const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const subjectRouter = require('./routes/subjectRoutes');
const LoginRouter = require('./routes/LoginRoutes');
const newsRoutes = require('./routes/newsRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subject', subjectRouter);
app.use('/api/v1/Login', LoginRouter);
app.use('/api/v1/news', newsRoutes);
app.use('/api/v1/department', departmentRoutes);

module.exports = app;
