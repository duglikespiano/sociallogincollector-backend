"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
router.post('/userinfo', (req, res) => {
    axios_1.default
        .get('https://kapi.kakao.com/v2/user/me', {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `Bearer ${req.body.accessToken}`,
        },
    })
        .then(({ data }) => {
        var _a, _b, _c;
        const kakaoUserInfo = {
            nickname: data.kakao_account.profile.nickname,
            profile_image_url: (_a = data.kakao_account.profile) === null || _a === void 0 ? void 0 : _a.profile_image_url,
            birthday: (_b = data.kakao_account) === null || _b === void 0 ? void 0 : _b.birthday,
            email: (_c = data.kakao_account) === null || _c === void 0 ? void 0 : _c.email,
        };
        res.status(200).json({ kakaoUserInfo });
    })
        .catch((error) => {
        console.error(error);
    });
});
router.post('/unlink', (req, res) => {
    axios_1.default
        .post('https://kapi.kakao.com/v1/user/unlink', null, {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `Bearer ${req.body.accessToken}`,
        },
    })
        .then(({ data }) => {
        if (data.id) {
            res.status(200).json({ message: 'unlinked' });
        }
    })
        .catch((error) => {
        console.error(error);
    });
});
exports.default = router;
