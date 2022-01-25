const ID_MIN = 8;
const ID_MAX = 20;
const ID_MAX_ERROR = `아이디는 ${ID_MAX}자 이상여야 합니다.`;
const ID_MIN_ERROR = `아이디는 적어도 ${ID_MIN}자 이하여야 합니다.`;
const PASSWORD_MIN = 8;
const PASSWORD_MAX = 20;
const PASSWORD_MAX_ERROR = `패스워드는 ${PASSWORD_MAX}자 이상여야 합니다.`;
const PASSWORD_MIN_ERROR = `패스워드는 적어도 ${PASSWORD_MIN}자 이하여야 합니다.`;
const ID_PASSWORD_COMBINATION_ERROR = '아이디나 비밀번호가 틀렸습니다.';
const INTERNAL_SERVER_ERROR = '서버 내부 오류';
const SUCCESSFULLY_LOGGED_IN = '성공적으로 로그인되었습니다.';
const FETCH_INFO_ERROR_MESSAGE = '계정 정보를 가져올 수 없습니다.';

module.exports = {
  ID_MAX,
  ID_MIN,
  ID_MAX_ERROR,
  ID_MIN_ERROR,
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_MAX_ERROR,
  PASSWORD_MIN_ERROR,
  ID_PASSWORD_COMBINATION_ERROR,
  INTERNAL_SERVER_ERROR,
  SUCCESSFULLY_LOGGED_IN,
  FETCH_INFO_ERROR_MESSAGE,
};
