const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

const jobRoutes = require('./routes/jobRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

const app = express();
dotenv.config();
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
const corsOptions = {
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));


app.use("/api/jobs", jobRoutes);
app.use('/api/recruiter', recruiterRoutes);
app.use("/api/candidates", candidateRoutes);

app.get('/', (req, res) => res.send('SkillSync API running...'));

const PORT = 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));