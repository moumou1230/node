//customer_sql.js
const sql = {
  customerInsert: "insert into customer set ?",
  customerUpdate: "update  customer set  ? where id = ?",
  customerDelete: "delete from customer where id =?",
  customerList: "select * from customer",
  customerGet: "select * from customer where ?",
};
module.exports = sql;
