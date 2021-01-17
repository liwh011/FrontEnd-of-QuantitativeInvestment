import Mock from 'mockjs';

const Random = Mock.Random;

// 生成单个账本内的记录
const GenerateRecords = function () {
    let records = [];
    for (let i = 0; i < Math.random() * 10; i++) {
        records.push({
            date: Random.date(),
            cash: Random.integer(-999999, 999999),
        });
    }
    return records;
};

// 一并生成多个账本和其中的记录
const GenerateUser = function () {
    let books = [];
    for (let i = 0; i < Math.random() * 10 + 1; i++) {
        books.push({
            name: Random.ctitle(),
            records: GenerateRecords(),
        });
    }
    return books;
}


Mock.mock(/\/book\?.*/, GenerateRecords());     // 拦截/book