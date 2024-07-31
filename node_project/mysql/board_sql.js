const sql = {
  boardList: "select * from board order by boardid desc limit ?, 10",
  boardCount: "select count(*) cnt from board",
  boardInfo: "select * from board where ?",
  boardInsert: "insert into board set ?",
  boardUpdate: "update board set ? where boardid=?",
  boardDelete: "delete from board where boardid=?",
};
module.exports = sql;
