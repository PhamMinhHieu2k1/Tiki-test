export const STATE = {
    ALL: 'ALL',
    PROCESSING: 'PROCESSING',
    DELIVERYING: 'DELIVERYING',
    COMPLETE: 'COMPLETE',
    CANCEL: 'CANCEL',
};

export default {
    [STATE.ALL]: 'Tất cả',
    [STATE.PROCESSING]: 'Đang xử lý',
    [STATE.DELIVERYING]: 'Đang giao hàng',
    [STATE.COMPLETE]: 'Hoàn thành',
    [STATE.CANCEL]: 'Đã hủy',
};
