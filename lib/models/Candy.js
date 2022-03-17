// const candy = require ('../controllers/candy');
const pool = require('../utils/pool');

module.exports = class Candy {
    id;
    name;
    type;
    quantity;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.type = row.type;
        this.quantity = row.quantity;
    }

    static async insert({ name, type, quantity }) {
        const { rows } = await pool.query(
            `INSERT INTO 
            candy
            (name, type, quantity)
            VALUES 
            ($1, $2, $3)
            RETURNING
            *
                `,
            [name, type, quantity]
        );
        return new Candy(rows[0]);
    }
    static async getById(id) {
        const { rows } = await pool.query(
            `SELECT 
            *
            FROM 
            candy
            WHERE
            id=$1
            `,
            [id]
        );
        return new Candy(rows[0]);
    }
    static async getAll(id) {
        const { rows } = await pool.query(
            `SELECT 
            *
            FROM 
            candy
            `
            
        );
        return rows.map((row) => new Candy(row));
    }

    static async updateById(id, {name, type, quantity}) {
        const existingCandy = await Candy.getById(id);
       if(!existingCandy) return null; 

       const newName = name ?? existingCandy.name;
       const newType = type ?? existingCandy.type;
       const newQuantity = quantity ?? existingCandy.quantity; 

        const { rows } = await pool.query(
            `UPDATE
            candy
            SET
            name=$2
            type=$3
            quantity=$4
            WHERE
            id=$1
            RETURNING 
            *;
            `,
            [id, newName, newType, newQuantity]
        );
        if(!rows[0]) return null;
        return new Candy(rows[0]);
    }

    static async deleteById(id) {
        const { rows } = await pool.query(
            `DELETE FROM
            candy
            WHERE
            id=$1
            RETURNING
            *
            `,
            [id]
        );
        return new Candy(rows[0]);
    }
};