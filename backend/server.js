const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users',userRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
