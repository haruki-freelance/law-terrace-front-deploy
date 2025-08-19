import { HeaderTitle } from '~/shared/components/header-title/header-title';
import type { Route } from './+types/top';
import sort from '../assets/images/sort.svg';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '法テラス｜弁護士' },
  ];
}

export default function Top() {
  return (
    <main className=''>
      {/** 連絡一覧 */}
      <section>
        <header className='flex justify-between'>
          <HeaderTitle title='連絡一覧' />
          <div>
            <img src={sort} alt='ソート'/>
          </div>
        </header>
      </section>
    </main>
  );
}
