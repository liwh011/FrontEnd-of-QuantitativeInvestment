/**
 * 投资记录的类型
 * @readonly
 * @enum {number}
 */
export var recordType = {
    /** 转入、投入的记录 */
    transferIn: 0,
    /** 转出、收回的记录 */
    transferOut: 1,
    /** 总资产更新 */
    assetChange: 2,
};
