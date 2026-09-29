require('dotenv').config();

const app = require('./app');

const connectDB = async () => {
  try {
    const dbConnect = require('./config/db');
    await dbConnect();
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`
    );
  });
};

startServer();