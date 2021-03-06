import { get, post } from './http';

/**
 * 登录
 * @param  {string} username 用户名
 * @param  {string} password 密码
 */
export async function Login (username, password) {
    const param = {
        'username': username,
        'password': password,
    };
    const response = await post('/v1/login', param);
    return response.data;
}

/**
 * 查询用户拥有的所有账本（账本过多时会分页）
 * @param  {number} page 页码
 */
export async function QueryAccountBook (page) {
    const param = {
        'page': page || 1,
    };
    const response = await get('/v1/account_book', param);
    return response.data;
}

/**
 * 查询特定ID的账本
 * @param  {number} bookID 账本ID
 */
export async function GetAnAccountBook (bookID) {
    const param = {
        'book_id': bookID,
    };
    const response = await get('/v1/account_book', param);
    return response.data;
}

/**
 * 新建账本
 * @param  {string} bookName 账本名称
 */
export async function AddAccountBook (bookName) {
    const param = {
        'book_name': bookName,
    };
    const response = await get('/v1/account_book/add', param);
    return response.data;
}

/**
 * 在某本账本中查询投资记录
 * @param  {number} bookID 账本ID
 * @param  {number} page 页码
 */
export async function QueryBookRecords (bookID, page) {
    const param = {
        'book_id': bookID,
        'page': page || 1,
    };
    const response = await get('/v1/record', param);
    return response.data;
}

/**
 * 在某账本中添加一条投资记录
 * @param  {number} bookID 目标账本ID
 * @param  {number} cash 金额
 * @param  {number} date 日期（时间戳，毫秒为小数部分）
 * @param  {0|1} type 投资类型（0为投入，1为收回）
 * @param  {string?} note 备注，可选
 */
export async function AddRecord (bookID, cash, date, type, note) {
    const param = {
        'book_id': bookID,
        'cash': cash,
        'date': date,
        'type': type,
        'note': note,
    };
    const response = await get('/v1/record/add', param);
    return response.data;
}
