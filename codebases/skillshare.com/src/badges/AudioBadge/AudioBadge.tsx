var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { padding } from 'polished';
import { Box, makeStyles } from '@material-ui/core';
var useStyles = makeStyles(function (_a) {
    var palette = _a.palette, spacing = _a.spacing;
    return ({
        root: __assign(__assign({ backgroundColor: palette.tertiary.main, borderRadius: spacing(2), display: 'flex', maxHeight: 30, height: '100%', justifyContent: 'center' }, padding(7, 0)), { width: 114 }),
    });
});
export function AudioBadge() {
    var root = useStyles().root;
    return (React.createElement(Box, { className: root },
        React.createElement("svg", { width: "92", height: "17", viewBox: "0 0 92 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M1.61429 12.383C0.7232 12.383 0 11.6681 0 10.7873V5.6809C0 4.80005 0.7232 4.08516 1.61429 4.08516C2.50537 4.08516 3.22857 4.80005 3.22857 5.6809V10.7873C3.22857 11.6681 2.50537 12.383 1.61429 12.383Z", fill: "#68FF7D" }),
            React.createElement("path", { d: "M8.07143 16.2128C7.18035 16.2128 6.45715 15.4979 6.45715 14.6171V1.85112C6.45715 0.970265 7.18035 0.255371 8.07143 0.255371C8.96252 0.255371 9.68572 0.970265 9.68572 1.85112V14.6171C9.68572 15.4979 8.96252 16.2128 8.07143 16.2128Z", fill: "#68FF7D" }),
            React.createElement("path", { d: "M14.5286 12.383C13.6375 12.383 12.9143 11.6681 12.9143 10.7873V5.6809C12.9143 4.80005 13.6375 4.08516 14.5286 4.08516C15.4197 4.08516 16.1429 4.80005 16.1429 5.6809V10.7873C16.1429 11.6681 15.4197 12.383 14.5286 12.383Z", fill: "#68FF7D" }),
            React.createElement("path", { d: "M20.9857 16.2128C20.0946 16.2128 19.3714 15.4979 19.3714 14.6171V1.85112C19.3714 0.970265 20.0946 0.255371 20.9857 0.255371C21.8768 0.255371 22.6 0.970265 22.6 1.85112V14.6171C22.6 15.4979 21.8768 16.2128 20.9857 16.2128Z", fill: "#68FF7D" }),
            React.createElement("path", { d: "M27.4429 12.383C26.5518 12.383 25.8286 11.6681 25.8286 10.7873V5.6809C25.8286 4.80005 26.5518 4.08516 27.4429 4.08516C28.334 4.08516 29.0572 4.80005 29.0572 5.6809V10.7873C29.0572 11.6681 28.334 12.383 27.4429 12.383Z", fill: "#68FF7D" }),
            React.createElement("path", { d: "M43.1214 13.2511H38.3237L37.8588 14.8787H34.5527L39.1373 1.49362H42.2884L46.8923 14.8787H43.5863L43.1214 13.2511ZM42.424 10.8192L40.7193 4.87022L39.0146 10.8192H42.424Z", fill: "white" }),
            React.createElement("path", { d: "M47.8738 11.3553V5.65532H50.87V10.7043C50.87 11.9681 51.2961 12.6511 52.4197 12.6511C53.6788 12.6511 54.2212 11.8468 54.2212 10.6021V5.64894H57.1592V14.8723H54.2212V13.5511C53.6982 14.5277 52.7296 15.1213 51.322 15.1213C49.0749 15.1213 47.8738 13.7426 47.8738 11.3553Z", fill: "white" }),
            React.createElement("path", { d: "M69.2276 1.48723V14.8723H66.2896V13.5702C65.7859 14.4894 64.6236 15.1213 63.3322 15.1213C60.5492 15.1213 58.9413 13.034 58.9413 10.2638C58.9413 7.51276 60.6654 5.40638 63.3709 5.40638C64.7269 5.40638 65.7859 6.03829 66.2896 6.97659V1.48723H69.2276V1.48723ZM66.4058 10.2638C66.4058 8.94255 65.6503 7.85744 64.1845 7.85744C62.8092 7.85744 61.9568 8.87234 61.9568 10.2638C61.9568 11.6553 62.8092 12.6894 64.1845 12.6894C65.6503 12.6957 66.4058 11.6043 66.4058 10.2638Z", fill: "white" }),
            React.createElement("path", { d: "M71.3326 1.8C71.3326 0.804255 72.0881 0 73.1535 0C74.219 0 74.9874 0.804255 74.9874 1.8C74.9874 2.7766 74.2125 3.58085 73.1535 3.58085C72.0946 3.58085 71.3326 2.7766 71.3326 1.8Z", fill: "#00FF84" }),
            React.createElement("path", { d: "M74.6193 5.65532H71.6813V14.8723H74.6193V5.65532Z", fill: "white" }),
            React.createElement("path", { d: "M76.3434 10.2638C76.3434 7.45532 78.3192 5.40638 81.5284 5.40638C84.7183 5.40638 86.6942 7.45532 86.6942 10.2638C86.6942 13.0723 84.7183 15.1213 81.5284 15.1213C78.3128 15.1213 76.3434 13.0787 76.3434 10.2638ZM83.7497 10.2638C83.7497 8.86596 82.9167 7.8766 81.5284 7.8766C80.1143 7.8766 79.3072 8.87234 79.3072 10.2638C79.3072 11.6553 80.1208 12.6511 81.5284 12.6511C82.9167 12.6574 83.7497 11.6617 83.7497 10.2638Z", fill: "white" }),
            React.createElement("path", { d: "M88.0243 13.1936C88.0243 12.1596 88.8573 11.317 89.9421 11.317C91.0269 11.317 91.8599 12.1596 91.8599 13.1936C91.8599 14.2085 91.0269 15.0702 89.9421 15.0702C88.8573 15.0638 88.0243 14.2021 88.0243 13.1936Z", fill: "#00FF84" }))));
}
//# sourceMappingURL=AudioBadge.js.map