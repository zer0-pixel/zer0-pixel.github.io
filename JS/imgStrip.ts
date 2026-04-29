import random from 'random';

const getStripHTML = (top: number, stripHeight: number): string => {
  const duration = random.int(5, 10);
  const name = `glitch-${duration}`;

  return `
    <div
      class="main"
      style="height: ${stripHeight}px; background-position: 0 -${top}px;"
     />`;
};

const getGlitchHTML = (height: number): string[] => {
  let i = 0;
  const html: string[] = [];

  while (1) {
    const stripHeight = random.int(1, 6);

    if (i + stripHeight < height) {
      const strip = getStripHTML(i, stripHeight);
      html.push(strip);
    } else {
      // Last strip
      const strip = getStripHTML(i, height - i);
      html.push(strip);
      break;
    }

    i = i + stripHeight;
  }

  return html;
};