/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';

import getMobileDetect from '@/hooks/useMobile';
import {
  CODE_SNIPPET_ANIMATION_DURATION_SINGLE,
  CODE_SNIPPET_ANIMATION_DURATION_BLOCK,
} from '@/constants/ animation';
import styles from './codeSnippetAnimation.module.scss';

const CodeHighlight = dynamic(() => import('./codeHighlight'), { ssr: false });

interface ICodeSnippetAnimationProps {
  snippet: string;
  showLineNumber?: boolean;
  language: string;
  type?: 'block' | 'single';
  start?: boolean;
  child?: React.ReactNode;
  onEnd?: () => void;
}

interface ICodeSyntaxProps {
  language: string;
  end: boolean;
  text: string;
}

const CodeSyntax = ({ end, language, text }: ICodeSyntaxProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const { isMobile } = getMobileDetect(userAgent);

    if (!isMobile()) {
      setShow(true);
    }
  }, []);

  return show ? (
    <CodeHighlight end={end} language={language} text={text} />
  ) : null;
};

const CodeSnippetAnimation = ({
  snippet,
  showLineNumber = true,
  language,
  type = 'single',
  start = true,
  child = undefined,
  onEnd,
}: ICodeSnippetAnimationProps) => {
  const [codeText] = useState(snippet);
  const [text, setText] = useState('');
  const [textRow, setTextRow] = useState(0);
  const [end, setEnd] = useState(false);
  const [textRows] = useState(snippet.split('\n'));

  const speed = useMemo(
    () =>
      type === 'block'
        ? CODE_SNIPPET_ANIMATION_DURATION_BLOCK
        : CODE_SNIPPET_ANIMATION_DURATION_SINGLE,
    [type]
  );

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      if (window.innerWidth < 768) return;
      if (!start) return;
      if (type === 'single' && text !== codeText) {
        setText(codeText.slice(0, text.length + 1));
      }

      if (type === 'block' && text !== codeText) {
        const row = textRows.slice(0, textRow + 1).join('\n');
        setText(row);
        setTextRow((prev) => prev + 1);
      }

      if (text === codeText) {
        setEnd(true);
        onEnd && onEnd();
      }
    }, speed);

    return () => clearTimeout(timeout2);
  }, [start, codeText, text, textRow, setTextRow, speed, textRows, type]);

  return (
    <div className={styles.outer}>
      <div className={styles.codeEditor}>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.dotRed}`}></div>
          <div className={`${styles.dot} ${styles.dotYellow}`}></div>
          <div className={`${styles.dot} ${styles.dotGreen}`}></div>
        </div>
        {showLineNumber && (
          <pre className={styles.noList}>
            {"12" + textRows.map((_: any, index: React.Key | null | undefined) => (
              <span key={index}>{Number(index) + 1}</span>
            ))}
          </pre>
        )}

        <div
          className={styles.syntaxWrapper}
          style={{ height: textRows.length * 24 }}
        >
          <CodeSyntax end={end} language={language} text={text} />
        </div>
        {child}
      </div>
    </div>
  );
};

export default CodeSnippetAnimation;
