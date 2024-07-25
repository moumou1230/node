let sql = {
  boardList: "select * from board",
  boardGet: "select * from board where ?",
  boardInsert: "insert into board set ?",
  boardUpdate: "update  board set  ? where boardid = ?",
  boardDelete: "delete from board where boardid =?",
};
module.exports = sql;
