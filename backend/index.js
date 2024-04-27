const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const membersRouter = require("./routes/members")

app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/members",membersRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
