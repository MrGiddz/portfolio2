import React, { useEffect, useState } from "react";

function useScrambleAnimation(text: string, delay: number): string {
  const [scrambledText, setScrambledText] = useState<string>("");

  useEffect(() => {
    let animation: NodeJS.Timeout | null = null;

    const animate = async () => {
      for (let index = 0; index < text.length; index++) {
        let newText = "";
        for (let j = 0; j < "@%&?".length; j++) {
          newText = text.slice(0, index) + "@%&?"[j];

          setScrambledText(newText);

          await new Promise<void>((resolve) => {
            animation = setTimeout(resolve, delay);
          });
        }
        newText = text.slice(0, index) + text[index];
        setScrambledText(newText);
        await new Promise<void>((resolve) => {
          animation = setTimeout(resolve, delay);
        });
      }

      setScrambledText(text);
    };

    setTimeout(() => animate(), 1500);
    return () => {
      if (animation) clearTimeout(animation);
    };
  }, [text, delay]);

  return scrambledText;
}

// function scrambleCharacter(char: string): string {
//   const chars = '!V/Ct?#';
//   const randomChar = chars[Math.floor(Math.random() * chars.length)];
//   return randomChar !== char ? randomChar : scrambleCharacter(char);
// }

export default useScrambleAnimation;
