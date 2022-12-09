/**
 * https://www.cnblogs.com/ryans/p/6512631.html
 * Copyright (c) 2017-2022 by RyanxChen & xiaohong2022
 */
!(function (_6vIFH, rXR6A) {
    if (typeof define === "function" && define.amd) {
        define([], rXR6A);
    } else if (typeof module === "object" && module.exports) {
        module.exports = rXR6A();
    } else {
        (_6vIFH || (this || self || window)).Base64 = rXR6A();
    };
}(this, function () {
    'use strict';
    const __9f2YpS_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    const __gE5egd_ = (_9Uz84) => {
        _9Uz84 = _9Uz84.replace(/\r\n/g, "\n");
        var casU4 = "";
        for (var swu_ = 0; swu_ < _9Uz84.length; swu_++) {
            var r3mA = _9Uz84.charCodeAt(swu_);
            if (r3mA < 128) {
                casU4 += String.fromCharCode(r3mA);
            } else if ((r3mA > 127) && (r3mA < 2048)) {
                casU4 += String.fromCharCode((r3mA >> 6) | 192);
                casU4 += String.fromCharCode((r3mA & 63) | 128);
            } else {
                casU4 += String.fromCharCode((r3mA >> 12) | 224);
                casU4 += String.fromCharCode(((r3mA >> 6) & 63) | 128);
                casU4 += String.fromCharCode((r3mA & 63) | 128);
            };
        };
        return casU4;
    };
    const __0TJ5gd_ = (casU4) => {
        var _9Uz84 = "", _2VpM_ = 0, r3mA = 0, Iy6S0a = 0, _4Hcio = 0, _2S9uD = 0;
        while (_2VpM_ < casU4.length) {
            r3mA = casU4.charCodeAt(_2VpM_);
            if (r3mA < 128) {
                _9Uz84 += String.fromCharCode(r3mA);
                _2VpM_++;
            } else if ((r3mA > 191) && (r3mA < 224)) {
                _4Hcio = casU4.charCodeAt(_2VpM_ + 1);
                _9Uz84 += String.fromCharCode(((r3mA & 31) << 6) | (_4Hcio & 63));
                _2VpM_ += 2;
            } else {
                _4Hcio = casU4.charCodeAt(_2VpM_ + 1);
                _2S9uD = casU4.charCodeAt(_2VpM_ + 2);
                _9Uz84 += String.fromCharCode(((r3mA & 15) << 12) | ((_4Hcio & 63) << 6) | (_2S9uD & 63));
                _2VpM_ += 3;
            };
        };
        return _9Uz84;
    };
    class M9OqF {
        constructor() { };
        encode(aV6le) {
            var WFR4l = "", Ql7c, zc9E, fDD6, pOb4, J8wo, N4Nh, u0jL, _2VpM_ = 0;
            aV6le = __gE5egd_(aV6le);
            while (_2VpM_ < aV6le.length) {
                Ql7c = aV6le.charCodeAt(_2VpM_++);
                zc9E = aV6le.charCodeAt(_2VpM_++);
                fDD6 = aV6le.charCodeAt(_2VpM_++);
                pOb4 = Ql7c >> 2;
                J8wo = ((Ql7c & 3) << 4) | (zc9E >> 4);
                N4Nh = ((zc9E & 15) << 2) | (fDD6 >> 6);
                u0jL = fDD6 & 63;
                if (isNaN(zc9E)) {
                    N4Nh = u0jL = 64;
                } else if (isNaN(fDD6)) {
                    u0jL = 64;
                };
                WFR4l = WFR4l +
                    __9f2YpS_.charAt(pOb4) + __9f2YpS_.charAt(J8wo) +
                    __9f2YpS_.charAt(N4Nh) + __9f2YpS_.charAt(u0jL);
            };
            return WFR4l;
        };
        decode(aV6le) {
            var WFR4l = "", Ql7c, zc9E, fDD6, pOb4, J8wo, N4Nh, u0jL, _2VpM_ = 0;
            aV6le = aV6le.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (_2VpM_ < aV6le.length) {
                pOb4 = __9f2YpS_.indexOf(aV6le.charAt(_2VpM_++));
                J8wo = __9f2YpS_.indexOf(aV6le.charAt(_2VpM_++));
                N4Nh = __9f2YpS_.indexOf(aV6le.charAt(_2VpM_++));
                u0jL = __9f2YpS_.indexOf(aV6le.charAt(_2VpM_++));
                Ql7c = (pOb4 << 2) | (J8wo >> 4);
                zc9E = ((J8wo & 15) << 4) | (N4Nh >> 2);
                fDD6 = ((N4Nh & 3) << 6) | u0jL;
                WFR4l = WFR4l + String.fromCharCode(Ql7c);
                if (N4Nh != 64) {
                    WFR4l = WFR4l + String.fromCharCode(zc9E);
                };
                if (u0jL != 64) {
                    WFR4l = WFR4l + String.fromCharCode(fDD6);
                };
            };
            WFR4l = __0TJ5gd_(WFR4l);
            return WFR4l;
        };
    };
    var ct7P = new M9OqF();
    return ct7P;
}));