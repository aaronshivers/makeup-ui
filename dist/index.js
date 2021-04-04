'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Button = ({ children, primary = false, onClick, backgroundColor = '#D1D5DB', color = '#1F2937', }) => {
    const buttonStyles = {
        fontWeight: 700,
        padding: '10px 20px',
        border: 0,
        cursor: 'pointer',
        display: 'inline-block',
        lineHeight: 1,
        backgroundColor: primary ? '#eb2525' : backgroundColor,
        color: primary ? '#F3F4F6' : color,
    };
    return (React__default['default'].createElement("button", { type: "button", onClick: onClick, style: buttonStyles }, children));
};

const Input = ({ onChange, label, }) => (React__default['default'].createElement("label", null,
    label,
    React__default['default'].createElement("input", { onChange: onChange })));

exports.Button = Button;
exports.Input = Input;
//# sourceMappingURL=index.js.map
