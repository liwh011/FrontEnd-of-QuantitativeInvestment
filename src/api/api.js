import { recordType } from '../common/enum';
import { get, post } from './http';

/**
 * 登录
 * @param  {string} username 用户名
 * @param  {string} password 密码
 */
export async function login(username, password) {
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
export async function queryAllAccountBook(page) {
    const param = {
        'page': page || 1,
    };
    const response = await get('/v1/account-book/books', param);
    return response.data;
}

/**
 * 查询特定ID的账本
 * @param  {number} bookID 账本ID
 */
export async function getAnAccountBook(bookID) {
    const param = {
        'book_id': bookID,
    };
    const response = await get('/v1/account-book/book', param);
    return response.data;
}

/**
 * 新建账本
 * @param  {string} bookName 账本名称
 */
export async function addAccountBook(bookName) {
    const param = {
        'book_name': bookName,
    };
    const response = await get('/v1/account-book/add', param);
    return response.data;
}

/**
 * 在某本账本中查询转账记录
 * @param  {number} bookID 账本ID
 * @param  {number} page 页码
 */
export async function queryTransferRecords(bookID, page) {
    const param = {
        'book_id': bookID,
        'page': page || 1,
    };
    const response = await get('/v1/record/transfer-history', param);
    return response.data;
}

/**
 * 在某本账本中查询总资产变更记录
 * @param  {number} bookID 账本ID
 * @param  {number} page 页码
 */
export async function queryAssetRecords(bookID, page) {
    const param = {
        'book_id': bookID,
        'page': page || 1,
    };
    const response = await get('/v1/record/asset-history', param);
    return response.data;
}

/**
 * 在某账本中添加一条转账记录
 * @param  {number} bookID 目标账本ID
 * @param  {number} cash 金额
 * @param  {number} date 日期（时间戳，毫秒为小数部分）
 * @param  {0|1} type 投资类型（0为投入，1为收回）
 * @param  {string?} note 备注，可选
 */
export async function addTransferRecord(bookID, cash, date, type, note) {
    const param = {
        'book_id': bookID,
        'cash': cash,
        'date': date,
        'type': type,
        'note': note,
    };
    const response = await post('/v1/record/transfer', param);
    return response.data;
}

/**
 * 更新某账本的总资产
 * @param  {number} bookID 目标账本ID
 * @param  {number} asset 总资产
 * @param  {number} date 日期（时间戳，毫秒为小数部分）
 * @param  {string?} note 备注，可选
 */
export async function changeTotalAsset(bookID, asset, date, note) {
    const param = {
        'book_id': bookID,
        'asset': asset,
        'date': date,
        'note': note,
    };
    const response = await post('/v1/record/change-asset', param);
    return response.data;
}


