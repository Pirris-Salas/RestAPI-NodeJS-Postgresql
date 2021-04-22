const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'Luis1010',
    database: 'db_login',
};
const pool = new Pool(config);

const getUsers = async (req, res) => {
    try{
    pool.connect;
    const response = await pool.query('SELECT * FROM clients');
    res.status(200).json(response.rows);
    pool.end;
    }catch(e){
        console.log(e);
    };
}
const createUser = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;

    const response = await pool.query('INSERT INTO clients (name, email, password, "phoneNumber") VALUES ($1, $2, $3, $4)',
     [name, email, password, phoneNumber]);
     console.log(response);
     //res.send('User Created');
     res.json({
         message: 'User Added Successfully',
         body:{
             user: {name, email, password, phoneNumber}
         }
     })
    };


module.exports = {
    getUsers,
    createUser
}