import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';
import SyntaxHighLightDynamic from 'react-syntax-highlighter';

interface ICodeSyntaxProps {
  language: string;
  end: boolean;
  text: string;
}

const CodeHighlight = ({ end, language, text }: ICodeSyntaxProps) => {
  return (
    <SyntaxHighLightDynamic
      className={!end ? 'blinking-cursor' : ''}
      language={language}
      style={dracula}
    >
      {text}
    </SyntaxHighLightDynamic>
  );
};

export default CodeHighlight;
