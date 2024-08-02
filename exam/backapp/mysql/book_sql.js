const sql = {
  bookList: "select * from t_book",
  bookGet: "select * from t_book where no = ?",
  bookinsert: "insert into t_book set ?",
  bookupdate: "update t_book set ? where no= ?",
  bookdelete: "delete from t_book where no = ?",
};
module.exports = sql;
