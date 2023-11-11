const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter')
const salaryRouter = require('./routers/salaryRouter')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRouter)
app.use('/salary',salaryRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
