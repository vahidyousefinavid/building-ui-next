import { useRouter } from 'next/router';


export default function LanguageSwitcher() {
  const { locale, push, pathname, asPath } = useRouter();

  const changeLanguage = (lang:any) => {
    push(pathname, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fa')}>فارسی</button>
    </div>
  );
}