// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type GetMailTipsRequest from '../contract/GetMailTipsRequest';

export default function getMailTipsRequest(data: GetMailTipsRequest): GetMailTipsRequest {
    let result: GetMailTipsRequest = {
        __type: 'GetMailTipsRequest:#Exchange',
        ...data,
    };

    return result;
}