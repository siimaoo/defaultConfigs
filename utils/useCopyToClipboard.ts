import { useCreateElement } from './useCreateElement';
import { usePromise } from './usePromise';

const useCopyToClipboard = () => {
  const copyLegacy = (text: string) => {
    const element = useCreateElement<HTMLTextAreaElement>('textarea', {
      value: text,
      style: { visibility: 'hidden', position: 'absolute' },
    });
    document.body.appendChild(element);
    element.focus();
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
  };

  const copy = async (text: string, onFinish?: () => void) => {
    const [error] = await usePromise(navigator.clipboard?.writeText(text));
    if (error) copyLegacy(text);
    if (onFinish) onFinish();
  };

  return { copy };
};

export { useCopyToClipboard };
