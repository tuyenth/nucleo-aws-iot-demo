import React, { PropTypes } from 'react';

const offsetX = 15;
const offsetY = 20;

const CursorTooltip = ({ children, cursorX, containerWidth, width = 170 }) => {
    const isLeft = cursorX - containerWidth < -200;
    const style = {
        left: (isLeft) ? `${offsetX}px` : null,
        right: (!isLeft) ? `${offsetX}px` : null,
        top: `${-offsetY}px`,
        width: `${width}px`,
    };
    return (
        <div className="cursor-tooltip" style={style}>{children}</div>
    );
};

CursorTooltip.propTypes = {
    cursorX: PropTypes.number,
    width: PropTypes.number,
    containerWidth: PropTypes.number,
};

export default CursorTooltip;
