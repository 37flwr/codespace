import { useEffect, useState, type FC } from 'react';
import { generateRandomNumberInRange } from '../../shared/lib/generateRandomNumberInRange';

import './styles.scss';

interface ITyper {
  autoStart?: boolean;
  loop?: boolean;
  text: string;
}

const Typer: FC<ITyper> = ({ text, autoStart = true, loop = true }) => {
  const [characterIdx, setCharacterIdx] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [revert, setRevert] = useState<boolean>(false);
  const specialChars = /[\\]/;

  const generateNextChar = (): any => {
    if (specialChars.test(text[characterIdx])) {
      const nextChar = text[characterIdx + 1];

      setCurrentText(currentText + `\\${nextChar}`);
      setCharacterIdx(characterIdx + 2);
    } else {
      setCurrentText(text.slice(0, characterIdx));
      setCharacterIdx(characterIdx + 1);
    }
  };

  const reduceCharacter = (): any => {
    setCurrentText(currentText.slice(0, characterIdx));
    setCharacterIdx(characterIdx - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loop && characterIdx === text.length && autoStart) {
        setCharacterIdx(characterIdx - 2);
        setRevert(true);
      }

      if (loop && revert && autoStart && characterIdx === 1) {
        setRevert(false);
      }

      if (revert) {
        reduceCharacter();
      } else {
        generateNextChar();
      }
    }, generateRandomNumberInRange(80, 120));
    return () => {
      clearTimeout(timer);
    };
  }, [characterIdx]);

  return <p className="typer">{currentText}</p>;
};

export default Typer;
