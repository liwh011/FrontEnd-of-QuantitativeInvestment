import { get, post } from './http'

// 查询指定账本的记录
export async function QueryBookRecords(bookName) {
    let param = {
        'name': bookName,
    };
    const response = await get('/book', param);
    return response.data;
}