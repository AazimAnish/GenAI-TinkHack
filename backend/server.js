const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter')
const salaryRouter = require('./routers/salaryRouter')
const loanRouter = require('./routers/loanRouter')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRouter)
app.use('/salary',salaryRouter)
app.use('/loan',loanRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
