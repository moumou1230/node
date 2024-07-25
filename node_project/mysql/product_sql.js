//product_sql.js
const sql = {
  productInsert: "insert into product set ?",
  productUpdate: "update  product set ? where ?",
  productDelete: "delete from product where ?",
  productList: "select * from product",
  productGet: "select * from product where prodnum = ?",
};
module.exports = sql;
