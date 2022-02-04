const TITLE_MIN = 1;
const TITLE_MAX = 100;
const TITLE_MAX_ERROR = `제목은 ${TITLE_MAX}자 이하이어야 합니다.`;
const TITLE_MIN_ERROR = `제목은 적어도 ${TITLE_MIN}자 이상이어야 합니다.`;
const CONTENT_MIN = 1;
const CONTENT_MAX = 16777214;
const CONTENT_MAX_ERROR = `내용은 ${CONTENT_MAX}자 이하이어야 합니다.`;
const CONTENT_MIN_ERROR = `내용은 적어도 ${CONTENT_MIN}자 이상이어야 합니다.`;
const INTERNAL_SERVER_ERROR = '서버 내부 오류';


module.exports = {
  TITLE_MIN,
  TITLE_MAX,
  TITLE_MAX_ERROR,
  TITLE_MIN_ERROR,
  CONTENT_MIN,
  CONTENT_MAX,
  CONTENT_MAX_ERROR,
  CONTENT_MIN_ERROR,
  INTERNAL_SERVER_ERROR,
};
