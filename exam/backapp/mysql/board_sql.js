const sql = {
  boardList: "select * from t_board_board",
  boardGet: "select * from t_board_board where no = ?",
  boardInsert: "insert into t_board_board set ?",
  boardUpdate: "update t_board_board set ? where no= ?",
  replyGet:
    "SELECT a.no, a.created_date, a.title, a.content as at,a.writer as aw, b.create_date, b.content, b.writer as bw from t_board_board a join t_comment_board b on a.no = b.bno where a.no = ?",
};
module.exports = sql;
