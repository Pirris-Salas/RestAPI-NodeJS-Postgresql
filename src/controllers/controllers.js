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
};

const getUserByID = async (req, res) => {
const id = req.params.id;
const response = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);
res.json(response.rows);
};

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

const updateUser = async (req, res) => {
const id = req.params.id;
const { name, email, password, phoneNumber } = req.body;
const response = await pool.query('UPDATE clients SET name = $1, email = $2, password =  $3, "phoneNumber" = $4 WHERE id = $5',
[name, email, password, phoneNumber, id]);
console.log(response);
res.json(`User ${name} updated successfully`);
};

const deleteUser = async (req, res) => {
const id = req.params.id;
const response = await pool.query('DELETE FROM clients WHERE id = $1', [id]);
console.log(response);
res.json(`User ${id} deleted successfully`);
};

module.exports = {
    getUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}