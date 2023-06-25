/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  DownSquareOutlined,
  UpSquareOutlined,
  CheckOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Tooltip, theme } from 'antd';
import { codeBoxActionCss, codeBoxIconCss } from './DemoCard.style';

const { useToken } = theme;

function CardToolbar({ code, expand, isExpand }) {
  const [copied, setCopied] = useState(false);
  const [copyTooltipVisible, setCopyTooltipVisible] = useState(false);

  const { token } = useToken();

  const handleCodeCopied = () => {
    setCopied(true);
  };

  const handleCopyTooltipVisibleChange = (visible) => {
    setCopyTooltipVisible(visible);
    if (visible) {
      setCopied(false);
    }
  };

  return (
    <div css={codeBoxActionCss(token)}>
      <span css={codeBoxIconCss(token, (copied && copyTooltipVisible))}>
        <Tooltip
          title={copied ? 'Copied' : 'Copy code'}
          open={copyTooltipVisible}
          onOpenChange={handleCopyTooltipVisibleChange}
        >
          <CopyToClipboard text={code} onCopy={handleCodeCopied}>
            {copied ? <CheckOutlined /> : <SnippetsOutlined />}
          </CopyToClipboard>
        </Tooltip>
      </span>
      <span css={codeBoxIconCss(token)} onClick={expand}>
        <Tooltip title={isExpand ? 'Hide code' : 'Show code'}>
          {isExpand ? <UpSquareOutlined /> : <DownSquareOutlined />}
        </Tooltip>
      </span>
    </div>
  );
}

export default CardToolbar;
