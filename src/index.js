const express = require('express');
require('./db/connect');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${port}`);
});
