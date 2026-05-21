interface FormattedTextProps {
  text: string;
  className?: string;
}

export default function FormattedText({ text, className = '' }: FormattedTextProps) {
  const renderLine = (line: string, idx: number) => {
    // Bold: **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });

    // Bullet points
    if (line.startsWith('• ') || line.startsWith('- ')) {
      return (
        <li key={idx} className="ml-4 list-disc">
          {rendered.map((r, i) => typeof r === 'object' && 'props' in r ?
            { ...r, props: { ...r.props, children: r.props.children === line ? line.slice(2) : r.props.children } } : r
          )}
        </li>
      );
    }

    return <span key={idx}>{rendered}{idx < text.split('\n').length - 1 && <br />}</span>;
  };

  const lines = text.split('\n');
  const elements: JSX.Element[] = [];
  let inList = false;
  let listItems: JSX.Element[] = [];

  lines.forEach((line, idx) => {
    const isBullet = line.startsWith('• ') || line.startsWith('- ');

    if (isBullet) {
      if (!inList) inList = true;
      const content = line.slice(2);
      const parts = content.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      });
      listItems.push(<li key={idx} className="mb-1">{rendered}</li>);
    } else {
      if (inList) {
        elements.push(<ul key={`list-${idx}`} className="list-disc ml-4 my-2 space-y-0.5">{listItems}</ul>);
        listItems = [];
        inList = false;
      }
      if (line.trim() === '') {
        elements.push(<br key={idx} />);
      } else {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        const rendered = parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
          }
          return <span key={i}>{part}</span>;
        });
        elements.push(<p key={idx} className="mb-1 last:mb-0">{rendered}</p>);
      }
    }
  });

  if (inList) {
    elements.push(<ul key="list-end" className="list-disc ml-4 my-2 space-y-0.5">{listItems}</ul>);
  }

  return <div className={`text-sm leading-relaxed ${className}`}>{elements}</div>;
}
