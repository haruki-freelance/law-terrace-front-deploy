import { HeaderTitle } from '~/shared/components/header-title/header-title';
import type { Route } from './+types/top';
import sort from '~/assets/images/sort.svg';
import { Button } from '~/shared/components/button/button';
import { ArticleItem } from '~/shared/components/article-item/article-item';
import { SearchTag } from '~/shared/components/search-tag/search-tag';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '法テラス｜弁護士' },
  ];
}

export default function Top() {
  return (
    <main className='flex flex-col w-full md:w-[73%] py-8 pl-8 pr-4'>
      {/** 連絡一覧 */}
      <section>
        <header className='flex justify-between'>
          <HeaderTitle title='連絡一覧' />
          <div className='flex flex-row gap-6'>
            <Button variant='solid-fill' size='sm'>
              ＋新規連絡
            </Button>
            <img src={sort} alt='ソート' className='block mr-1'/>
          </div>
        </header>
        <div className='mt-4 max-h-166.5 overflow-y-auto md:max-h-108.75'>
          <ArticleItem title='12345678 宇津井 祐一' content='多重債務に関する詳細情報について、本人情報に訂正がありましたので再送します' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={true} isFlagOn={false} />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={true} isFlagOn={false} />
          <ArticleItem title='12345678 宇津井 祐一' content='多重債務に関する詳細情報について、本人情報に訂正がありましたので再送します' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={false} isFlagOn={true} />
          <ArticleItem title='12345678 宇津井 祐一' content='多重債務に関する詳細情報について、本人情報に訂正がありましたので再送します' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={false} isFlagOn={false} />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
          <ArticleItem title='12345678 大久保 千秋' content='離婚相談の相談内容について、詳細情報をを更新しましたので内容確認をお願いします' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
        </div>
      </section>
      {/** 事件検索 */}
      <section className='hidden md:block mt-16'>
        <header className='flex justify-between'>
          <HeaderTitle title='事件検索' />
          <div className='flex flex-row gap-4'>
            <SearchTag title='民事法律扶助' isSelected={true} />
            <SearchTag title='国選弁護等関連' isSelected={false} />
            <SearchTag title='犯罪被害者支援' isSelected={false} />
            <SearchTag title='受託業務' isSelected={false} />
            <img src={sort} alt='ソート' className='block mx-1'/>
          </div>
        </header>
        <div className='mt-4 max-h-65.25 overflow-y-auto'>
          <ArticleItem title='XYZ-AAA 大久保 千秋' content='進行中　DV被害と離婚相談' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
          <ArticleItem title='XYZ-VCX  宇津井 祐一' content='完了　３件の債務整理' 
                        updDatetime='25/11/12 14:32' category='民事法律扶助' isNew={false} isFlagOn={false} />
          <ArticleItem title='XYZ-AAA 大久保 千秋' content='進行中　DV被害と離婚相談' 
                        updDatetime='25/11/12 14:32' category='国選弁護等関連' isNew={false} isFlagOn={false} />
        </div>
      </section>
    </main>
  );
}
