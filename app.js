const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/categoryRoutes', categoryRoutes);
app.use('/api/orderRoutes', orderRoutes);
app.use('/api/positionRoutes', positionRoutes);

module.exports =  app;