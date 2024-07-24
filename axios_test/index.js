//axios_test/index.js

import axios from "axios";

axios
  .get(
    "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240717"
  )
  .then((result) => {
    console.log(result.data.boxOfficeResult.dailyBoxOfficeList[0]);
  });
