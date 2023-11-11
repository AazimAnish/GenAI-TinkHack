import express from 'express';
const app = express();
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import salaryRouter from './routers/salaryRouter.js';
import loanRouter from './routers/loanRouter.js';
import subscriptionRouter from './routers/subcriptionRouter.js';
// import expenseRouter from './routers/expenseRouter.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRouter);
app.use('/salary', salaryRouter);
app.use('/loan', loanRouter);
app.use('/subscriptions', subscriptionRouter);
// app.use('/expense', expenseRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
