const ramp = (id: string, channel: 'r' | 'g', vertical: boolean) => {
  const color = (value: number) =>
    channel === 'r' ? `rgb(${value},0,0)` : `rgb(0,${value},0)`;
  return `<linearGradient id='${id}' x1='0' y1='0' x2='${vertical ? 0 : 1}' y2='${vertical ? 1 : 0}'>
    <stop offset='0' stop-color='${color(0)}'/>
    <stop offset='0.14' stop-color='${color(128)}'/>
    <stop offset='0.86' stop-color='${color(128)}'/>
    <stop offset='1' stop-color='${color(255)}'/>
  </linearGradient>`;
};

const EDGE_MAP = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'>
    <defs>${ramp('x', 'r', false)}${ramp('y', 'g', true)}</defs>
    <rect width='100' height='100' fill='url(#x)'/>
    <rect width='100' height='100' fill='url(#y)' style='mix-blend-mode:screen'/>
  </svg>`
)}`;

const GlassLens = () => (
  <svg aria-hidden width='0' height='0' className='absolute'>
    <filter
      id='glass-lens'
      x='0'
      y='0'
      width='100%'
      height='100%'
      colorInterpolationFilters='sRGB'
    >
      <feImage
        href={EDGE_MAP}
        x='0'
        y='0'
        width='100%'
        height='100%'
        preserveAspectRatio='none'
        result='edges'
      />
      <feDisplacementMap
        in='SourceGraphic'
        in2='edges'
        scale='-24'
        xChannelSelector='R'
        yChannelSelector='G'
      />
    </filter>
  </svg>
);

export default GlassLens;
